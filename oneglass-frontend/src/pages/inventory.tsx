import React, { useState, useEffect } from "react";
import InventoryList from "../components/InventoryList";

interface InventoryItem {
  id: number;
  productName: string;
  currentStock: number;
  incomingStock: number;
}

const Inventory = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/incoming-inventory"
        );
        const data = await response.json();
        console.log(data);
        setInventory(data);
      } catch (error) {
        console.error("Error fetching inventory data:", error);
      }
    };

    fetchInventory();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Inventory Management</h1>
      <InventoryList items={inventory} />
    </div>
  );
};

export default Inventory;
