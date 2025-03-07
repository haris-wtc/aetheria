import { createClient } from "contentful";
import type { Review, USP } from "./types.ts";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getAllReviews(): Promise<Review[]> {
  try {
    const response = await client.getEntries({
      content_type: "customerReview",
    });
    return response.items as unknown as Review[];
  } catch (error) {
    console.error("Error fetching fragrances:", error);
    return [];
  }
}

export async function getAllUSPs(): Promise<USP[]> {
  try {
    const response = await client.getEntries({
      content_type: "usp",
    });
    return response.items as unknown as USP[];
  } catch (error) {
    console.error("Error fetching fragrances:", error);
    return [];
  }
}
