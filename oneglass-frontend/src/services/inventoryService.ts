export interface InventoryData {
  id?: number;
  location: string;
  currentStock: number;
  incomingStock?: number;
  productName?: string;
}

// Base URL for the inventory API endpoint
const BASE_URL = "http://localhost:3000/incoming-inventory";

// Function to fetch all inventory data
const fetchInventory = async (): Promise<InventoryData[]> => {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("Error fetching inventory");
  }
  return response.json();
};

// Function to fetch required stock for a specific location
const fetchRequiredStock = async (location: string): Promise<number> => {
  const response = await fetch(`${BASE_URL}/requiredStock/${location}`);
  if (!response.ok) {
    throw new Error("Error fetching required stock");
  }
  return response.json();
};

// Function to create new inventory data
const createInventory = async (data: InventoryData): Promise<InventoryData> => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Error creating inventory");
  }
  return response.json();
};

// Function to update existing inventory data
const updateInventory = async (
  id: number,
  data: InventoryData
): Promise<InventoryData> => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Error updating inventory");
  }
  return response.json();
};

// Function to delete inventory data
const deleteInventory = async (id: number): Promise<void> => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Error deleting inventory");
  }
  return response.json();
};

export {
  fetchInventory,
  fetchRequiredStock,
  createInventory,
  updateInventory,
  deleteInventory,
};
