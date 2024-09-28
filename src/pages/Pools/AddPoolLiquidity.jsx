import React, { useEffect } from 'react'
import {useState} from 'react';
import { useParams } from "react-router-dom";
import dummybrandlogo from "/dummylogo.jpeg"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AddPoolLiquidity = () => {
   /*Single Pools history data*/
   const pools  = [
    { id: 1, name: "Jan",  liquidity: 40000, liquiditylocked: "30,000", shares: 400000 , pnl: "400,000", poolprice: "30", pooltype: "Market" },
    {id: 2, name: "Feb", liquidity: 25000, liquiditylocked: "30,000", shares: 400000 , pnl: "400,000", poolprice: "30", pooltype: "Bet"},
    { id: 3, name: "Mar",  liquidity: 30000, liquiditylocked: "30,000", shares: 400000  , pnl: "400,000", poolprice: "30", pooltype: "Market"},
    { id: 4, name: "April", liquidity: 30000, liquiditylocked: "30,000", shares: 400000 , pnl: "400,000" , poolprice: "30", pooltype: "Project"},
    { id: 5, name: "May", liquidity: 10000, liquiditylocked: "30,000", shares: 400000 , pnl: "400,000" , poolprice: "30", pooltype: "Market"},
    { id: 6, name: "Jun", liquidity: 90000, liquiditylocked: "30,000", shares: 400000 , pnl: "400,000" , poolprice: "30", pooltype: "Bet"},
    { id: 7, name: "July", liquidity: 10000, liquiditylocked: "30,000", shares: 400000 , pnl: "400,000" , poolprice: "30", pooltype: "Market"},
    { id: 8, name: "Aug", liquidity: 5000, liquiditylocked: "30,000", shares: 400000 , pnl: "400,000" , poolprice: "30", pooltype: "Market"},
    { id: 9, name: "Sep", liquidity: 1000, liquiditylocked: "30,000", shares: 400000 , pnl: "400,000" , poolprice: "30", pooltype: "Bet"},
    { id: 10, name: "Oct", liquidity: 30000, liquiditylocked: "30,000", shares: 400000 , pnl: "400,000" , poolprice: "30", pooltype: "Project"},
    { id: 11, name: "Nov", liquidity: 30000, liquiditylocked: "30,000", shares: 400000 , pnl: "400,000" , poolprice: "30", pooltype: "Bet"},
    { id: 12, name: "Dec", liquidity: 200000, liquiditylocked: "30,000", shares: 400000 , pnl: "400,000" , poolprice: "30", pooltype: "Market"},
  ];
  /*All Pools data*/
  const Allpool = [
    { id: 1, name: "Donald Liquidity",  liquidity: "30,000", liquiditylocked: "30,000", totalshare: "400,000" , pnl: "400,000", poolprice: "30",pooltype: "Market" },
    {id: 2, name: "Fred Liquidity", liquidity: "30,000", liquiditylocked: "30,000", totalshare: "400,000" , pnl: "400,000", poolprice: "30",pooltype: "Bet"},
    { id: 3, name: "Mike Liquidity",  liquidity: "30,000", liquiditylocked: "30,000", totalshare: "400,000"  , pnl: "400,000", poolprice: "30",pooltype: "Project"},
    { id: 4, name: "Charles Liquidity", liquidity: "30,000", liquiditylocked: "30,000", totalshare: "400,000" , pnl: "400,000" , poolprice: "30",pooltype: "Bet"},
  ];

    const { poolId } = useParams(); //extract poolid from url here
    const [poolDetails, setPoolDetails] = useState(null); //initialise empty pooldetails array
    const  [inputValue, setInputValue] =  useState('');
    const  handleChange = (event) => {
        setInputValue(event.target.value);
    };

    useEffect(() => {
      //Fetch pools data from Json using poolid collected from the url
      const pool = Allpool.find(p => p.id === parseInt(poolId));
      if (pool) {
        setPoolDetails(pool);
      }
    }, [poolId]);

    if (!poolDetails) {
      return <div>Loading...</div>; // Show a loading state while data is being fetched
  }

  
       
       





  return (
    <div className='font-serif'>
    {/* Pool Name Header And Price starts here */}
    <div class="flex flex-row sm:flex-row justify-between items-center sm:items-start space-y-1 space-x-6 sm:space-y-0">
          
          {/** Back button starts here **/}
          <div className='card shadow-lg bg-white border cursor-pointer'>
            <svg className='text-center m-3 rounded text-purple-600' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024">
              <path fill="currentColor" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64" />
              <path fill="currentColor" d="m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312z" />
            </svg>
          </div>
          {/** Back button ends here **/}
          
          {/** Pool Logo and Title starts here **/}
          <div class="flex items-center space-x-2">
            <img src={dummybrandlogo} alt="BrandLogo" className="w-[40px] sm:w-[60px] rounded-full shadow-lg" />
            <p className="border-b-2 border-purple-500 text-lg sm:text-xl">{poolDetails.name}</p>
          </div>
          {/** Pool Logo and Title ends here **/}
      
          {/** Pool Price starts here **/}
          <div class="text-center sm:text-left">
            <p className="text-md sm:text-lg">Current price: 
              <span className='text-green-500 text-sm sm:text-md'> +30%</span> <span className='text-purple-500'>${poolDetails.poolprice}</span>
            </p>
          </div>
          {/** Pool Price ends here **/}
          
    </div>



{/*Pool details table & starts here*/}
<div class="flex flex-col sm:flex-row ">
  {/*Pool details table starts here*/}
  <div>
      <div className='bg-white h-full  shadow-md relative p-4 sm:p-6 max-w-xl mt-5 sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto mb-[-3%]'>
          {/* General pool div */}
          <div className='absolute top-0 left-0 flex items-center p-2 sm:p-3 rounded-br-lg bg-purple-600 text-white h-10 text-xs sm:text-sm md:text-base'>
            {poolDetails.pooltype} Pool
          </div>

          {/* General pool title div starts here */}
          <div className='mt-8 sm:mt-8 border-b-4 border-purple-600 w-fit'>
            <p className='text-lg sm:text-md md:text-2md font-semibold text-black'>
              {poolDetails.name} Pool
            </p>
          </div>
          {/* General pool title div ends here */}

         


          {/*Pool Table starts here*/}
          <div class="overflow-x-auto mt-5">
      <table class="min-w-full table-auto border-collapse">
        <thead>
          <tr class="bg-gray-200">
            <th class=" py-3 px-6  text-left text-xs sm:text-sm md:text-base whitespace-nowrap">Total Liquidity</th>
            <th class=" py-3 px-6 text-left text-xs sm:text-sm md:text-base whitespace-nowrap">Total Shares</th>
            <th class=" py-3 px-6 text-left text-xs sm:text-sm md:text-base whitespace-nowrap">Locked Liquidity</th>
            <th class=" py-3 px-6 text-left text-xs sm:text-sm md:text-base whitespace-nowrap">Price/Share</th>
            <th class=" py-3 px-6 text-left text-xs sm:text-sm md:text-base whitespace-nowrap">Unrealized P&L</th>
            <th class=" py-3 px-6 text-left text-xs sm:text-sm md:text-base"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class=" py-3 px-6 text-xs sm:text-sm md:text-base"> {poolDetails.liquidity}</td>
            <td class=" py-3 px-6 text-xs sm:text-sm md:text-base">{poolDetails.totalshare}</td>
            <td class=" py-3 px-6 text-xs sm:text-sm md:text-base">{poolDetails.liquiditylocked}</td>
            <td class=" py-3 px-6 text-xs sm:text-sm md:text-base">{poolDetails.poolprice}</td>
            <td class=" py-3 px-6 text-xs sm:text-sm md:text-base">- 30%</td>
            <td class=" py-3 px-6 text-xs sm:text-sm md:text-base whitespace-nowrap text-purple-500">{poolDetails.poolprice} USD</td>
                
          </tr>
         
        </tbody>
      </table>
            </div>
          {/*Pool Table ends here*/}

        </div>
  </div>
  {/*Pool details table ends here*/}
    {/*Add to pool starts here*/}
  <div>
      <div className='bg-white shadow-md h-full mt-5 sm:ml-10 p-8'>
      <p className="border-b-2 border-green-500 text-lg sm:text-xl">Add to Pool</p>
      <form className='mt-5'>
      <div>
          <label class="block">
            <span class="block text-sm font-medium text-slate-700">Enter Amount: {inputValue}</span>
            <input type="text" onChange={handleChange} value={inputValue}  class=" mt-1 block w-full px-3 py-2 bg-white border-7 border-purple-600 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "/>
          </label>
        </div>
      </form>
     {/*Pool and Share summary*/}
     <div className='text-sm mt-2 font-serif'>
        <p>Total price per share:  </p>   
        <p>Total shares:  </p>   
        <button className="mt-3 bg-purple-600 w-[200px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Deposit
</button>  
     </div>
    {/*Pool and Share summary ends here*/}
      </div>
    
  </div>
   {/*Add to pool starts here*/}
 
</div>
{/*Pool details table & ends here*/}


{/*Pool Chart starts here*/}
<div className='flex flex-col'>
<div className='bg-white h-full  shadow-md relative p-4  lg:w-[98.7%] mt-10 '>
<p className="border-b-2 border-purple-500 text-lg sm:text-xl mb-4">Liquidity History</p>

<ResponsiveContainer width="100%" height={300}>
    <LineChart data={pools} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="liquidity" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="shares" stroke="#82ca9d" />
    </LineChart>
</ResponsiveContainer>
</div>
</div>
{/*Pool Chart ends here*/}
    
  </div>
  
  )
}

export default AddPoolLiquidity