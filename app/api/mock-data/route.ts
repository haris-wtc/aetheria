import { NextResponse } from "next/server";

export async function GET() {
  const mockData = {
    messages: [
      {
        id: "system-1",
        role: "system",
        content:
          "You are a master perfumer with extensive knowledge of fragrance ingredients. When given a description or image, suggest 10-20 perfume ingredients in percentage under each notes (top/middle/base) that would create a fragrance matching that mood, scene, or concept. For each ingredient, provide its name, a brief description of its scent profile, and why it fits the theme. Return the ingredients in json array format. If the provided input is not sufficient to make meaningful suggestions OR contradictory OR incorrect OR any other issue, respond with empty json.array without any explanation.",
        parts: [
          {
            type: "text",
            text: "You are a master perfumer with extensive knowledge of fragrance ingredients. When given a description or image, suggest 10-20 perfume ingredients in percentage under each notes (top/middle/base) that would create a fragrance matching that mood, scene, or concept. For each ingredient, provide its name, a brief description of its scent profile, and why it fits the theme. Return the ingredients in json array format. If the provided input is not sufficient to make meaningful suggestions OR contradictory OR incorrect OR any other issue, respond with empty json.array without any explanation.",
          },
        ],
      },
      {
        id: "dGaptIV7njSHrbIH",
        createdAt: "2025-03-04T08:48:10.184Z",
        role: "user",
        content: "happy mood and cold weather",
        parts: [
          {
            type: "text",
            text: "happy mood and cold weather",
          },
        ],
      },
      {
        id: "msg-HZ0jbCQa3GgdWzjpPTCEq8IB",
        createdAt: "2025-03-04T08:48:10.995Z",
        role: "assistant",
        content:
          '[\n  {\n    "note": "top",\n    "ingredients": [\n      {\n        "name": "Bergamot",\n        "percentage": 5,\n        "description": "Bright, citrusy, and uplifting",\n        "reason": "Adds a cheerful, energizing opening"\n      },\n      {\n        "name": "Peppermint",\n        "percentage": 3,\n        "description": "Cool, fresh, and invigorating",\n        "reason": "Evokes the crisp feeling of cold weather"\n      },\n      {\n        "name": "Grapefruit",\n        "percentage": 4,\n        "description": "Zesty, tangy, and refreshing",\n        "reason": "Contributes to the happy mood with its lively scent"\n      }\n    ]\n  },\n  {\n    "note": "middle",\n    "ingredients": [\n      {\n        "name": "Cinnamon",\n        "percentage": 2,\n        "description": "Warm, spicy, and comforting",\n        "reason": "Adds warmth to balance the cold weather theme"\n      },\n      {\n        "name": "Jasmine",\n        "percentage": 3,\n        "description": "Sweet, floral, and uplifting",\n        "reason": "Enhances the happy mood with its pleasant aroma"\n      },\n      {\n        "name": "Pine",\n        "percentage": 4,\n        "description": "Fresh, woody, and crisp",\n        "reason": "Reinforces the cold weather aspect"\n      },\n      {\n        "name": "Vanilla",\n        "percentage": 3,\n        "description": "Sweet, creamy, and comforting",\n        "reason": "Adds a cozy element to counterbalance the cold"\n      }\n    ]\n  },\n  {\n    "note": "base",\n    "ingredients": [\n      {\n        "name": "Cedarwood",\n        "percentage": 4,\n        "description": "Woody, warm, and grounding",\n        "reason": "Provides a solid base reminiscent of winter forests"\n      },\n      {\n        "name": "Amber",\n        "percentage": 3,\n        "description": "Warm, rich, and resinous",\n        "reason": "Adds depth and warmth to the composition"\n      },\n      {\n        "name": "Musk",\n        "percentage": 2,\n        "description": "Clean, soft, and comforting",\n        "reason": "Enhances the overall mood with a subtle, happy undertone"\n      }\n    ]\n  }\n]',
        parts: [
          {
            type: "text",
            text: '[\n  {\n    "note": "top",\n    "ingredients": [\n      {\n        "name": "Bergamot",\n        "percentage": 5,\n        "description": "Bright, citrusy, and uplifting",\n        "reason": "Adds a cheerful, energizing opening"\n      },\n      {\n        "name": "Peppermint",\n        "percentage": 3,\n        "description": "Cool, fresh, and invigorating",\n        "reason": "Evokes the crisp feeling of cold weather"\n      },\n      {\n        "name": "Grapefruit",\n        "percentage": 4,\n        "description": "Zesty, tangy, and refreshing",\n        "reason": "Contributes to the happy mood with its lively scent"\n      }\n    ]\n  },\n  {\n    "note": "middle",\n    "ingredients": [\n      {\n        "name": "Cinnamon",\n        "percentage": 2,\n        "description": "Warm, spicy, and comforting",\n        "reason": "Adds warmth to balance the cold weather theme"\n      },\n      {\n        "name": "Jasmine",\n        "percentage": 3,\n        "description": "Sweet, floral, and uplifting",\n        "reason": "Enhances the happy mood with its pleasant aroma"\n      },\n      {\n        "name": "Pine",\n        "percentage": 4,\n        "description": "Fresh, woody, and crisp",\n        "reason": "Reinforces the cold weather aspect"\n      },\n      {\n        "name": "Vanilla",\n        "percentage": 3,\n        "description": "Sweet, creamy, and comforting",\n        "reason": "Adds a cozy element to counterbalance the cold"\n      }\n    ]\n  },\n  {\n    "note": "base",\n    "ingredients": [\n      {\n        "name": "Cedarwood",\n        "percentage": 4,\n        "description": "Woody, warm, and grounding",\n        "reason": "Provides a solid base reminiscent of winter forests"\n      },\n      {\n        "name": "Amber",\n        "percentage": 3,\n        "description": "Warm, rich, and resinous",\n        "reason": "Adds depth and warmth to the composition"\n      },\n      {\n        "name": "Musk",\n        "percentage": 2,\n        "description": "Clean, soft, and comforting",\n        "reason": "Enhances the overall mood with a subtle, happy undertone"\n      }\n    ]\n  }\n]',
          },
        ],
        revisionId: "DUZ03Tnig53hBqYG",
      },
      {
        id: "JhlJs5ve8qSihbJb",
        createdAt: "2025-03-04T08:50:26.028Z",
        role: "user",
        content: "happy and cold weather",
        parts: [
          {
            type: "text",
            text: "happy and cold weather",
          },
        ],
      },
    ],
    status: "success",
  };

  // Return the mock data as a JSON response
  return NextResponse.json(mockData);
}
