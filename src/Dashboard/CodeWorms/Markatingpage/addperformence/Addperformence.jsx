import { useState, Component} from "react";
import {FaQuestionCircle, FaToggleOn, } from 'react-icons/fa';
import {CanvasJSChart} from 'canvasjs-react-charts'

const Addperformence = () => {
const [activeTab, setActiveTab] = useState("MiniBus");

const options = {
      title: {
        text: "BDT"
      },
      data: [{				
        type: "column",
        dataPoints: [
          { label: "Apple",  y: 10  },
          { label: "Orange", y: 15  },
          { label: "Banana", y: 25  },
          { label: "Mango",  y: 30  },
          { label: "Grape",  y: 28  }
        ]
      }]
    }


return (
        <div className="bg-base-300">
<h1 className="text-2xl font-bold p-5">Performance Reports</h1>
     <div className="bg-base-100 px-5">

{/* <div className='flex justify-center gap-8'>
<div onClick={()=>handleTabClick('MiniTruck')} className={`
px-6 py-3 w-24 bg-white text-black font-bold rounded-lg ${
activeTab =="MiniTruck" ? "bg-yellow-500 text-white"  :''
}
`}>
Truck
</div>
<div onClick={()=>handleTabClick('MiniBus')} className={`
px-6 py-3 w-24 bg-white text-black font-bold rounded-lg ${
activeTab =="MiniBus" ? "bg-yellow-500 text-white" :''
}
`}>
Buses
</div>
<div onClick={()=>handleTabClick("MiniPoliceCar")} className={`
px-6 py-3 w-24 bg-white text-black font-bold rounded-lg ${
activeTab =="MiniPoliceCar" ? "bg-yellow-500 text-white" :''
}
`}>
Police
</div>
</div> */}

<div className="py-5">
<h2 className="text-lg font-semibold">Search Ads</h2>
<hr className="h-1 bg-orange-600" />
</div>
<div className="py-5">
<div className="flex  gap-8">
<h2 className="text-lg font-semibold">Real-time Report</h2>
<h2 className="text-lg font-semibold">Historical Report</h2>
</div>
<hr className="h-1 bg-orange-600" />
</div>
<div className="py-5">
<div className="flex  gap-8">
<h2 className="text-lg font-semibold">Campaign</h2>
<h2 className="text-lg font-semibold">Promoted Products</h2>
<h2 className="text-lg font-semibold">Keywords</h2>
</div>
<hr className="h-1 bg-orange-600" />
</div>

<div className="flex justify-end">
<select name="" id="" className="border-2  w-60 text-lg font-semibold mb-5 py-2 px-2">
<option value="Money">Money</option>
<option value="Money">Money</option>
<option value="Money">Money</option>
</select>
</div>

<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-6 gap-4 pb-10">
<div className="bg-base-300 p-5 space-y-4">
<h2 className="flex items-center text-lg font-semibold px-4 gap-4">Spend <span className="w-5 h-5"><FaQuestionCircle className="text-gray-500 w-5 h-6"></FaQuestionCircle></span></h2>
<h3 className="text-xl font-bold text-center">BDT 0</h3>
</div>
<div className="bg-base-300 p-5 space-y-4">
<h2 className="flex items-center text-lg font-semibold px-4 gap-4">Spend <span className="w-5 h-5"><FaQuestionCircle className="text-gray-500 w-5 h-6"></FaQuestionCircle></span></h2>
<h3 className="text-xl font-bold text-center">BDT 0</h3>
</div>
<div className="bg-base-300 p-5 space-y-4">
<h2 className="flex items-center text-lg font-semibold px-4 gap-4">Spend <span className="w-5 h-5"><FaQuestionCircle className="text-gray-500 w-5 h-6"></FaQuestionCircle></span></h2>
<h3 className="text-xl font-bold text-center">BDT 0</h3>
</div>
<div className="bg-base-300 p-5 space-y-4">
<h2 className="flex items-center text-lg font-semibold px-4 gap-4">Spend <span className="w-5 h-5"><FaQuestionCircle className="text-gray-500 w-5 h-6"></FaQuestionCircle></span></h2>
<h3 className="text-xl font-bold text-center">BDT 0</h3>
</div>
<div className="bg-base-300 p-5 space-y-4">
<h2 className="flex items-center text-lg font-semibold px-4 gap-4">Spend <span className="w-5 h-5"><FaQuestionCircle className="text-gray-500 w-5 h-6"></FaQuestionCircle></span></h2>
<h3 className="text-xl font-bold text-center">BDT 0</h3>
</div>
<div className="bg-base-300 p-5 space-y-4">
<h2 className="flex items-center text-lg font-semibold px-4 gap-4">Spend <span className="w-5 h-5"><FaQuestionCircle className="text-gray-500 w-5 h-6"></FaQuestionCircle></span></h2>
<h3 className="text-xl font-bold text-center">BDT 0</h3>
</div>

</div>

 <div>
<div className="text-lg font-semibold flex gap-6">
<h2>Spend</h2>
<h2>Impression</h2>
<h2>Clicks</h2>
<h2>CTR</h2>
<h2>CPC</h2>
<h2>CTM</h2>
</div>
<hr className="h-1 bg-orange-600 mt-2 mb-5" />
        <CanvasJSChart options = {options}
          /* onRef = {ref => this.chart = ref} */
        />
        </div>


</div>

        </div>
    );
};

export default Addperformence;