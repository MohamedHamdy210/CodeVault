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
    const snippets = await Snippet.find({});
    return NextResponse.json(snippets);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch snippets" },
      { status: 500 },
    );
  }
}


export async function POST(request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Login required" }, { status: 401 });
    }
    await dbConnect();
    const user = await User.findOne({ clerkId: userId });
    const { title, code, language, tech, tags } = await request.json();
    console.log(user._id);
    const snippet = await Snippet.create({
      owner: user._id,
      title,
      code,
      language,
      tech,
      tags,
      ownerCId:userId
    });

    return NextResponse.json(snippet, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create snippet" },
      { status: 400 },
    );
  }
}
