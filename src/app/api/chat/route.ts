import { NextResponse } from "next/server";

const botResponses: Record<string, string> = {
  hello: "Welcome to L'Encore! How can I help you today?",
  menu: "Our menu features French Toasts (₹295-₹395), NY Rolls (₹295-₹365), Crepes (₹325-₹375), Signature Specials, Coffee, and Cold Beverages.",
  hours: "We're open daily from 5:00 PM to 11:00 PM.",
  location: "We're at Ornet Park 3, Sindhu Bhavan Road, Ahmedabad.",
  reservation: "Reserve via WhatsApp or our online form. For special occasions, book 24 hours in advance.",
  bestseller: "Our bestsellers: Classic Brioche French Toast, Original NY Roll, and Saffron Kunafa Crepe!",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const [key, value] of Object.entries(botResponses)) {
    if (lower.includes(key)) return value;
  }
  return "Thank you! For detailed information, please WhatsApp us at +91 98765 43210.";
}

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const response = getResponse(message);

    return NextResponse.json({ response });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
