import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})
export class Variables {
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

    getAverageCML() {
        
    }
}