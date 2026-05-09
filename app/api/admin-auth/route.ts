import { NextRequest, NextResponse } from "next/server";

// Set your admin password here or via environment variable
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "your-secure-password";

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    if (!password) {
      return NextResponse.json(
        { error: "Password required" },
        { status: 400 }
      );
    }

    // Check password
    if (password === ADMIN_PASSWORD) {
      return NextResponse.json(
        { success: true },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: "Invalid password" },
        { status: 401 }
      );
    }
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
