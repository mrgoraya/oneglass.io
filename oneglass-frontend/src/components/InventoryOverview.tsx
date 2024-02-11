import React, { useEffect, useState } from "react";
import { fetchInventory, InventoryData } from "../services/inventoryService";

const InventoryOverview: React.FC = () => {
  const [inventoryData, setInventoryData] = useState<InventoryData[]>([]);

  useEffect(() => {
    const fetchAndSetInventory = async () => {
      try {
        const inventory = await fetchInventory();
        setInventoryData(inventory);
      } catch (error) {
        console.error("Error fetching inventory data:", error);
        // Handle error appropriately
      }
    };

    fetchAndSetInventory();
  }, []);

  return (
    <div>
      <h2>Inventory Overview</h2>
      <table>
        <thead>
          <tr>
            <th>Location</th>
            <th>Current Stock</th>
            <th>Incoming Stock</th>
            <th>Product Name</th>
            {/* Add other headers as needed */}
          </tr>
        </thead>
        <tbody>
          {inventoryData.map((item) => (
            <tr key={item.id}>
              <td>{item.location}</td>
              <td>{item.currentStock}</td>
              <td>{item.incomingStock}</td>
              <td>{item.productName}</td>
              {/* Add other data cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryOverview;
