import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
//import * as serviceWorker from './serviceWorker';
import SpList from './lib/js/SpList';
import SpListSimulator, { DataObj } from './lib/js/SpListSimulator';
import { SpFileWriter } from './lib/js/SpFile';

let simulatedCols = {
    projectBackground: [
        // new DataObj(data name, display name, options array)
        new DataObj("Title", "Project ID"), 
        new DataObj("Business_x0020_Unit", "Business Unit", ['PETRONAS Dagangan Berhad', 'PETRONAS Gas Berhad', 'PETRONAS Chemical Group', 'PETRONAS Refineries and Trading', 'PETRONAS LNG Asset']), //choice
        new DataObj("OPU_x002f_Divison_x002f_Plant", "OPU/Divison/Plant"),
        new DataObj("Project_x0020_Name", "Project Name"), 
        new DataObj("Project_x0020_Objectives", "Project Objectives"), 
        new DataObj("Area", "Area"), 
        new DataObj("Unit", "Unit"), 
        new DataObj("Location", "Location", ['Process', 'Non Process']), //choice
        new DataObj("States", "States", ['Johor','Kedah', 'Kelantan', 'Kuala Lumpur', 'Labuan', 'Melaka', 'Negeri Sembilan', 'Pahang', 'Perak', 'Perlis', 'Pulau Pinang', 'Putra Jaya', 'Sabah', 'Sarawak', 'Selangor', 'Terengganu']), //choice
        new DataObj("Discipline", "Discipline", ['Electrical', 'Instrument/DCS', 'Civil/Structural', 'Process', 'Mechanical/Piping', 'Mechanical Static & Rotating', 'Pipeline', 'Others(PSM/RAM Study, Special Discipline etc)']), //choice
        new DataObj("Project_x0020_Scope", "Project Scope", ['FEL Study', 'Engineering', 'Procurement', 'Construction', 'Installation & Tie-in', 'Commission']), //choice
        new DataObj("Detailed_x0020_Scope_x0020_of_x0", "Detailed Scope of Work"), 
        new DataObj("Project_x0020_Current_x0020_Phas", "Project Current Phase", ['FEL 1 (Initiation)', 'FEL 2 (DFS)', 'FEL 3 (BED)', 'FEL 3 (Tendering)', 'Execution - Engineering', 'Execution - Procurement', 'Execution - Construction', 'Execution Commission', 'Execution -  RTO', 'Execution - MC', 'Close Out', 'ESS FEL 1', 'ESS FEL 2', 'ESS FEL 3', 'ESS General']), //choice
        new DataObj("Project_x0020_Category", "Project Category", ['Reliability', 'HSE', 'Growth', 'Technology', 'Statutory/Regulatory', 'Admin/Others']), //choice
        new DataObj("Project_x0020_Mode", "Project Mode", ['Turn Around', 'Shutdown', 'Non Turn Around']), //choice
        new DataObj("Turn_x002d_Around_x0020_Mode", "Turn-Around Mode", ['Project Ride on TA', 'Project Drive TA']), //choice 
    ],
    projectSchedule: [
        new DataObj("Title", "Project ID"),
        new DataObj("Business_x0020_Unit", "Business Unit", ['PETRONAS Dagangan Berhad', 'PETRONAS Gas Berhad', 'PETRONAS Chemical Group', 'PETRONAS Refineries and Trading', 'PETRONAS LNG Asset']), //choice
        new DataObj("OPU_x002f_Divison_x002f_Plant", "OPU/Divison/Plant"),
        new DataObj("Project_x0020_Name", "Project Name"), 
        new DataObj("FID_x0020_Date", "FID Date"),  
        new DataObj("Type_x0020_of_x0020_Completion", "Type of Completion", ['RFSU', 'MCD', 'IA', 'CCC']), 
        new DataObj("Project_x0020_Completion_x0020_D", "Project Completion Date"), 
    ],
    windowTA: [
        new DataObj("Title", "Project ID"),
        new DataObj("Business_x0020_Unit", "Business Unit", ['PETRONAS Dagangan Berhad', 'PETRONAS Gas Berhad', 'PETRONAS Chemical Group', 'PETRONAS Refineries and Trading', 'PETRONAS LNG Asset']), //choice
        new DataObj("OPU_x002f_Divison_x002f_Plant", "OPU/Divison/Plant"),
        new DataObj("Project_x0020_Name", "Project Name"),
        new DataObj("Window_x0020_Start", "Window Start"),
        new DataObj("Window_x0020_Finish", "Window Finish"),
    ],
    majorMilestone: [
        new DataObj("Title", "Project ID"),
        new DataObj("Business_x0020_Unit", "Business Unit", ['PETRONAS Dagangan Berhad', 'PETRONAS Gas Berhad', 'PETRONAS Chemical Group', 'PETRONAS Refineries and Trading', 'PETRONAS LNG Asset']), //choice
        new DataObj("OPU_x002f_Divison_x002f_Plant", "OPU/Divison/Plant"),
        new DataObj("Project_x0020_Name", "Project Name"),
        new DataObj("Activity", "Activity"),
        new DataObj("Milestone_x0020_Date", "Milestone Date")
    ],
    highLevelSchedule: [
        new DataObj("Title", "Project ID"),
        new DataObj("Business_x0020_Unit", "Business Unit", ['PETRONAS Dagangan Berhad', 'PETRONAS Gas Berhad', 'PETRONAS Chemical Group', 'PETRONAS Refineries and Trading', 'PETRONAS LNG Asset']), //choice
        new DataObj("OPU_x002f_Divison_x002f_Plant", "OPU/Divison/Plant"),
        new DataObj("Project_x0020_Name", "Project Name"),
        new DataObj("Activity", "Activity", ['FEL 1', 'FEL 2', 'FEL 3', 'Land Acquisition/Regulatory Approval', 'Tendering', 'Detailed Engineering', 'Procurement', 'Pre-Fabrication', 'Construction', 'Installation', 'Commissioning', 'Close-Out', 'MCD', 'RFSU', 'IA', 'CCC']),
        new DataObj("Start_x0020_Date", "Start Date"),
        new DataObj("Finish_x0020_Date", "Finish Date"),
        new DataObj("Project_x0020_Schedule_x0020_Inf", "Project Schedule Info"),
    ],
    projectOCS: [
        new DataObj("Title", "Project ID"),
        new DataObj("Business_x0020_Unit", "Business Unit", ['PETRONAS Dagangan Berhad', 'PETRONAS Gas Berhad', 'PETRONAS Chemical Group', 'PETRONAS Refineries and Trading', 'PETRONAS LNG Asset']), //choice
        new DataObj("OPU_x002f_Divison_x002f_Plant", "OPU/Divison/Plant"),
        new DataObj("Project_x0020_Name", "Project Name"),
        new DataObj("Contract_x0020_Mode", "Contract Mode", ['Engineering Consultancy', 'In-House Engineering', 'EPCC', 'PCC', 'PC', 'Procurement', 'EP', 'GMP', 'CTMS']), //add choices
        new DataObj("Award_x0020_Mode", "Award Mode", ['Proprietary', 'Open-Bid', 'Single Source']), //add choices
        new DataObj("Vendor_x002f_Contractor", "Vendor/Contractor")
    ],
    companySuppliedItem: [
        new DataObj("Title", "Project ID"),
        new DataObj("Business_x0020_Unit", "Business Unit", ['PETRONAS Dagangan Berhad', 'PETRONAS Gas Berhad', 'PETRONAS Chemical Group', 'PETRONAS Refineries and Trading', 'PETRONAS LNG Asset']), //choice
        new DataObj("OPU_x002f_Divison_x002f_Plant", "OPU/Divison/Plant"),
        new DataObj("Project_x0020_Name", "Project Name"),
        new DataObj("Item", "Item"), 
        new DataObj("Cost_x0020_Estimate", "Cost Estimate"), 
        new DataObj("Duration_x0020__x0028_Months_x00", "Duration (Months)"), 
        new DataObj("Estimate_x0020_ROS", "Estimate ROS")
    ],
    FelCost: [
        new DataObj("Title", "Project ID"),
        new DataObj("Year", "Year"), 
        new DataObj("FEL", "FEL"), 
        new DataObj("PMC", "PMC"), 
        new DataObj("Contigency", "Contigency"), 
        new DataObj("Total", "Total")
    ],
    ExecutionCost: [
        new DataObj("Title", "Project ID"),
        new DataObj("Year", "Year"), 
        new DataObj("Contract_x0020_Package", "Contract Package"), 
        new DataObj("PMC", "PMC"), 
        new DataObj("Contigency", "Contigency"), 
        new DataObj("Total", "Total")
    ],
    costCode: [
        new DataObj("Title", "Project ID"),
        new DataObj("Business_x0020_Unit", "Business Unit", ['PETRONAS Dagangan Berhad', 'PETRONAS Gas Berhad', 'PETRONAS Chemical Group', 'PETRONAS Refineries and Trading', 'PETRONAS LNG Asset']), //choice
        new DataObj("OPU_x002f_Divison_x002f_Plant", "OPU/Divison/Plant"),
        new DataObj("Project_x0020_Name", "Project Name"), 
        new DataObj("Company_x0020_Code", "Company Code", ['PETRONAS Chemical Group - 501', 'Asean Bintulu Fertiliser Sdn Bhd - 005', 'PETRONAS Chemicals Fertilizer Kedah Sdn Bhd - 008', 'PETRONAS Chemicals Marketing Sdn Bhd - 013', 'PETRONAS Chemicals Methanol Sdn Bhd - 016', 'PETRONAS Chemicals MTBE Sdn Bhd - 019', 'PETRONAS Chemicals Ethylene Sdn Bhd - 021', 'Polypropylene (M) Sdn Bhd - 028', 'PETRONAS Chemical Polyethylene Sdn Bhd - 029', 'Kertih Port Sdn Bhd - 045', 'Vinyle Chloride (Malaysia) Sdn Bhd - 077', 'Aromatics Malaysia Sdn Bhd - 081', 'PETRONAS Chemical Ammonia Sdn Bhd - 090', 'PETRONAS Chemicals Olefins Sdn Bhd - 126', 'PCM Chemicals India Private Limited - 306', 'PETRONAS Chemicals Marketing (LABUAN) Ltd - 375', 'PCM (China) Company Limited - 449', 'PCM (Thailand) Company Limited - 474', 'PETRONAS Chemicals Fertiliser Sabah Sdn Bhd - 491', 'PETRONAS Chemicals Derivatives Sdn Bhd - 502', 'PETRONAS Chemicals Glycols Sdn Bhd - 503', 'PETRONAS Chemicals  LDPE Sdn Bhd - 505', 'PETRONAS Dagangan Berhad - 002', 'PETRONAS Carigali Sdn Bhd - 003', 'Malaysia LNG Sdn Bhd (MLNG) - 004', 'PETRONAS Gas Berhad - 009', 'PETRONAS Penapisan Terengganu Sdn Bhd - 010', 'PETRONAS Penapisan (Melaka) Sdn Bhd (PP(M)SB) - 011', 'Malaysia Refining Company Sdn Bhd (MRCSB) - 020', 'PETRONAS Technical Services Sdn Bhd - 087', 'BASF - 111', 'PFLNG2 (L) LTD - 408', 'PRPC Elastomer Sdn Bhd - 460', 'PRPC Glycols Sdn Bhd - 461', 'PRPC Polymers Sdn Bhd - 463', 'PFLNG1 (L) LTD - 467', 'PETRONAS ICT Sdn Bhd - 704' ]), //choice   
        new DataObj("Budget_x0020_Year", "Budget Year"), 
        new DataObj("Budget_x002f_Project_x0020_Phase", "Budget/Project Phase", ['1-Feasibility Study (FEL)', '2-Engineering & Services (BED, DED, etc)', '3-Execution (EPCC, EPCM, BEPCC, etc)', '4-Procurement (LLI, Owner Purchased/Supplied, etc)', '5-Project Management & Supervision (iPMT, MSC, Specialist, etc)', '6-Oweners Cost (Pre-Operation etc)', '7-Others' ]), //choice   
        new DataObj("Project_x0020_Area", "Project Area", ['General', 'Process or Liquefaction', 'Utilities', 'Process Building', 'Non Process Building', 'Offsites Facilities', 'Infrastructure', 'Distribution', 'Vacant', 'Others']), //choice   
        new DataObj("Process_x002f_Liquefaction", "Process/Liquefaction", ['00-General', '01-Inlet Facilities', '02-Liquefaction', '03-Pre Treatment', '04-Flare System', '05-Ammonia Plant', '06-Urea Plant', '07-Granulation Plant']), //choice   
        new DataObj("Utilities", "Utilities", ['00-General', '01-Raw & service Water System', '02-Demeneralized Water System', '03-Boiler Feed Water System', '04-Auxilary Steam Generation Unit', '05-Instrument Air/Plant Air', '06-Nitrogen Generation', '07-Waste Water Treatment', '08-CO-Generation Unit', '09-NH3, MEOH Storage & Handling', '10-Diessel Oil Storage', '11-Laboratory']), //choice   
        new DataObj("Process_x0020_Building", "Process Building", ['00-General', '01-Support Building', '02-Administration']), //choice   
        new DataObj("Non_x0020_Process_x0020_Building", "Non Process Building", ['00-General', '01-Administration', '02-Workshop', '03-Warehouse', '04-Training Centre', '05-Clinic', '06-Fire Station', '07-Maintanance', '08-Chemical Storage Building', '09-Surau', '10-Canteen', '11-Guard House', '12-Multipurpose Hall']), //choice   
        new DataObj("Offsites_x0020_Facilities", "Offsites Facilities", ['00-General', '01-Chemical & Caustic', '02-Fire Water', '03-Effluent Treatement Plant', '04-Storm Water Effluent', '05-MCB & FAR', '06-Substation']), //choice 
        new DataObj("Activities", "Activities", ['Management', 'Engineering and Procurement', 'Equipment and Bulk Supply', 'Construction and Commissioning', 'Installation, Transport and Logistics', 'Other Activities', 'General Activities']), //choice   
        new DataObj("Management", "Management", ['Project Management - 110', 'Construction Management - 120', 'Management Services - 130']), //choice   
        new DataObj("Engineering_x0020_and_x0020_Proc", "Engineering and Procurement", ['Engineering', 'Procurement']), //choice   
        new DataObj("Engineering", "Engineering", ['1. Pre-Execution Engineering', '2. Detail Design Engineering', '3. Construction/Fabrication/Installation engineering', '4. Follow in Engineering']), //choice   "
        new DataObj("Equipment_x0020_and_x0020_Bulk_x", "Equipment and Bulk Supply",  ['Equipment', 'Bulk', 'Spare Parts']), //choice   
        new DataObj("Equipment", "Equipment", ['1. Company Provided Equipment', '2. Contractor Provided Equipment', '3. Surplus Equipment']), //choice   
        new DataObj("Bulk", "Bulk", ['1. Company Provided Bulk', '2. Contractor Provided Bulk', '3. Surplus Bulk']), //choice   
        new DataObj("Construction_x0020_and_x0020_Com", "Construction and Commissioning", ['Onshore Construction', 'At Shore Construction', 'Inshore Construction', 'Offshore Construction']), //choice   
        new DataObj("Onshore_x0020_Construction", "Onshore Construction", ['1. Mobilisation', '2. Civil Work', '3. Fabrication of Major Assemblies and Modules', '4. Other Fabrication', '5. Modification', '6. Vendor Assistance', '7. Commissioning', '8. Weighting, seafastening and load-Out', '9. Non-Working Hours']), //choice   
        new DataObj("Atshore_x0020_Construction", "Atshore Construction", ['1. Mobilisation', '2. Civil Work', '3. Fabrication of Major Assemblies and Modules', '4. Other Fabrication', '5. Modification', '6. Vendor Assistance', '7. Commissioning', '8. Weighting, seafastening and load-Out', '9. Non-Working Hours']), //choice   
        new DataObj("Inshore_x0020_Construction", "Inshore Construction", ['1. Mobilisation', '2. Civil Work', '3. Fabrication of Major Assemblies and Modules', '4. Other Fabrication', '5. Modification', '6. Vendor Assistance', '7. Commissioning', '8. Weighting, seafastening and load-Out', '9. Non-Working Hours']), //choice   
        new DataObj("Offshore_x0020_Construction", "Offshore Construction", ['1. Mobilisation', '2. Civil Work', '3. Fabrication of Major Assemblies and Modules', '4. Other Fabrication', '5. Modification', '6. Vendor Assistance', '7. Commissioning', '8. Weighting, seafastening and load-Out', '9. Non-Working Hours']), //choice   
        new DataObj("Installation_x002c__x0020_Transp", "Installation, Transportation and Logistics", ['Land Based Installation', 'Marine Operations', 'Logistics']), //choice   
        new DataObj("Land_x0020_Based_x0020_Installat", "Land Based Installation", ['1. Lifting', '2. Transport', '3. Pipeline Installation (Operations)', '4. Electrical Cable & Lines Inst. (Operations)', '5. Other Land Based Inst. (Operations)']), //choice   
        new DataObj("Marine_x0020_Operations", "Marine Operations", ['1. Survey', '2. Seabed Preparation', '3. Installation', '4. Pipeline Operations', '5. Umbilical and Cable Operations', '6. Transport', '7. Subsea Structure Operations', '8. Particular Abandonment Operations']), //choice   
        new DataObj("Logistics", "Logistics", ['1. Supply Base/Terminal', '2. Supply and Distribution', '3. Personnel Transport', '4. Flotel/LQ/Camps']), //choice   

    ]
};

(async () => {
    if(window.SP) {
        window.sprLib.baseUrl("/PDT/PPCHOPC/advancedplanning/");
        window.projectBackground = await SpList("72606c3a-6be6-43c6-86fb-1496859cf16c");
        window.projectSchedule = await SpList("855523b1-3325-4306-aa72-987931705f9e");
        window.windowTA = await SpList("6465ee51-f11c-4ff6-a380-a5a709fd1a84");
        window.majorMilestone = await SpList("50acbce0-4f24-4465-967f-dae1d2c139fd");
        window.highLevelSchedule = await SpList("fbd4a4cb-c5c9-4859-a0fc-b7c5fee10a12");
        window.projectOCS = await SpList("5082684d-632b-42f2-8aae-10a5e435938d");
        window.companySuppliedItem = await SpList("f1f68d4b-af95-413e-82f0-3ec82e5c92f1");
        window.costCode = await SpList("fdb73be8-a9dc-4e37-bebb-ea8a3a308da0");
        window.FelCost = {
            _cumITD: await SpList("03c997a8-1de0-42f7-a677-b66ec9f37fbd"),
            _2020: await SpList("03c997a8-1de0-42f7-a677-b66ec9f37fbd"),
            _2021: await SpList("03c997a8-1de0-42f7-a677-b66ec9f37fbd"),
            _2022: await SpList("03c997a8-1de0-42f7-a677-b66ec9f37fbd"),
            _2023: await SpList("03c997a8-1de0-42f7-a677-b66ec9f37fbd"),
            _2024: await SpList("03c997a8-1de0-42f7-a677-b66ec9f37fbd"),
        };
        window.ExecutionCost = {
            _cumITD: await SpList("ff963d4d-ad75-454f-abd2-8b96fc27690f"),
            _2020: await SpList("ff963d4d-ad75-454f-abd2-8b96fc27690f"),
            _2021: await SpList("ff963d4d-ad75-454f-abd2-8b96fc27690f"),
            _2022: await SpList("ff963d4d-ad75-454f-abd2-8b96fc27690f"),
            _2023: await SpList("ff963d4d-ad75-454f-abd2-8b96fc27690f"),
            _2024: await SpList("ff963d4d-ad75-454f-abd2-8b96fc27690f"),
        };
    }
    else {
        window.projectBackground = await SpListSimulator(simulatedCols.projectBackground);
        window.projectSchedule = await SpListSimulator(simulatedCols.projectSchedule);
        window.windowTA = await SpListSimulator(simulatedCols.windowTA);
        window.majorMilestone = await SpListSimulator(simulatedCols.majorMilestone);
        window.highLevelSchedule = await SpListSimulator(simulatedCols.highLevelSchedule);
        window.projectOCS = await SpListSimulator(simulatedCols.projectOCS);
        window.companySuppliedItem = await SpListSimulator(simulatedCols.companySuppliedItem);
        window.costCode = await SpListSimulator(simulatedCols.costCode);
        window.FelCost = {
            _cumITD: await SpListSimulator(simulatedCols.FelCost),
            _2020: await SpListSimulator(simulatedCols.FelCost),
            _2021: await SpListSimulator(simulatedCols.FelCost),
            _2022: await SpListSimulator(simulatedCols.FelCost),
            _2023: await SpListSimulator(simulatedCols.FelCost),
            _2024: await SpListSimulator(simulatedCols.FelCost),
        };
        window.ExecutionCost = {
            _cumITD: await SpListSimulator(simulatedCols.ExecutionCost),
            _2020: await SpListSimulator(simulatedCols.ExecutionCost),
            _2021: await SpListSimulator(simulatedCols.ExecutionCost),
            _2022: await SpListSimulator(simulatedCols.ExecutionCost),
            _2023: await SpListSimulator(simulatedCols.ExecutionCost),
            _2024: await SpListSimulator(simulatedCols.ExecutionCost),
        };
    }
    // window.folder = await SpFileWriter("MPP/", "advancedplanning");
    (
        window.projectBackground
        && window.projectSchedule
        && window.majorMilestone
        && window.highLevelSchedule
        && window.projectOCS
        && window.companySuppliedItem
        && window.costCode
        && window.FelCost
        && window.ExecutionCost
        && window.windowTA
        // && window.folder
    ) && ReactDOM.render(<App />, document.getElementById('root'));
})();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
