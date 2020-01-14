import React from 'react';
import logo from './lib/img/petronas.png';
import {
  Box, Row, Col, Section, Textfield, Dropdown, Multiselect,
  Datepicker, Tabulator, Radiobutton, Label, Tooltip, Fileupload
} from './components/Component';
import Header from './components/Header';
import { Button } from 'office-ui-fabric-react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      varName: null,
      canSubmit: false,
      unit: null,
      // Areas : null,
      projectMode: null,
      projectAreas : null,
      activities : null,
      engineeringprocurement : null,
      equipmentandbulksupply : null,
      cnc : null,
      installationtransportandlogistic : null,
      _cumITD1 : 0,
      _2020_1 : 0,
      _2021_1 : 0,
      _2022_1 : 0,
      _2023_1 : 0,
      _2024_1 : 0,
      _cumITD2 : 0,
      _2020_2 : 0,
      _2021_2 : 0,
      _2022_2 : 0,
      _2023_2 : 0,
      _2024_2 : 0,
      _cumITD3 : 0,
      _2020_3 : 0,
      _2021_3 : 0,
      _2022_3 : 0,
      _2023_3 : 0,
      _2024_3 : 0,
      _cumITD4 : 0,
      _2020_4 : 0,
      _2021_4 : 0,
      _2022_4 : 0,
      _2023_4 : 0,
      _2024_4 : 0,
      _cumITD5 : 0,
      _2020_5 : 0,
      _2021_5 : 0,
      _2022_5 : 0,
      _2023_5 : 0,
      _2024_5 : 0,
      _cumITD6 : 0,
      _2020_6 : 0,
      _2021_6 : 0,
      _2022_6 : 0,
      _2023_6 : 0,
      _2024_6 : 0
    
    };

    this.setUnit = newUnit => this.setState({unit: newUnit.replace(/[^a-zA-Z0-9]/g, "")});
    this.setcompanyCode = newCompanyCode => this.setState({companyCode: newCompanyCode.replace(/[^a-zA-Z]/g, "")});
    this.setProjectMode = newProjectMode => this.setState({projectMode: newProjectMode.replace(/[^a-zA-Z0-9]/g, "")});
    this.setProjectAreas = newProjectAreas => this.setState({projectAreas: newProjectAreas.replace(/[^a-zA-Z0-9]/g, "")});
    this.setActivities = newActivities => this.setState({activities: newActivities.replace(/[^a-zA-Z]/g, "")});
    this.setEngineeringProcurement = newEngineeringProcurement => this.setState({engineeringprocurement: newEngineeringProcurement.replace(/[^a-zA-Z]/g, "")});
    this.setEquipmentandBulkSupply = newEquipmentandBulkSupply => this.setState({equipmentandbulksupply: newEquipmentandBulkSupply.replace(/[^a-zA-Z]/g, "")});
    this.setCnC = newCnC => this.setState({cnc: newCnC.replace(/[^a-zA-Z]/g, "")});
    this.setInstallationTransportandLogistic = newInstallationTransportandLogistic => this.setState({installationtransportandlogistic: newInstallationTransportandLogistic.replace(/[^a-zA-Z]/g, "")});
    this.setCumITD1 = value => { this.setState({_cumITD1 : Number(value)}) };
    this.set_2020_1 = value => { this.setState({_2020_1 : Number(value)}) };
    this.set_2021_1 = value => { this.setState({_2021_1 : Number(value)}) };
    this.set_2022_1 = value => { this.setState({_2022_1 : Number(value)}) };
    this.set_2023_1 = value => { this.setState({_2023_1 : Number(value)}) };
    this.set_2024_1 = value => { this.setState({_2024_1 : Number(value)}) };
    this.setCumITD2 = value => { this.setState({_cumITD2 : Number(value)}) };
    this.set_2020_2 = value => { this.setState({_2020_2 : Number(value)}) };
    this.set_2021_2 = value => { this.setState({_2021_2 : Number(value)}) };
    this.set_2022_2 = value => { this.setState({_2022_2 : Number(value)}) };
    this.set_2023_2 = value => { this.setState({_2023_2 : Number(value)}) };
    this.set_2024_2 = value => { this.setState({_2024_2 : Number(value)}) };
    this.setCumITD3 = value => { this.setState({_cumITD3 : Number(value)}) };
    this.set_2020_3 = value => { this.setState({_2020_3 : Number(value)}) };
    this.set_2021_3 = value => { this.setState({_2021_3 : Number(value)}) };
    this.set_2022_3 = value => { this.setState({_2022_3 : Number(value)}) };
    this.set_2023_3 = value => { this.setState({_2023_3 : Number(value)}) };
    this.set_2024_3 = value => { this.setState({_2024_3 : Number(value)}) };
    this.setCumITD4 = value => { this.setState({_cumITD4 : Number(value)}) };
    this.set_2020_4 = value => { this.setState({_2020_4 : Number(value)}) };
    this.set_2021_4 = value => { this.setState({_2021_4 : Number(value)}) };
    this.set_2022_4 = value => { this.setState({_2022_4 : Number(value)}) };
    this.set_2023_4 = value => { this.setState({_2023_4 : Number(value)}) };
    this.set_2024_4 = value => { this.setState({_2024_4 : Number(value)}) };
    this.setCumITD5 = value => { this.setState({_cumITD5 : Number(value)}) };
    this.set_2020_5 = value => { this.setState({_2020_5 : Number(value)}) };
    this.set_2021_5 = value => { this.setState({_2021_5 : Number(value)}) };
    this.set_2022_5 = value => { this.setState({_2022_5 : Number(value)}) };
    this.set_2023_5 = value => { this.setState({_2023_5 : Number(value)}) };
    this.set_2024_5 = value => { this.setState({_2024_5 : Number(value)}) };
    this.setCumITD6 = value => { this.setState({_cumITD6 : Number(value)}) };
    this.set_2020_6 = value => { this.setState({_2020_6 : Number(value)}) };
    this.set_2021_6 = value => { this.setState({_2021_6 : Number(value)}) };
    this.set_2022_6 = value => { this.setState({_2022_6 : Number(value)}) };
    this.set_2023_6 = value => { this.setState({_2023_6 : Number(value)}) };
    this.set_2024_6 = value => { this.setState({_2024_6 : Number(value)}) };
    // this.setAreas = newAreas => this.setState({Areas: newAreas.replace(/[^a-zA-Z0-9]/g, "")});
    

    this.BusinessUnit = ['PETRONAS Dagangan Berhad', 'PETRONAS Gas Berhad', 'PETRONAS Chemical Group', 'PETRONAS Refineries and Trading', 'PETRONAS LNG Asset'];
    //this.division = ['Retail Business', 'Supply & Distribution','New Station', 'QSR', 'Asset Refresh', 'Aviation', 'Fuel', 'LPG', 'Utilities Kerteh', 'Utilities Gebeng', 'Gas Processing Kertih', 'Gas Processing Santong', 'Gas Transmission', 'Gas Pipeline', 'LNG Regassification', 'Export Terminal', 'PETRONAS Chemicals Gorup Bhd', 'PETRONAS Chemicals Ammonia Sdn Bhd', 'PETRONAS Chemicals Aromatics Sdn Bhd', 'PETRONAS Chemicals Derivatives Sdn Bhd', 'PETRONAS Chemicals Ethylene Sdn Bhd', 'PETRONAS Fertiliser Kedah Sdn Bhd', 'PETRONAS Chemicals Glycols Sdn Bhd', 'PETRONAS Chemicals LDPE Sdn Bhd', 'PETRONAS Chemicals Marketing Sdn Bhd', 'PETRONAS Chemicals Marketing (Labuan) Ltd', 'PETRONAS Chemicals Methanol Sdn Bhd', 'PETRONAS Chemicals MTBE Sdn Bhd', 'PETRONAS Chemicals Olefins Sdn Bhd', 'PETRONAS Chemicals Polyehylene Sdn Bhd', 'Kertih Port Sdn Bhd', 'Polypropylene Malaysia Sdn Bhd', 'Vinyl Chloride (Malaysia) Sdn Bhd', 'MITCO Labuan Co. Ltd.', 'PETRONAS Penapisan (T) Sdn Bhd', 'PETRONAS Penapisan (M) Sdn Bhd', 'Malaysia Refining Company Sdn Bhd', 'Malaysia LNG Sdn Bhd (MLNG)', 'Malaysia LNG Dua Sdn Bhd', 'Malaysia LNG Tiga Sdn Bhd', 'Petronas LNG9 Sdn Bhd', 'Petronas Floating LNG 1 (L) Ltd', 'Petronas Floating lNG 2 (L) Ltd', 'Petronas LNG Sdn Bhd (PLSB)', 'Petronas LNG Ltd'];
    this.division = {
      PETRONASDaganganBerhad : ['Retail Business', 'Supply & Distribution', 'New Station', 'QSR', 'Asset Fresh', 'Aviation', 'Fuel', 'LPG'],
      PETRONASGasBerhad: ["Utilities Kerteh", "Utilities Gebeng", "Gas Processing Kertih", "Gas Processing Santong", "Gas Transmission", "Gas Pipeline", "LNG Regassification", "Export Terminal"],
      PETRONASChemicalGroup : ["PETRONAS Chemicals Group Sdn Bhd", "ASEAN Bintulu Fertiliser Sdn Bhd", "PETRONAS Chemicals Ammonia Sdn Bhd", "PETRONAS Chemicals Aromatics Sdn Bhd", "PETRONAS Chemicals Derivatives Sdn Bhd", "PETRONAS Chemicals Ethylene Sdn Bhd", "PETRONAS Chemicals Fertiliser Kedah Sdn Bhd", "PETRONAS Chemicals Glycols Sdn Bhd", "PETRONAS Chemicals LDPE Sdn Bhd", "PETRONAS Chemicals Marketing Sdn Bhd", "PETRONAS Chemicals Marketing (Labuan) Ltd", "PETRONAS Chemicals Methanol Sdn Bhd", "PETRONAS Chemicals MTBE Sdn Bhd", "PETRONAS Chemicals Olefins Sdn Bhd", "PETRONAS Chemicals Polyethylene Sdn Bhd", "Kertih Port Sdn Bhd", "Polypropylene Malaysia Sdn Bhd", "Vinyl Chloride (Malaysia) Sdn Bhd", "MITCO Labuan Co. Ltd."],
      PETRONASRefineriesandTrading : ["PETRONAS Penapisan (T) Sdn Bhd", "PETRONAS Penapisan (M) Sdn Bhd", "Malaysian Refining Company Sdn Bhd"],
      PETRONASLNGAsset : ["Malaysia LNG Sdn Bhd (MLNG)", "Malaysia LNG Dua Sdn Bhd", "Malaysia LNG Tiga Sdn Bhd", "PETRONAS LNG9 Sdn Bhd", "PETRONAS Floating LNG 1 (L) Ltd", "PETRONAS Floating LNG 2 (L) Ltd", "PETRONAS LNG Sdn Bhd (PLSB)", "PETRONAS LNG Ltd"]
    };
    this.discipline=['Electrical', 'Instrument/DCS', 'Civil/Structural', 'Process', 'Mechanical/Piping', 'Mechanical Static & Rotating', 'Pipeline', 'Others(PSM/RAM Study, Special Discipline etc)'];
    this.scope=['FEL Study', 'Engineering', 'Procurement', 'Construction', 'Installation & Tie-in', 'Commission'];
    this.note=['Project Will Ride on TA/SD Window', 'Project Will Drive TA/SD Window'];
    this.location=['Process', 'Non Process'];
    this.phase=['FEL 1 (Initiation)', 'FEL 2 (DFS)', 'FEL 3 (BED)', 'FEL 3 (Tendering)', 'Execution - Engineering', 'Execution - Procurement', 'Execution - Construction', 'Execution Commission', 'Execution -  RTO', 'Execution - MC', 'Close Out', 'ESS FEL 1', 'ESS FEL 2', 'ESS FEL 3', 'ESS General'];
    this.projectCategory=['Reliability', 'HSE', 'Growth', 'Technology', 'Statutory/Regulatory', 'Admin/Others'];
    this.projectType=['Turn Around', 'Shutdown', 'Non Turn Around'];
    this.ContractStrategies=['EPCC', 'E+PCC', 'EP+CC'];
    this.siteFactor=['Green Field', 'Brown Field + Non TA', 'GreenField + Brown Field + Non TA', 'Brown Field + TA', 'Green Field + Brown Field + TA'];
    this.contractPackages=['Single - Single Package', 'Medium -< 5 Packages', 'Complex -> 5 Packages'];
    this.RiskScore=['1', '2', '3', '4'];
    this.states=['Johor','Kedah', 'Kelantan', 'Kuala Lumpur', 'Labuan', 'Melaka', 'Negeri Sembilan', 'Pahang', 'Perak', 'Perlis', 'Pulau Pinang', 'Putra Jaya', 'Sabah', 'Sarawak', 'Selangor', 'Terengganu'];
    this.turnaroundmode=['Project Ride on TA', 'Project Drive TA'];
    this.typeCompletion = ['RFSU', 'MCD', 'IA', 'CCC']; 
    this.contractMode = ['Engineering Consultancy', 'In-House Engineering', 'EPCC', 'PCC', 'PC', 'Procurement', 'EP', 'GMP', 'CTMS'];
    this.acivitySchedule = ['FEL 1', 'FEL 2', 'FEL 3', 'Tendering', 'Detailed Engineering', 'Procurement', 'Pre-Fabrication', 'Construction', 'Commissioning', 'Close-Out', 'MCD', 'RFSU', 'IA', 'CCC'];
    this.awardMode = ['Proprietary', 'Open-Bid', 'Single Source', 'Umbrella'];
    //this.companycode = ['PETRONAS Chemical Group - 501', 'Asean Bintulu Fertiliser Sdn Bhd - 005', 'PETRONAS Chemicals Fertilizer Kedah Sdn Bhd - 008', 'PETRONAS Chemicals Marketing Sdn Bhd - 013', 'PETRONAS Chemicals Methanol Sdn Bhd - 016', 'PETRONAS Chemicals MTBE Sdn Bhd - 019', 'PETRONAS Chemicals Ethylene Sdn Bhd - 021', 'Polypropylene (M) Sdn Bhd - 028', 'PETRONAS Chemical Polyethylene Sdn Bhd - 029', 'Kertih Port Sdn Bhd - 045', 'Vinyle Chloride (Malaysia) Sdn Bhd - 077', 'Aromatics Malaysia Sdn Bhd - 081', 'PETRONAS Chemical Ammonia Sdn Bhd - 090', 'PETRONAS Chemicals Olefins Sdn Bhd - 126', 'PCM Chemicals India Private Limited - 306', 'PETRONAS Chemicals Marketing (LABUAN) Ltd - 375', 'PCM (China) Company Limited - 449', 'PCM (Thailand) Company Limited - 474', 'PETRONAS Chemicals Fertiliser Sabah Sdn Bhd - 491', 'PETRONAS Chemicals Derivatives Sdn Bhd - 502', 'PETRONAS Chemicals Glycols Sdn Bhd - 503', 'PETRONAS Chemicals  LDPE Sdn Bhd - 505', 'PETRONAS Dagangan Berhad - 002', 'PETRONAS Carigali Sdn Bhd - 003', 'Malaysia LNG Sdn Bhd (MLNG) - 004', 'PETRONAS Gas Berhad - 009', 'PETRONAS Penapisan Terengganu Sdn Bhd - 010', 'PETRONAS Penapisan (Melaka) Sdn Bhd (PP(M)SB) - 011', 'Malaysia Refining Company Sdn Bhd (MRCSB) - 020', 'PETRONAS Technical Services Sdn Bhd - 087', 'BASF - 111', 'PFLNG2 (L) LTD - 408', 'PRPC Elastomer Sdn Bhd - 460', 'PRPC Glycols Sdn Bhd - 461', 'PRPC Polymers Sdn Bhd - 463', 'PFLNG1 (L) LTD - 467', 'PETRONAS ICT Sdn Bhd - 704' ];
    this.projectphase = ['1-Feasibility Study (FEL)', '2-Engineering & Services (BED, DED, etc)', '3-Execution (EPCC, EPCM, BEPCC, etc)', '4-Procurement (LLI, Owner Purchased/Supplied, etc)', '5-Project Management & Supervision (iPMT, MSC, Specialist, etc)', '6-Oweners Cost (Pre-Operation etc)', '7-Others' ];
    this.projectarea = ['General', 'Process or Liquefaction', 'Utilities', 'Process Building', 'Non Process Building', 'Offsites Facilities', 'Infrastructure', 'Distribution', 'Vacant', 'Others'];
      this.areacode001 = ['00-General', '01-Inlet Facilities', '02-Liquefaction', '03-Pre Treatment', '04-Flare System', '05-Ammonia Plant', '06-Urea Plant', '07-Granulation Plant'];
      this.areacode002 = ['00-General', '01-Raw & service Water System', '02-Demeneralized Water System', '03-Boiler Feed Water System', '04-Auxilary Steam Generation Unit', '05-Instrument Air/Plant Air', '06-Nitrogen Generation', '07-Waste Water Treatment', '08-CO-Generation Unit', '09-NH3, MEOH Storage & Handling', '10-Diessel Oil Storage', '11-Laboratory'];
      this.areacode003 = ['00-General', '01-Support Building', '02-Administration'];
      this.areacode004 = ['00-General', '01-Administration', '02-Workshop', '03-Warehouse', '04-Training Centre', '05-Clinic', '06-Fire Station', '07-Maintanance', '08-Chemical Storage Building', '09-Surau', '10-Canteen', '11-Guard House', '12-Multipurpose Hall'];
      this.areacode005 = ['00-General', '01-Chemical & Caustic', '02-Fire Water', '03-Effluent Treatement Plant', '04-Storm Water Effluent', '05-MCB & FAR', '06-Substation'];
    this.activity = ['Management', 'Engineering and Procurement', 'Equipment and Bulk Supply', 'Construction and Commissioning', 'Installation, Transport and Logistics', 'Other Activities', 'General Activities'];
      this.management = ['Project Management - 110', 'Construction Management - 120', 'Management Services - 130'];
      this.engineeringprocurement = ['Engineering', 'Procurement'];
        this.engineering = ['1. Pre-Execution Engineering', '2. Detail Design Engineering', '3. Construction/Fabrication/Installation engineering', '4. Follow in Engineering'];
      this.equipmentbulksupply = ['Equipment', 'Bulk', 'Spare Parts'];
        this.equipment = ['1. Company Provided Equipment', '2. Contractor Provided Equipment', '3. Surplus Equipment'];
        this.bulk = ['1. Company Provided Bulk', '2. Contractor Provided Bulk', '3. Surplus Bulk'];
      this.constructionandcommissioning = ['Onshore Construction', 'At Shore Construction', 'Inshore Construction', 'Offshore Construction'];
        this.onshoreconstruction  = ['1. Mobilisation', '2. Civil Work', '3. Fabrication of Major Assemblies and Modules', '4. Other Fabrication', '5. Modification', '6. Vendor Assistance', '7. Commissioning', '8. Weighting, seafastening and load-Out', '9. Non-Working Hours'];
        this.atshoreconstruction  = ['1. Mobilisation', '2. Civil Work', '3. Fabrication of Major Assemblies and Modules', '4. Other Fabrication', '5. Modification', '6. Vendor Assistance', '7. Commissioning', '8. Weighting, seafastening and load-Out', '9. Non-Working Hours'];
        this.inshoreconstruction  = ['1. Mobilisation', '2. Civil Work', '3. Fabrication of Major Assemblies and Modules', '4. Other Fabrication', '5. Modification', '6. Vendor Assistance', '7. Commissioning', '8. Weighting, seafastening and load-Out', '9. Non-Working Hours'];
        this.offshoreconstruction = ['1. Mobilisation', '2. Civil Work', '3. Fabrication of Major Assemblies and Modules', '4. Other Fabrication', '5. Modification', '6. Vendor Assistance', '7. Commissioning', '8. Weighting, seafastening and load-Out', '9. Non-Working Hours'];
      this.installationtransportandlogistics = ['Land Based Installation', 'Marine Operations', 'Logistics']; 
        this.landbasedinstallation = ['1. Lifting', '2. Transport', '3. Pipeline Installation (Operations)', '4. Electrical Cable & Lines Inst. (Operations)', '5. Other Land Based Inst. (Operations)'];
        this.marineoperations = ['1. Survey', '2. Seabed Preparation', '3. Installation', '4. Pipeline Operations', '5. Umbilical and Cable Operations', '6. Transport', '7. Subsea Structure Operations', '8. Particular Abandonment Operations'];
        this.logistics = ['1. Supply Base/Terminal', '2. Supply and Distribution', '3. Personnel Transport', '4. Flotel/LQ/Camps'];
        this.CompanyCode = {
          PETRONASDaganganBerhad : ['PETRONAS Dagangan Berhad - 0002', 'Kuala Lumpur Aviation Fueling System Sdn Bhd - 0031', 'PETRONAS Aviation Sdn Bhd - 0206', 'PETRONAS NGV Sdn Bhd - 0056'],
          PETRONASGasBerhad: ['PETRONAS Gas Berhad (PGB) - 0009', 'Regas Terminal (Sg. Udang) Sdn Bhd - 0391', 'Pengerang LNG (TWO) Sdn Bhd - 0456', 'Regas Terminal (Pengerang) Sdn Bhd - 0392', 'Regas Terminal (Lahad Datu) Sdn Bhd - 0393', 'Voltage Renewable Sdn Bhd - 0407'],
          PETRONASChemicalGroup : ['PETRONAS Chemicals Group Bhd - 0501', 'ASEAN Bintulu Fertiliser Sdn Bhd - 0005', 'PETRONAS Chemicals Ammonia Sdn Bhd - 0090', 'PETRONAS Chemical Aromatics Sdn Bhd - 0081', 'PETRONAS Chemicals Derivatives Sdn Bhd - 0502', 'PETRONAS Chemicals Ethylene Sdn Bhd - 0021', 'PETRONAS Chemicals Fertiliser Kedah Sdn Bhd - 0008', 'PETRONAS Chemicals Glycols Sdn Bhd - 0503', 'PETRONAS Chemicals LDPE Sdn Bhd - 0505', 'PETRONAS Chemicals Marketing Sdn Bhd - 0013', 'PETRONAS Chemicals Marketing (Labuan) Ltd - 0375', 'PETRONAS Chemicals Methanol Sdn Bhd - 0016', 'PETRONAS Chemicals MTBE Sdn Bhd - 0019', 'PETRONAS Chemicals Olefins Sdn Bhd - 0126', 'PETRONAS Chemicals Polyehylne Sdn Bhd - 0029', 'Kertih Port Sdn Bhd - 0045', 'Polyprophylene Malaysia Sdn Bhd - 0028', 'Vinyl Chloride (Malaysia) Sdn Bhd - 0077', 'MITCO Labuan Co. Ltd. - 0250'],
          PETRONASRefineriesandTrading : ['PETRONAS Trading Corporation Sdn Bhd - 0012', 'PETCO Trading Labuan Company Ltd - 0337', 'PETRONAS Penapisal (T) Sdn Bhd - 0010', 'PETRONAS Penapisan (M) Sdn Bhd - 0011', 'Malaysia Refining Company Sdn Bhd - 0020'],
          PETRONASLNGAsset : ['Malaysia LNG Sdn Bhd (MLNG) - 0004', 'Malaysia LNG Dua Sdn Bhd - 0027', 'Malaysia LNG Tiga Sdn Bhd - 0073', 'PETRONAS LNG9 Sdn Bhd - 0409', 'PETRONAS Floating LNG 1 (L) Ltd - 0405', 'PETRONAS Floating LNG 2 (L) Ltd - 0408', 'PETRONAS LNG Sdn Bhd (PLSB) - 0378', 'PETRONAS LNG Ltd - 0218']
        };
  }


  render(){
    const {
      Title,
      Business_x0020_Unit,
      OPU_x002f_Divison_x002f_Plant,
      Project_x0020_Name,
      Project_x0020_Objectives,
      Area,
      Unit,
      Location,
      States,
      Discipline,
      Project_x0020_Scope,
      Detailed_x0020_Scope_x0020_of_x0,
      Project_x0020_Current_x0020_Phas,
      Project_x0020_Category,
      Project_x0020_Mode,
      Turn_x002d_Around_x0020_Mode,
    } = window.projectBackground;
    const {
      FID_x0020_Date,
      Type_x0020_of_x0020_Completion,
      Project_x0020_Completion_x0020_D,
      Project_x0020_Schedule_x0020_Inf,
    } = window.projectSchedule;
    const {
      Window_x0020_Start,
      Window_x0020_Finish,
    } = window.windowTA;
    const {
      Activity,
      Milestone_x0020_Date,
    } = window.majorMilestone;
    const {
      Start_x0020_Date,
      FInish_x0020_Date,
    } = window.highLevelSchedule;
    const {
      Contract_x0020_Mode,
      Award_x0020_Mode,
      Vendor_x002f_Contractor,
    } = window.projectOCS;
    const {
      Company_x0020_Code,
      Budget_x0020_Year,
      Budget_x002f_Project_x0020_Phase,
      Project_x0020_Area,
      Process_x002f_Liquefaction,
      Utilities,
      Process_x0020_Building,
      Non_x0020_Process_x0020_Building,
      Offsites_x0020_Facilities,
      Activities,
      Management,
      Engineering_x0020_and_x0020_Proc,
      Engineering,
      Equipment_x0020_and_x0020_Bulk_x,
      Equipment,
      Bulk,
      Construction_x0020_and_x0020_Com,
      Onshore_x0020_Construction,
      Atshore_x0020_Construction,
      Inshore_x0020_Construction,
      Offshore_x0020_Construction,
      Installation_x002c__x0020_Transp,
      Land_x0020_Based_x0020_Installat,
      Marine_x0020_Operations,
      Logistics,
    } = window.costCode;
    

    const { unit, companyCode, projectMode, projectAreas, activities, engineeringprocurement, cnc, equipmentandbulksupply, installationtransportandlogistic, _cumITD1, _2020_1, _2021_1, _2022_1, _2023_1, _2024_1, _cumITD2, _2020_2, _2021_2, _2022_2, _2023_2, _2024_2,  _cumITD3, _2020_3, _2021_3, _2022_3, _2023_3, _2024_3, _cumITD4, _2020_4, _2021_4, _2022_4, _2023_4, _2024_4, _cumITD5, _2020_5, _2021_5, _2022_5, _2023_5, _2024_5, _cumITD6, _2020_6, _2021_6, _2022_6, _2023_6, _2024_6 } = this.state;

    // const setFileName = (fileName) => {
    //   let file_url = `${window.location.origin}/PDT/PPCHOPC/advancedplanning/MPP/${fileName}`;
    //   window.projectBackground.MPP.setValue(file_url);
    //   console.log(file_url);
    // };

    return (
      <Box id="petronas">
        <Header title="PLANT CHANGE ADVANCED PLANNING" subtitle="PROJECT PLANNING AND CONTROL" logo={logo} logoWidth="100" />
        {/* <br /> */}
        <Section label="1. PROJECT BACKGROUND">
          <Row>
            <Col>
              <Tooltip content="Input the Project ID"><Textfield label={Title.dispName} bindTo={Title} getter={e=>{window.projectSchedule.Title.value = e; window.costCode.Title.value = e;}}/></Tooltip>
              <Tooltip content="Choose the project business unit"><Dropdown label={Business_x0020_Unit.dispName} bindTo={Business_x0020_Unit} getter={value=>{this.setUnit(value);this.setcompanyCode(value);}}  options={Business_x0020_Unit.choiceValues} /></Tooltip>
              {
                unit && <Multiselect label={OPU_x002f_Divison_x002f_Plant.dispName} bindTo={OPU_x002f_Divison_x002f_Plant} options={this.division[unit]} /> 
              }
              <Tooltip content="Input Project Name"><Textfield label={Project_x0020_Name.dispName} getter={e=>{window.costCode.Project_x0020_Name.value = e;}} bindTo={Project_x0020_Name} transform="capitalize" /></Tooltip>
              <Tooltip content="Input Project Objective"><Textfield label={Project_x0020_Objectives.dispName} bindTo={Project_x0020_Objectives} multiline /></Tooltip>
              <Tooltip content="Input Project Area"><Textfield label={Area.dispName} bindTo={Area} /></Tooltip>
              <Tooltip content="Input Project Unit"><Textfield label={Unit.dispName} bindTo={Unit} /></Tooltip>
              <Tooltip content="Choose Project Location"><Radiobutton label={Location.dispName} bindTo={Location} options={Location.choiceValues} /></Tooltip>
            </Col>
            <Col>
            <Tooltip content="Choose Project State"><Multiselect label={States.dispName} bindTo={States} options={States.choiceValues} /></Tooltip>
            <Tooltip content="Choose one or more engineering discipline related to project "><Multiselect label={Discipline.dispName} bindTo={Discipline} options={Discipline.choiceValues} /></Tooltip>
            <Tooltip content="Choose one or more project scope to be executed by PD&T"><Multiselect label={Project_x0020_Scope.dispName} bindTo={Project_x0020_Scope} options={Project_x0020_Scope.choiceValues} /></Tooltip>
            <Tooltip content="Recommended to indicate scope of work in bullet points :
                              •	To install a 6” jumper line (approx 100m) from downstream P-7241 (from T-7241) to downstream P-7244 (from T-7251) via unit 18 off-spec feed stream, 
                              •	To install Two 6 “ globe valves, One ¾” drain valve, One isolation valve and blind, 
                              •	To install a 4” jumper line (approx 5m) from HCK UCO rundown @ 70 deg C to unit 18 off-spec feed stream; One 4” globe valve; One ¾” drain valves"><Textfield label={Detailed_x0020_Scope_x0020_of_x0.dispName} bindTo={Detailed_x0020_Scope_x0020_of_x0} multiline/></Tooltip>
            <Tooltip content="Choose current project phase at the time the project details are inputted"><Dropdown label={Project_x0020_Current_x0020_Phas.dispName} bindTo={Project_x0020_Current_x0020_Phas} options={Project_x0020_Current_x0020_Phas.choiceValues} /></Tooltip>
            <Tooltip content="Choose the most relevant project category"><Dropdown label={Project_x0020_Category.dispName} bindTo={Project_x0020_Category} options={Project_x0020_Category.choiceValues} /></Tooltip>
            <Tooltip content="Choose project mode for Turnaround/Shutdown or Non-turnaround"><Dropdown label={Project_x0020_Mode.dispName} bindTo={Project_x0020_Mode} options={Project_x0020_Mode.choiceValues} getter={this.setProjectMode} /></Tooltip>
            {
              (projectMode === "TurnAround") && <Dropdown label={Turn_x002d_Around_x0020_Mode.dispName} bindTo={Turn_x002d_Around_x0020_Mode} options={this.turnaroundmode} />
            }
            </Col>
          </Row>
        </Section>
        <Section label="2. PROJECT SCHEDULE">

          <Datepicker label={FID_x0020_Date.dispName} bindTo={FID_x0020_Date} formatted/>
          {(projectMode !== "NonTurnAround") && 
          <Tabulator bindList={window.windowTA} foreignKey={window.projectBackground.Title} fkColName="Title" label="Window Start (TA/SD)">
          <Datepicker label='Window Start' bindTo="Window_x0020_Start" formatted/>
          <Datepicker label='Window Finish' bindTo="Window_x0020_Finish" formatted/>
          </Tabulator>}
          <Row>
            <Col>
            <Dropdown label={Type_x0020_of_x0020_Completion.dispName} bindTo={Type_x0020_of_x0020_Completion} options={Type_x0020_of_x0020_Completion.choiceValues} />
            <br/>
            <Tabulator bindList={window.highLevelSchedule} foreignKey={window.projectBackground.Title} fkColName="Title" label="High Level Schedule">
              <Dropdown label='Activity' bindTo="Activity" options={this.acivitySchedule} />
              <Datepicker label='Start Date'  bindTo= "Start_x0020_Date" formatted/>
              <Datepicker label='Finish Date'  bindTo="Finish_x0020_Date" formatted/>
            </Tabulator>
            </Col>
            <Col>
            <Datepicker label={Project_x0020_Completion_x0020_D.dispName} bindTo={Project_x0020_Completion_x0020_D} formatted/>
            <br/>
            {/* <Tabulator bindList={vehicle} foreignKey={window.personalInfo.Title} fkColName="Title" label="Vehicle Information">
                <Textfield label="Vehicle Brand/Type" bindTo="Brand_x0020__x0026__x0020_Type"  />
                <Textfield label="Reg. No" bindTo="Registration_x0020_No" />
                <Dropdown label="Type" bindTo="Vehicle_x0020_Type" options={vehicle.Vehicle_x0020_Type.choiceValues} />
              </Tabulator> */}
            
            <Tabulator bindList={window.majorMilestone} foreignKey={window.projectBackground.Title} fkColName="Title" label="Major Milestone">
              <Textfield label='Activity' placeholder="i.e LLI Arrival, Engineering Milestone, etc" bindTo="Activity" />
              <Datepicker label='Milestone Date' bindTo="Milestone_x0020_Date" formatted />
            </Tabulator>
            </Col>
          </Row>

          <Textfield label="Project Schedule Info" bindTo={Project_x0020_Schedule_x0020_Inf} multiline/> 
          <br/>


        </Section>

        <Section label="3. COST CODE">
        <Row>
            <Col>
            {
              companyCode && <Dropdown label="Company Code" bindTo={Company_x0020_Code}  options={this.CompanyCode[companyCode]}/>
            }
              <Dropdown label="Budget/Project Phase" bindTo={Budget_x002f_Project_x0020_Phase} options={this.projectphase} />
              
              

              
              
              
              
            </Col>
            <Col>
            <Textfield label="Budget Year" bindTo={Budget_x0020_Year} type='number' />
            <Dropdown label="Project Area" bindTo={Project_x0020_Area} options={this.projectarea} getter={this.setProjectAreas}/>
            
            </Col>
          </Row>
              {
                (projectAreas === "ProcessorLiquefaction") && <Dropdown label="Process/Liquefaction" bindTo={Process_x002f_Liquefaction} options={this.areacode001} />
              }
              {
                (projectAreas === "Utilities") && <Dropdown label="Utilities" bindTo={Utilities} options={this.areacode002} />
              }
              {
                (projectAreas === "ProcessBuilding") && <Dropdown label="Process Building" bindTo={Process_x0020_Building} options={this.areacode003} />
              }
              {
                (projectAreas === "NonProcessBuilding") && <Dropdown label="Non Process Building" bindTo={Non_x0020_Process_x0020_Building} options={this.areacode004} />
              }
              {
                (projectAreas === "OffsitesFacilities") && <Dropdown label="Offsites Facilities" bindTo={Offsites_x0020_Facilities} options={this.areacode005} />
              }
          <Dropdown label="Activity" options={this.activity} bindTo={Activities} getter={this.setActivities} />
              {
                (activities === "Management") && <Dropdown label="Management" bindTo={Management} options={this.management} />
              }
              {
                (activities === "EngineeringandProcurement") && <Dropdown label="Engineering and Procurement" bindTo={Engineering_x0020_and_x0020_Proc} options={this.engineeringprocurement} getter={this.setEngineeringProcurement} />
              }
                {
                  (engineeringprocurement === "Engineering") && <Dropdown label="Engineering" bindTo={Engineering} options={this.engineering}/>
                }
              {
                (activities === "EquipmentandBulkSupply") && <Dropdown label="Equipment and Bulk Supply" bindTo={Equipment_x0020_and_x0020_Bulk_x} options={this.equipmentbulksupply} getter={this.setEquipmentandBulkSupply} />
              }
                {
                  (equipmentandbulksupply === "Equipment") && <Dropdown label="Equipment" bindTo={Equipment} options={this.equipment}/>
                }
                {
                  (equipmentandbulksupply === "Bulk") && <Dropdown label="Bulk" bindTo={Bulk} options={this.bulk}/>
                }
              {
                (activities === "ConstructionandCommissioning") && <Dropdown label="Construction and Commissioning" bindTo={Construction_x0020_and_x0020_Com} options={this.constructionandcommissioning} getter={this.setCnC}/>
              }
                {
                  (cnc === "OnshoreConstruction") && <Dropdown label="Onshore Construction" bindTo={Onshore_x0020_Construction} options={this.onshoreconstruction} />
                }
                {
                  (cnc === "AtShoreConstruction") && <Dropdown label="At Shore Construction" bindTo={Atshore_x0020_Construction} options={this.atshoreconstruction} />
                }
                {
                  (cnc === "InshoreConstruction") && <Dropdown label="Inshore Construction" bindTo={Inshore_x0020_Construction} options={this.inshoreconstruction} />
                }
                {
                  (cnc === "OffshoreConstruction") && <Dropdown label="Offshore Construction" bindTo={Offshore_x0020_Construction} options={this.offshoreconstruction} />
                }
              {
                (activities === "InstallationTransportandLogistics") && <Dropdown label="Installation, Transport and Logistics" bindTo={Installation_x002c__x0020_Transp} options={this.installationtransportandlogistics} getter={this.setInstallationTransportandLogistic} />
              }
                {
                  (installationtransportandlogistic === "LandBasedInstallation") && <Dropdown label="Land Based Installation" bindTo={Land_x0020_Based_x0020_Installat} options={this.landbasedinstallation} />
                }
                {
                  (installationtransportandlogistic === "MarineOperations") && <Dropdown label="Marine Operations" bindTo={Marine_x0020_Operations} options={this.marineoperations} />
                }
                {
                  (installationtransportandlogistic === "Logistics") && <Dropdown label="Logistics" bindTo={Logistics} options={this.logistics} />
                }
              
        </Section>

        <Section label="4. PROJECT COST">
        <Label align = "center">FEL COST:</Label>
        {}
          <table align = "center">
            <thead>
              <tr>
                <th>
                  Activity
                </th>
                <th>
                  CUM ITD
                </th>
                <th>
                  2020
                </th>
                <th>
                  2021
                </th>
                <th>
                  2022
                </th>
                <th>
                  2023
                </th><th>
                  2024
                </th>
             </tr>
            </thead>
            <tbody>
              <tr>
                {
                  ((title)=>{
                    window.FelCost._cumITD.Title.setValue(title.value);
                    window.FelCost._2020.Title.setValue(title.value);
                    window.FelCost._2021.Title.setValue(title.value);
                    window.FelCost._2022.Title.setValue(title.value);
                    window.FelCost._2023.Title.setValue(title.value);
                    window.FelCost._2024.Title.setValue(title.value);
                    window.FelCost._cumITD.Year.setValue("cumITD");
                    window.FelCost._2020.Year.setValue("2020");
                    window.FelCost._2021.Year.setValue("2021");
                    window.FelCost._2022.Year.setValue("2022");
                    window.FelCost._2023.Year.setValue("2023");
                    window.FelCost._2024.Year.setValue("2024");
                  })(window.projectBackground.Title)
                }
                <td>
                <Textfield placeholder = "FEL" disabled/>
                </td>
                <td>
                <Textfield type='number' getter={this.setCumITD1} bindTo={window.FelCost._cumITD.FEL} />
                </td>
                <td>
                <Textfield type='number' getter={this.set_2020_1} bindTo={window.FelCost._2020.FEL} />
                </td>
                <td>
                <Textfield type='number' getter={this.set_2021_1} bindTo={window.FelCost._2021.FEL} />
                </td>
                <td>
                <Textfield type='number' getter={this.set_2022_1} bindTo={window.FelCost._2022.FEL} />
                </td>
                <td>
                <Textfield type='number' getter={this.set_2023_1} bindTo={window.FelCost._2023.FEL} />
                </td>
                <td>
                <Textfield type='number' getter={this.set_2024_1} bindTo={window.FelCost._2024.FEL} />
                </td>
              </tr>
              <tr>
              <td>
              <Textfield placeholder = "PMC" disabled/>
                </td>
                <td>
                <Textfield type='number' getter={this.setCumITD2} bindTo={window.FelCost._cumITD.PMC} />
                </td>
                <td>
                <Textfield type='number' getter={this.set_2020_2} bindTo={window.FelCost._2020.PMC} />
                </td>
                <td>
                <Textfield type='number' getter={this.set_2021_2} bindTo={window.FelCost._2021.PMC} />
                </td>
                <td>
                <Textfield type='number' getter={this.set_2022_2} bindTo={window.FelCost._2022.PMC} />
                </td>
                <td>
                <Textfield type='number' getter={this.set_2023_2} bindTo={window.FelCost._2023.PMC} />
                </td>
                <td>
                <Textfield type='number' getter={this.set_2024_2} bindTo={window.FelCost._2024.PMC} />
                </td>
              </tr>
              <tr>
                <td>
                <Textfield placeholder = "Contigency" disabled/>
                </td>
                <td>
                <Textfield type='number' getter={this.setCumITD3} bindTo={window.FelCost._cumITD.Contigency} />
                </td>
                <td>
                <Textfield type='number' getter={this.set_2020_3} bindTo={window.FelCost._2020.Contigency} />
                </td>
                <td>
                <Textfield type='number' getter={this.set_2021_3} bindTo={window.FelCost._2021.Contigency} />
                </td>
                <td>
                <Textfield type='number' getter={this.set_2022_3} bindTo={window.FelCost._2022.Contigency} />
                </td>
                <td>
                <Textfield type='number' getter={this.set_2023_3} bindTo={window.FelCost._2023.Contigency} />
                </td>
                <td>
                <Textfield type='number' getter={this.set_2024_3} bindTo={window.FelCost._2024.Contigency} />
                </td>
              </tr>
              <tr>
                <td>
                <Textfield placeholder = "Total" disabled/>
                </td>
                <td>
                <Textfield type='number' value= {_cumITD1 + _cumITD2 + _cumITD3} disabled  />
                </td>
                <td>
                <Textfield type='number' value={_2020_1 + _2020_2 + _2020_3} disabled   />
                </td>
                <td>
                <Textfield type='number' value={_2021_1 + _2021_2 + _2021_3} disabled   />
                </td>
                <td>
                <Textfield type='number' value={_2022_1 + _2022_2 + _2022_3} disabled   />
                </td>
                <td>
                <Textfield type='number' value={_2023_1 + _2023_2 + _2023_3} disabled   />
                </td>
                <td>
                <Textfield type='number' value={_2024_1 + _2024_2 + _2024_3} disabled   />
                </td>
              </tr>
            </tbody>
          </table>

          <Label>EXECUTION COST:</Label>
          <table align = "center">
            <thead>
              <tr>
                <th>
                  Activity
                </th>
                <th>
                  CUM ITD
                </th>
                <th>
                  2020
                </th>
                <th>
                  2021
                </th>
                <th>
                  2022
                </th>
                <th>
                  2023
                </th><th>
                  2024
                </th>
             </tr>
            </thead>
            <tbody>
              <tr>
              {
                  ((title)=>{
                    window.ExecutionCost._cumITD.Title.setValue(title.value);
                    window.ExecutionCost._2020.Title.setValue(title.value);
                    window.ExecutionCost._2021.Title.setValue(title.value);
                    window.ExecutionCost._2022.Title.setValue(title.value);
                    window.ExecutionCost._2023.Title.setValue(title.value);
                    window.ExecutionCost._2024.Title.setValue(title.value);
                    window.ExecutionCost._cumITD.Year.setValue("cumITD");
                    window.ExecutionCost._2020.Year.setValue("2020");
                    window.ExecutionCost._2021.Year.setValue("2021");
                    window.ExecutionCost._2022.Year.setValue("2022");
                    window.ExecutionCost._2023.Year.setValue("2023");
                    window.ExecutionCost._2024.Year.setValue("2024");
                  })(window.projectBackground.Title)
                }
                <td>
                <Textfield placeholder = "Contract Package" disabled/>
                </td>
                <td>
                <Textfield type='number' getter={this.setCumITD4} bindTo={window.ExecutionCost._cumITD.Contract_x0020_Package}/>
                </td>
                <td>
                <Textfield type='number' getter={this.set_2020_4} bindTo={window.ExecutionCost._2020.Contract_x0020_Package}/>
                </td>
                <td>
                <Textfield type='number' getter={this.set_2021_4} bindTo={window.ExecutionCost._2021.Contract_x0020_Package}/>
                </td>
                <td>
                <Textfield type='number' getter={this.set_2022_4} bindTo={window.ExecutionCost._2022.Contract_x0020_Package}/>
                </td>
                <td>
                <Textfield type='number' getter={this.set_2023_4} bindTo={window.ExecutionCost._2023.Contract_x0020_Package}/>
                </td>
                <td>
                <Textfield type='number' getter={this.set_2024_4} bindTo={window.ExecutionCost._2024.Contract_x0020_Package}/>
                </td>
              </tr>
              <tr>
              <td>
              <Textfield placeholder = "PMC" disabled/>
                </td>
                <td>
                <Textfield type='number' getter={this.setCumITD5} bindTo={window.ExecutionCost._cumITD.PMC}/>
                </td>
                <td>
                <Textfield type='number' getter={this.set_2020_5} bindTo={window.ExecutionCost._2020.PMC}/>
                </td>
                <td>
                <Textfield type='number' getter={this.set_2021_5} bindTo={window.ExecutionCost._2021.PMC}/>
                </td>
                <td>
                <Textfield type='number' getter={this.set_2022_5} bindTo={window.ExecutionCost._2022.PMC}/>
                </td>
                <td>
                <Textfield type='number' getter={this.set_2023_5} bindTo={window.ExecutionCost._2023.PMC}/>
                </td>
                <td>
                <Textfield type='number' getter={this.set_2024_5} bindTo={window.ExecutionCost._2024.PMC}/>
                </td>
              </tr>
              <tr>
                <td>
                <Textfield placeholder = "Contigency" disabled/>
                </td>
                <td>
                <Textfield type='number' getter={this.setCumITD6} bindTo={window.ExecutionCost._cumITD.Contigency}/>
                </td>
                <td>
                <Textfield type='number' getter={this.set_2020_6} bindTo={window.ExecutionCost._2020.Contigency}/>
                </td>
                <td>
                <Textfield type='number' getter={this.set_2021_6} bindTo={window.ExecutionCost._2021.Contigency}/>
                </td>
                <td>
                <Textfield type='number' getter={this.set_2022_6} bindTo={window.ExecutionCost._2022.Contigency}/>
                </td>
                <td>
                <Textfield type='number' getter={this.set_2023_6} bindTo={window.ExecutionCost._2023.Contigency}/>
                </td>
                <td>
                <Textfield type='number' getter={this.set_2024_6} bindTo={window.ExecutionCost._2024.Contigency}/>
                </td>
              </tr>
              <tr>
                <td>
                <Textfield placeholder = "Total" disabled/>
                </td>
                <td>
                <Textfield type='number' value= {_cumITD4 + _cumITD5 + _cumITD6} disabled/>
                </td>
                <td>
                <Textfield type='number' value={_2020_4 + _2020_5 + _2020_6} disabled/>
                </td>
                <td>
                <Textfield type='number' value={_2021_4 + _2021_5 + _2021_6} disabled/>
                </td>
                <td>
                <Textfield type='number' value={_2022_4 + _2022_5 + _2022_6} disabled/>
                </td>
                <td>
                <Textfield type='number' value={_2023_4 + _2023_5 + _2023_6} disabled/>
                </td>
                <td>
                <Textfield type='number' value={_2024_4 + _2024_5 + _2024_6} disabled/>
                </td>
              </tr>
            </tbody>
          </table>

          <Textfield label="Project Cost Info" multiline />
          
           
          
          <br/>
        </Section>

        <Section label='5. PROJECT OCS'>
          <Tabulator bindList={window.projectOCS} foreignKey={window.projectBackground.Title} fkColName="Title">
            <Dropdown label='Contract Mode' options={this.contractMode} bindTo="Contract_x0020_Mode"/>
            <Dropdown label='Award Mode' options={this.awardMode} bindTo="Award_x0020_Mode" />
            <Textfield label='Vendor/Contractor' bindTo="Vendor_x002f_Contractor" />
          </Tabulator>  
        </Section>

        <Section label= '6. COMPANY SUPPLIED ITEM(this section is only applicable to item directly supplied by company)'>
            <Tabulator bindList={window.companySuppliedItem} foreignKey={window.projectBackground.Title} fkColName="Title">
              <Textfield label='Item' bindTo="Item"/>
              <Textfield label='Cost Estimate' bindTo="Cost_x0020_Estimate" type='number'/>
              <Textfield label='Duration(Months)' bindTo="Duration_x0020__x0028_Months_x00" type='number'/>
              <Datepicker label='Estimate ROS' bindTo="Estimate_x0020_ROS" formatted />
            </Tabulator>
        </Section>

        <Section label= '7. PROJECT MPP' >
          <Fileupload label="Upload Excel File" bindTo={window.folder} fileName={{value: "test"}}/>
        </Section>

        <iframe width="933" height="700" src="https://app.powerbi.com/view?r=eyJrIjoiYmQ4MTg2MGUtMTZjZi00ZmUzLThhNzktMmQwNTQ1MGY5NGM4IiwidCI6IjE4Y2U3NmY2LTk5ZjQtNDU3Zi05ZjYyLWFjZDY1ZDliOTc3NyIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
        
        <br />      
        <Button type="button" 
          onClick={
            ()=>{
                window.projectBackground.submitAction()
                // .then( ()=>window.folder.submitAction())
                .then( ()=>window.projectSchedule.submitAction() )
                .then( ()=>window.windowTA.submitAction() )
                .then( ()=>window.majorMilestone.submitAction() )
                .then( ()=>window.highLevelSchedule.submitAction() )
                .then( ()=> window.projectOCS.submitAction() )
                .then( ()=> window.costCode.submitAction() )
                .then( ()=>{
                    for (const sublist in window.FelCost) {
                        window.FelCost[sublist].submitAction();
                    };
                    for (const sublist in window.ExecutionCost) {
                    window.ExecutionCost[sublist].submitAction();
                    };
                    return window.companySuppliedItem.submitAction();
                } )
                .then( (messages)=>{alert("Success", messages); window.location.reload(false);} );
            }
        }
          styles={{root: {width: "100%"},rootHovered: {backgroundColor: "#2c7873"}}}>SUBMIT!</Button>
        <br />
      </Box>        
    );
  }
}

export default App;
