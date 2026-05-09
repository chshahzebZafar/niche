import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import { join } from "path";

// Simple file-based storage - no external services needed
// Submissions are saved to a local JSON file
const DATA_FILE = join(process.cwd(), "data", "submissions.json");

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { fullName, email, userType, problem } = body;
    
    if (!fullName || !email || !userType || !problem) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate problem length
    if (problem.length < 20) {
      return NextResponse.json(
        { error: "Problem description must be at least 20 characters" },
        { status: 400 }
      );
    }

    // Log the submission
    console.log("=== WAITLIST SUBMISSION ===");
    console.log("Timestamp:", new Date().toISOString());
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("User Type:", userType);
    console.log("Industry:", body.industry || body.jobTitle || "Not provided");
    console.log("Problem:", problem);
    console.log("Referral Source:", body.referralSource || "Not provided");
    console.log("==========================");

    // Save submission to local file (no external services needed)
    try {
      // Ensure data directory exists
      const dataDir = join(process.cwd(), "data");
      try {
        await fs.access(dataDir);
      } catch {
        await fs.mkdir(dataDir, { recursive: true });
      }

      // Read existing submissions
      let submissions = [];
      try {
        const existing = await fs.readFile(DATA_FILE, "utf-8");
        submissions = JSON.parse(existing);
      } catch {
        // File doesn't exist yet, start with empty array
      }

      // Add new submission
      const submission = {
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        fullName,
        email,
        userType,
        industry: body.industry || body.jobTitle || "Not provided",
        problem,
        referralSource: body.referralSource || "Not provided",
      };

      submissions.push(submission);

      // Save back to file
      await fs.writeFile(DATA_FILE, JSON.stringify(submissions, null, 2));

      console.log("✅ Submission saved to", DATA_FILE);
      console.log("📊 Total submissions:", submissions.length);
    } catch (saveError) {
      console.error("❌ Failed to save submission:", saveError);
      // Still return success to user even if save fails
    }

    return NextResponse.json(
      { success: true, message: "Successfully joined waitlist" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing waitlist submission:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
