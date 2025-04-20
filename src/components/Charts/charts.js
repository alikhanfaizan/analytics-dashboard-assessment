import AvgRangeByMakeChart from "./AvgRangeByMakeChart"
import CAFVEligibilityChart from "./CAFVEligibilityChart"
import ElectricUtilityShareChart from "./ElectricUtilityShareChart"
import EVByLocationChart from "./EVByLocationChart"
import EVTypeDistributionChart from "./EVTypeDistributionChart"
import MDistribution from "./MDistribution"
import ModelReleaseChart from "./ModelReleaseChart"
import RegistrationEvChart from "./RegistrationEvChart"
import RangeOverTimeChart from "./RangeOverTimeChart"
import TopManufacturersChart from "./TopManufacturersChart"
import TractUtilityChart from "./TractUtilityChart"
export const allCharts = [
    {
        id:9,
        chart: RegistrationEvChart,
        name:"EV Registration's",
    },
    {
        id:1,
        name: "Utility",
        chart: TractUtilityChart,
    },
    {
        id:2,
        name: "Model Release",
        chart: ModelReleaseChart,
    },
    
    // {
    //     id:4,
    //     name: "M Distribution Chart",
    //     chart: MDistribution,
    // },
    {
        id:4,
        name:"CAFV Eligibility",
        chart: CAFVEligibilityChart,
    },
    {
        id:3,
        name: "Electric Range Over Time",	
        chart: RangeOverTimeChart,
    },
   
    {
        id:6,
        chart:TopManufacturersChart,
        name:"Top Manufacturers Chart",
    },
    {
        id:8,
        chart: EVTypeDistributionChart,
        name:"EV's Type Distribution",
    },
    {
        id:7,
        chart: AvgRangeByMakeChart,	
        name:"Average Range",
    },
    
   
    {
        id:10,  
        chart: ElectricUtilityShareChart,
        name:"Electric Utility Share's",
    },
    {
        id:5,
        name:"EV's by Location",
        chart: EVByLocationChart,
    },

]