import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = (await req.json()) as {
    name?: string;
    email?: string;
    message?: string;
    company?: string;
  };

  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  console.log("contact_submission", {
    name: body.name,
    email: body.email,
    message: body.message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
