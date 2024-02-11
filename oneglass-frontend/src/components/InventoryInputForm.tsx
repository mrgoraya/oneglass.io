import React, { useState } from "react";
import { InventoryData, createInventory } from "../services/inventoryService";

interface InventoryInputFormProps {
  locations: string[];
}

const InventoryInputForm: React.FC<InventoryInputFormProps> = ({
  locations,
}) => {
  const [formData, setFormData] = useState<InventoryData>({
    location: "",
    currentStock: 0,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createInventory(formData);
      alert("Inventory updated successfully");
      setFormData({ location: "", currentStock: 0 }); // Reset form
    } catch (error) {
      console.error("Error updating inventory:", error);
      alert("Failed to update inventory");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Location:
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          >
            <option value="">Select a location</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          Current Stock:
          <input
            type="number"
            name="currentStock"
            value={formData.currentStock}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default InventoryInputForm;
