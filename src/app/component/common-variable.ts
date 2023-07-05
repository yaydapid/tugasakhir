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
        { id : "01", piping_damage_mechanism : "General and localized metal loss" },
        { id : "02", piping_damage_mechanism : "Sulfidation and High Temp. H2S/H2 Corrosion" },
        { id : "03", piping_damage_mechanism : "Oxidation" },
        { id : "04", piping_damage_mechanism : "Microbiologically Induced Corrosion (MIC)" },
        { id : "05", piping_damage_mechanism : "Naphthenic Acid Corrosion" },
        { id : "06", piping_damage_mechanism : "Erosion/Erosison-Corrosion" },
        { id : "07", piping_damage_mechanism : "Galvanic Corrosion" },
        { id : "08", piping_damage_mechanism : "Atmospheric Corrosion" },
        { id : "09", piping_damage_mechanism : "Corrosion Under Insulation (CUI)" },
        { id : "10", piping_damage_mechanism : "Cooling Water Corrosion" },
        { id : "11", piping_damage_mechanism : "Boiler Water Condensate Corrosion" },
        { id : "12", piping_damage_mechanism : "Soil Corrosion" },
        { id : "13", piping_damage_mechanism : "Ammonium Bisulfide and Chloride Corrosion" },
        { id : "14", piping_damage_mechanism : "Carbon Dioxide Corrosion" },
        { id : "15", piping_damage_mechanism : "Surface Connected Cracking" },
        { id : "16", piping_damage_mechanism : "Mechanical Fatigue Cracking" },
        { id : "17", piping_damage_mechanism : "Caustic Stress Corrosion Cracking" },
        { id : "18", piping_damage_mechanism : "Polythionic Stress Corrosion Cracking" },
        { id : "19", piping_damage_mechanism : "Sulfide Stress Cracking" },
        { id : "20", piping_damage_mechanism : "Chloride Stress Corrosion Cracking" },
        { id : "21", piping_damage_mechanism : "Subsurface Cracking" },
        { id : "22", piping_damage_mechanism : "Hydrogen Induced Cracking" },
        { id : "23", piping_damage_mechanism : "Wet Hydrogen Sulfide Cracking" },
        { id : "24", piping_damage_mechanism : "High-Temperature Micro-fissuring/Micro-void Fromation and Eventual Macro Cracking" },
        { id : "25", piping_damage_mechanism : "High-temperature Hydrogen Attack" },
        { id : "26", piping_damage_mechanism : "Creep/Stress Rupture" },
        { id : "27", piping_damage_mechanism : "Metallurgical Changes" },
        { id : "28", piping_damage_mechanism : "Graphitization" },
        { id : "29", piping_damage_mechanism : "Temper Embrittlement" },
        { id : "30", piping_damage_mechanism : "Hydrogen Embrittlement" },
    ]

    getAverageCML(asset) {
        const { cml } = asset;
        let allYear = cml.map(c => c.year)
        allYear = allYear.filter((c, i) => allYear.indexOf(c) == i).sort((a,b) => a-b)
        const maxYear = allYear.at(-1);
        const lastYear = allYear.at(-2);

        const cmls = cml.filter(c => c.year == maxYear)
        .map(c => {
            return {
                ...c,
                calculated_cr : this.getCalculatedCR({...asset, ...c}),
                calculated_st : this.getCalculatedSTCR({...asset, ...c, lastYear})
            }
        })

        const last_cml_reading_date = cmls
        .map(({last_thickness_reading_date}) => new Date(last_thickness_reading_date) )
        .sort((a,b) => a-b)
        // .map(i=>this.datePipe.transform(i, 'yyyy-MM-dd'))

        function getAvg(i) {
            const avg = cmls.map(c => c[i])
            .reduce((x,y) => x + y, 0) / cml.length;
            if(!avg) return 0;
            return avg;
        }

        const reading = getAvg("last_thickness_reading");
        const lt_cr = getAvg("calculated_cr");
        const st_cr = getAvg("calculated_st");

        return { 
            reading, 
            lt_cr, 
            st_cr,
            last_cml_reading_date : last_cml_reading_date.at(-1)
        }
    }

    addMonths(date, month) {
        return this.datePipe.transform(moment(date).add(month, 'M').toDate(), 'yyyy-MM-dd')
    }

    getInspectionInt(c, cml = null) {
        let tm_inspection_interval;
        let ve_inspection_interval;
        switch(c) {
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
            break;
        }

        return { tm_inspection_interval , ve_inspection_interval }
    }

    getAssetsFormula(asset) {
        const {
            min_design_pressure, outside_diameter, longtd_quality_factor, weld_joint_factor, allowable_unit_stress, 
            coefficient, min_alert_thickness, min_structural_thickness, corrosion_allowance, mechanical_allowance
        } = asset;
      
        const pressure_design_thickness = 
        (min_design_pressure * outside_diameter) / 
        (2 * ((longtd_quality_factor * weld_joint_factor * allowable_unit_stress) 
        + (coefficient * min_design_pressure)
        ))

        const min_required_thickness = 
        Math.max(min_structural_thickness, min_alert_thickness, pressure_design_thickness ) 
        + corrosion_allowance + mechanical_allowance

        return {...asset, pressure_design_thickness, min_required_thickness}
    }

    getThicknessFormula(asset) {

    }

    getCalculatedCR(data) {
        const {last_thickness_reading_date, last_thickness_reading, date_in_service, nominal_thickness } = data
        const diff = new Date(last_thickness_reading_date).getFullYear() - new Date(date_in_service).getFullYear()
        const cal_cr = diff ==  0 ? '0' : (nominal_thickness - last_thickness_reading) / diff
        return cal_cr
    }

    getCalculatedSTCR(data) {
        const { last_thickness_reading_date, last_thickness_reading, nominal_thickness, lastYear } = data
        const diff = new Date(last_thickness_reading_date).getFullYear() - lastYear
        return diff ==  0 ? '0' : (nominal_thickness - last_thickness_reading) / diff
    }
}