import { DatePipe } from "@angular/common";
import { Injectable } from "@angular/core";
import moment from 'moment';

@Injectable({
    providedIn : 'root'
})
export class Variables {
    constructor(
        private datePipe : DatePipe
    ) {}

    damageMechanismName:any[] = [
        { piping_damage_mechanism : "General and localized metal loss", colspan : 6, show : false, bold : true},
        { id : "01", piping_damage_mechanism : "Sulfidation and High Temp. H2S/H2 Corrosion" },
        { id : "02", piping_damage_mechanism : "Oxidation" },
        { id : "03", piping_damage_mechanism : "Microbiologically Induced Corrosion (MIC)" },
        { id : "04", piping_damage_mechanism : "Naphthenic Acid Corrosion" },
        { id : "05", piping_damage_mechanism : "Erosion/Erosison-Corrosion" },
        { id : "06", piping_damage_mechanism : "Galvanic Corrosion" },
        { id : "07", piping_damage_mechanism : "Atmospheric Corrosion" },
        { id : "08", piping_damage_mechanism : "Corrosion Under Insulation (CUI)" },
        { id : "09", piping_damage_mechanism : "Cooling Water Corrosion" },
        { id : "10", piping_damage_mechanism : "Boiler Water Condensate Corrosion" },
        { id : "11", piping_damage_mechanism : "Soil Corrosion" },
        { id : "12", piping_damage_mechanism : "Ammonium Bisulfide and Chloride Corrosion" },
        { id : "13", piping_damage_mechanism : "Carbon Dioxide Corrosion" },
        { piping_damage_mechanism : "Surface Connected Cracking", colspan : 6, show : false, bold : true },
        { id : "14", piping_damage_mechanism : "Mechanical Fatigue Cracking" },
        { id : "15", piping_damage_mechanism : "Caustic Stress Corrosion Cracking" },
        { id : "16", piping_damage_mechanism : "Polythionic Stress Corrosion Cracking" },
        { id : "17", piping_damage_mechanism : "Sulfide Stress Cracking" },
        { id : "18", piping_damage_mechanism : "Chloride Stress Corrosion Cracking" },
        { piping_damage_mechanism : "Subsurface Cracking", colspan : 6, show : false, bold : true },
        { id : "19", piping_damage_mechanism : "Hydrogen Induced Cracking" },
        { id : "20", piping_damage_mechanism : "Wet Hydrogen Sulfide Cracking" },
        { piping_damage_mechanism : "High-Temperature Micro-fissuring/Micro-void Fromation and Eventual Macro Cracking", colspan : 6, show : false, bold : true },
        { id : "21", piping_damage_mechanism : "High-temperature Hydrogen Attack" },
        { id : "22", piping_damage_mechanism : "Creep/Stress Rupture" },
        { piping_damage_mechanism : "Metallurgical Changes", colspan : 6, show : false, bold : true },
        { id : "23", piping_damage_mechanism : "Graphitization" },
        { id : "24", piping_damage_mechanism : "Temper Embrittlement" },
        { id : "25", piping_damage_mechanism : "Hydrogen Embrittlement" },
    ]

    visualToPoint(c) {
        if(c == 'Excellent')        return 4
        if(c == 'Good')             return 3
        if(c == 'Average')          return 2
        if(c == 'Below Average')    return 1
        if(c == 'Poor')             return 0
    }

    visualToLevel(l) {
        if(l == 4) return 'Excellent'
        if(l == 3) return 'Good'
        if(l == 2) return 'Average'
        if(l == 1) return 'Below Average'
        if(l == 0) return 'Poor'
        return null
    }

    visualConditionAvg(asset, props) {
        return asset?.map(x => this.visualToPoint(x?.visual_condition?.[props]))
        .reduce((x,y) =>  x + y , 0)
    }

    damageToPoint(c) {
        if(c == 'Low')      return 1
        if(c == 'Medium')   return 2
        if(c == 'High')     return 3
    }

    damageToLevel(l) {
        if(l == 1) return 'Low'
        if(l == 2) return 'Medium'
        if(l == 3) return 'High'
        return null
    }

    getCMLCalc(asset) {
        const { cml } = asset ?? [];

        let allYear = asset?.cml?.map(c => c.year)
        allYear = allYear.filter((c, i) => allYear.indexOf(c) == i).sort((a,b) => a-b)
        const stCrYear = allYear.at(-2)
        const { min_required_thickness } = this.getAssetsFormula(asset)

        return cml?.map(c => {
            const lt_cr : any = this.getCalculatedLTCR({...asset, ...c})
            const remaining_life = (c.last_thickness_reading - min_required_thickness) / lt_cr
            return {
                ...c, lt_cr, remaining_life,
                min_required_thickness,
                st_cr : this.getCalculatedSTCR({...asset, ...c, stCrYear})
            }
        })
    }

    getAverageCML(asset, year) {
        const { cml } = asset;

        let allYear = cml?.map(c => c.year)
        allYear = allYear?.filter((c, i) => allYear.indexOf(c) == i).sort((a,b) => a-b)
        const stCrYear = allYear?.at(-2)

        const cmls = cml?.filter(c => c.year == year)
        ?.map(c => ({
            ...c,   
            calculated_cr : this.getCalculatedLTCR({...asset, ...c}),
            calculated_st : this.getCalculatedSTCR({...asset, ...c, stCrYear})
        }))

        const last_cml_reading_date = cmls
        ?.map(({last_thickness_reading_date}) => new Date(last_thickness_reading_date))
        ?.sort((a,b) => a-b)

        function getMinVal(i) {
            const min = cmls?.map(c => c[i])
            console.log(cmls)
            if(!min.length) return 0;
            return Math.min.apply(Math, min)
        }

        function getMaxVal(i) {
            const max = cmls?.map(c => c[i])
            if(!max.length) return 0;
            return Math.max.apply(Math, max)
        }

        const reading = getMinVal("last_thickness_reading");
        const lt_cr = getMaxVal("calculated_cr");
        const st_cr = getMaxVal("calculated_st");

        return { 
            cml_details : cmls?.find(c => c.year = year),
            reading, 
            lt_cr, 
            st_cr,
            last_cml_reading_date : last_cml_reading_date?.at(-1)
        }
    }

    addMonths(date, month) {
        return this.datePipe.transform(moment(date).add(month, 'M').toDate(), 'yyyy-MM-dd')
    }

    getCharCML(cml, identifier) {
        if(!cml) return;
        let cmlLabel = cml?.map(c=>c.cml_id)
        cmlLabel = cmlLabel?.filter((c, i) => cmlLabel.indexOf(c) == i)
    
        let allYear = cml?.map(c => c.year)
        allYear = allYear?.filter((c, i) => allYear.indexOf(c) == i).sort((a,b) => a-b)

        let allCML : any = []
        cml?.forEach(({cml_id, year}) => {
            const uniqucml = allCML.find(({cml_id : allid, year : allyear}) => allid == cml_id && allyear == year)
            if(!uniqucml) allCML.push({cml_id, year})
        })

        allCML = allCML
        .map(({cml_id : allid, year : allyear}) => {

            let avgCML = cml.map(c => {
                if(c.cml_id == allid && c.year == allyear) 
                return c.last_thickness_reading
                return null;
            })
            .filter(c => c != null)
            avgCML = avgCML.reduce((x,y) => x + y, 0) / avgCML?.length;

            return {
                ...cml.find(c => c.cml_id == allid && c.year == allyear),
                last_thickness_reading : avgCML
            }
        })
    
        return {
          allYear,
          datasets : cmlLabel?.map(c => ({
            label: c,
            yAxisID: 'A',
            data: allYear?.map(y => {
              const thick = allCML.find(item => item.year == y && item.cml_id == c) 
              return thick?.[identifier]
            }),
            backgroundColor: 'transparent',
            borderColor: "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0"),
          }))
        }
    }

    getInspectionInt(asset = null) {
        let tm_inspection_interval;
        let ve_inspection_interval;
        switch(asset.class) {
            case "1":
              tm_inspection_interval = 5
              ve_inspection_interval = 5
            break;
            case "2":
              tm_inspection_interval = 10
              ve_inspection_interval = 5
            break;
            case "3":
              tm_inspection_interval = 10
              ve_inspection_interval = 5
            break;
            case "4":
                const { min_required_thickness } = this.getAssetsFormula(asset);
        
                let allYear = asset.cml.map(c => c.year)
                allYear = allYear.filter((c, i) => allYear.indexOf(c) == i).sort((a,b) => a-b)
                const lastYear = allYear.at(-1);

                const { reading, lt_cr } = this.getAverageCML(asset, lastYear);
                const remaining_life = lt_cr ? (reading - min_required_thickness) / lt_cr : 0;
                const half_life = remaining_life / 2;

                tm_inspection_interval = ve_inspection_interval = half_life
            break;
        }

        return { tm_inspection_interval , ve_inspection_interval }
    }

    getAssetsFormula(asset) {
        const {
            max_design_pressure, outside_diameter, longtd_quality_factor, weld_joint_factor, allowable_unit_stress, 
            coefficient, min_alert_thickness, min_structural_thickness, corrosion_allowance, mechanical_allowance
        } = asset;
      
        const pressure_design_thickness = 
        (max_design_pressure * outside_diameter) / 
        (2 * ((longtd_quality_factor * weld_joint_factor * allowable_unit_stress) 
        + (coefficient * max_design_pressure)
        ))

        const min_required_thickness = 
        Math.max(min_structural_thickness, min_alert_thickness, pressure_design_thickness ) 
        + corrosion_allowance + mechanical_allowance

        return {...asset, pressure_design_thickness, min_required_thickness}
    }

    getCalculatedLTCR(asset) {
        const {last_thickness_reading_date, last_thickness_reading, date_in_service, nominal_thickness } = asset
        const diff = new Date(last_thickness_reading_date).getFullYear() - new Date(date_in_service).getFullYear()
        const cal_cr = diff ==  0 ? '0' : (nominal_thickness - last_thickness_reading) / diff
        return cal_cr
    }

    getCalculatedSTCR(asset) {
        const { last_thickness_reading_date, last_thickness_reading, nominal_thickness, stCrYear } = asset
        const diff = new Date(last_thickness_reading_date).getFullYear() - stCrYear
        return diff ==  0 ? '0' : (nominal_thickness - last_thickness_reading) / diff
    }

    removeChartData(chart) {
        chart.data.labels = [];
        chart.chart.data.datasets = [];
        chart.chart.update();
    }

    getThicknessCalculation(asset) {
        const { allowable_unit_stress, longtd_quality_factor, outside_diameter } = asset;
        const { min_required_thickness } = this.getAssetsFormula(asset);

        let allYear = asset?.cml?.map(c => c.year)
        allYear = allYear?.filter((c, i) => allYear.indexOf(c) == i).sort((a,b) => a-b)
        const lastInsp = allYear?.at(-1);

        const { reading, lt_cr, st_cr, last_cml_reading_date : lcrd } = this.getAverageCML(asset, lastInsp);
        const remaining_life = lt_cr ? (reading - min_required_thickness) / lt_cr : 0;
        const half_life = remaining_life / 2;
        const { tm_inspection_interval, ve_inspection_interval } = this.getInspectionInt(asset)
 
        let retirement_date = lcrd 
        ? this.addMonths(lcrd, remaining_life * 12)
        : 'Undefined';

        let next_tm_insp_date = tm_inspection_interval <= half_life 
        ? this.addMonths(lcrd, tm_inspection_interval * 12) 
        : this.addMonths(lcrd, half_life * 12) 

        let next_ve_insp_date = ve_inspection_interval <= half_life
        ? this.addMonths(lcrd, ve_inspection_interval * 12) 
        : this.addMonths(lcrd, half_life * 12) 

        if(!lcrd) retirement_date = next_tm_insp_date = next_ve_insp_date = 'Undefined'

        const tmawp = reading - ( tm_inspection_interval * lt_cr);
        const mawp = (2 * allowable_unit_stress * longtd_quality_factor * tmawp) / outside_diameter
        return {
          ...asset,
          min_required_thickness,
          reading,
          lt_cr,
          st_cr,
          remaining_life,
          half_life,
          retirement_date,
          next_tm_insp_date,
          next_ve_insp_date,
          mawp
        }
    }

    sortByMawp(tableData, sort) {
        tableData = tableData.map(i => {
            const {mawp, max_design_pressure} = this.getThicknessCalculation(i)
            return {
              ...i,
              sortByMawp : max_design_pressure - mawp
            }
        })
    
        if(sort == "Normal")
        tableData = tableData
        .sort((a, b) => b.sortByMawp - a.sortByMawp)

        if(sort == "Abnormal")
        tableData = tableData
        .sort((a, b) => a.sortByMawp - b.sortByMawp)

        return tableData
    }

    transformExcelDate = (date) => date == undefined ? '' :new Date(Math.round((date - 25569) * 86400 * 1000))

}