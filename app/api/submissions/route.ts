import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import { join } from "path";

// Set your admin password here or via environment variable
// Trim whitespace to avoid issues with env var formatting
const ADMIN_PASSWORD = (process.env.ADMIN_PASSWORD || "your-secure-password").trim();

const DATA_FILE = join(process.cwd(), "data", "submissions.json");

export async function GET(request: NextRequest) {
  try {
    // Get password from header
    const password = request.headers.get("x-admin-password");

    if (!password || password.trim() !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Read submissions
    let submissions = [];
    try {
      const data = await fs.readFile(DATA_FILE, "utf-8");
      submissions = JSON.parse(data);
    } catch {
      // File doesn't exist yet
    }

    return NextResponse.json(submissions, { status: 200 });
  } catch (error) {
    console.error("Error reading submissions:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
