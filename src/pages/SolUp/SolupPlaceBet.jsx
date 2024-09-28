import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import solupbetdata from '../solupbetdata.json';


const SolupPlaceBet = () => {
  const { betId } = useParams();
  const navigate = useNavigate();

  // Find the selected bet data
  const selectedBet = solupbetdata.find((bet) => bet.id.toString() === betId);

  if (!selectedBet) {
    return <h1 className="text-center text-red-500">Bet not found!</h1>;
  }



  return (
    <div className="grid gap-10 md:grid-cols-3 p-4">
      <div className="flex col-span-2 gap-8 flex-col bg-white p-6 rounded-md shadow-md">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center">
            <i
              onClick={() => navigate(-1)}
              className="text-purple-600 fa-solid fa-arrow-left cursor-pointer mr-4"
            ></i>
          </div>
          <img
            src={selectedBet.imageUrl}
            alt={selectedBet.title}
            className="w-10 h-10 rounded-full border"
          />
          <h1 className="text-xl form-title font-semibold">{selectedBet.title}</h1>
        </div>

        {/* Bet Details Table */}
        <div className="bg-white rounded-md shadow p-4 mb-6">
          <div id="table-wrapper">
            <div id="table-scroll" className="overflow-x-auto">
              <table className="w-full">
                <thead className="project font-medium bg-gray-100">
                  <tr>
                    <th className="p-2">Total bets placed</th>
                    <th className="p-2">Start Date</th>
                    <th className="p-2">Due Date</th>
                    <th className="p-2">Long</th>
                    <th className="p-2">Short</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td className="p-2">$120,000</td>
                    <td className="p-2">20000</td>
                    <td className="p-2">$12000000</td>
                    <td className="text-red-500 p-2">+490%</td>
                    <td className="text-green-500 p-2">-499%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

     
      </div>
    </div>
  );
};

// Fit the chart to the width of its parent container
export default fitWidth(SolupPlaceBet);
