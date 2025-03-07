import { anthropic } from "@ai-sdk/anthropic";
import { streamText, type Message } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages }: { messages: Message[] } = await req.json();

    // Check if we have any messages with attachments
    const hasAttachments = messages.some(
      (message) =>
        message.experimental_attachments &&
        message.experimental_attachments.length > 0
    );

    // Log for debugging (optional, can be removed in production)
    console.log(
      `Processing request with ${messages.length} messages. Has attachments: ${hasAttachments}`
    );

    const result = streamText({
      model: anthropic("claude-3-5-sonnet-20240620"),
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Error processing chat request:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process request" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
