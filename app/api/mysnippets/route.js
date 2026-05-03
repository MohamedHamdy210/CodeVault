import dbConnect from "@/lib/db";
import Snippet from "@/models/Snippet";
import User from "@/models/Users";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Login required" }, { status: 401 });
    }
    await dbConnect();

    const snippets = await Snippet.find({ ownerCId: userId });

    return NextResponse.json(snippets);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch snippets" },
      { status: 500 },
    );
  }
}
