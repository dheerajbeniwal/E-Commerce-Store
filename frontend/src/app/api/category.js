import { client } from "@/utils/helper";

async function fetchcategory() {
  try {
    const response = await client.get("category");

    console.log("API RESPONSE:", response.data);

    return response.data;
  } catch (error) {
    console.error("Fetch category error:", error);

    return {
      category: [],
    };
  }
}

export { fetchcategory };
