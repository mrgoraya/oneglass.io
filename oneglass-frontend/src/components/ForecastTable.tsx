import React from "react";

interface ForecastItem {
  id: number;
  location: string;
  date: string;
  forecastedSales: number;
}

interface ForecastTableProps {
  data: ForecastItem[];
}

const ForecastTable: React.FC<ForecastTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="table-auto w-full">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 border">Location</th>
            <th className="px-4 py-2 border">Date</th>
            <th className="px-4 py-2 border">Forecasted Sales</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="px-4 py-2 border">{item.location}</td>
              <td className="px-4 py-2 border">{item.date}</td>
              <td className="px-4 py-2 border">{item.forecastedSales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ForecastTable;
