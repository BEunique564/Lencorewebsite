import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, date, time, guests, occasion, message } = body;

    if (!name || !phone || !date || !time) {
      return NextResponse.json(
        { error: "Name, phone, date, and time are required" },
        { status: 400 }
      );
    }

    const reservation = {
      id: Date.now().toString(),
      name,
      phone,
      date,
      time,
      guests: guests || 2,
      occasion: occasion || null,
      message: message || null,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      reservation,
      message: "Reservation request received. We'll confirm via WhatsApp shortly.",
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
