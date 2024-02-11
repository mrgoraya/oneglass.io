import React from "react";
interface InventoryItem {
  id: number;
  productName: string;
  currentStock: number;
  incomingStock: number;
}

interface InventoryListProps {
  items: InventoryItem[];
}

const InventoryList: React.FC<InventoryListProps> = ({ items }) => {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="table-auto w-full">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 border">Product Name</th>
            <th className="px-4 py-2 border">Current Stock</th>
            <th className="px-4 py-2 border">Incoming Stock</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="px-4 py-2 border">{item.productName}</td>
              <td className="px-4 py-2 border">{item.currentStock}</td>
              <td className="px-4 py-2 border">{item.incomingStock}</td>
            </tr>
          ))}
          {items.length === 0 && (
            <tr>
              <td colSpan={3} className="text-center py-4">
                No inventory data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryList;
