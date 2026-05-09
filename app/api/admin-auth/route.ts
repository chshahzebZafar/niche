import { NextRequest, NextResponse } from "next/server";

// Set your admin password here or via environment variable
// Trim whitespace to avoid issues with env var formatting
const ADMIN_PASSWORD = (process.env.ADMIN_PASSWORD || "your-secure-password").trim();

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    if (!password) {
      return NextResponse.json(
        { error: "Password required" },
        { status: 400 }
      );
    }

    // Trim the input password as well
    const trimmedPassword = password.trim();

    // Debug logging (remove in production)
    console.log("Login attempt:");
    console.log("- Input password length:", trimmedPassword.length);
    console.log("- Env password length:", ADMIN_PASSWORD.length);
    console.log("- Match:", trimmedPassword === ADMIN_PASSWORD);

    // Check password
    if (trimmedPassword === ADMIN_PASSWORD) {
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
