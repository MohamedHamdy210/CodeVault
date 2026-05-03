import dbConnect from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server"; // Don't forget to import this!
import Snippet from "@/models/Snippet"; // Ensure Snippet is imported

export async function PUT(req, { params }) {
  console.log("Update hit!");

  try {
    // FIX 1: auth is a function you must call
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Login required" }, { status: 401 });
    }

    // FIX 2: params should be awaited in newer Next.js versions
    const { id } = await params;

    await dbConnect();

    // FIX 3: It's req.json(), not req.body.json()
    const { title, tech, language, code, tags } = await req.json();

    const existingSnippet = await Snippet.findById(id);

    if (!existingSnippet) {
      return NextResponse.json({ error: "Snippet not found" }, { status: 404 });
    }

    // FIX 4: Security - Re-enable this once you're sure it works!
    // if (existingSnippet.owner !== userId) {
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    // }

    // Logic for updating fields
    if (title !== undefined && title.trim() !== "")
      existingSnippet.title = title;
    if (tech !== undefined && tech.trim() !== "") existingSnippet.tech = tech;
    if (language !== undefined && language.trim() !== "")
      existingSnippet.language = language;
    if (code !== undefined && code.trim() !== "") existingSnippet.code = code;
    if (tags !== undefined && tags.length !== 0) existingSnippet.tags = tags;

    const updatedSnippet = await existingSnippet.save();

    // FIX 5: Return updatedSnippet (you were returning an undefined variable)
    return NextResponse.json(updatedSnippet, { status: 200 });
  } catch (error) {
    console.error("Update Error:", error);
    return NextResponse.json(
      { error: "Failed to update snippet", details: error.message },
      { status: 500 },
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    const { userId } = await auth();
    const { id } = await params;

    if (!userId)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    await dbConnect();


    const deletedSnippet = await Snippet.findOneAndDelete({
      _id: id,
    });

    if (!deletedSnippet) {
      return NextResponse.json(
        { error: "Snippet not found or unauthorized" },
        { status: 404 },
      );
    }

    return NextResponse.json({ message: "Deleted successfully",id:id });
  } catch (error) {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}
