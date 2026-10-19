import { NextResponse } from "next/server";

// Connect this route to your email/CRM provider before collecting live inquiries.
export async function POST() {
  return NextResponse.json(
    { error: "The contact form is not connected yet. Please contact the site owner directly." },
    { status: 503 },
  );
}
