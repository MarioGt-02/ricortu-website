import { appendFile, mkdir } from "node:fs/promises";
import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      email?: unknown;
      source?: unknown;
    };
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const source =
      typeof body.source === "string" ? body.source : "website_waitlist";

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const submission = {
      email,
      source,
      created_at: new Date().toISOString()
    };

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const table = process.env.SUPABASE_WAITLIST_TABLE || "waitlist";

    if (supabaseUrl && supabaseKey) {
      const response = await fetch(`${supabaseUrl}/rest/v1/${table}`, {
        body: JSON.stringify(submission),
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal"
        },
        method: "POST"
      });

      if (!response.ok) {
        return NextResponse.json(
          { message: "Waitlist storage is not available yet." },
          { status: 502 }
        );
      }
    } else {
      await mkdir(".data", { recursive: true });
      await appendFile(
        ".data/waitlist.jsonl",
        `${JSON.stringify(submission)}\n`,
        "utf8"
      );
    }

    return NextResponse.json({
      message: "You are on the waitlist. We will be in touch quietly."
    });
  } catch {
    return NextResponse.json(
      { message: "Unable to join the waitlist right now." },
      { status: 500 }
    );
  }
}
