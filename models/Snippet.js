import mongoose from "mongoose";

const SnippetSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    tech: { type: String, required: true },
    language: { type: String, required: true },
    code: { type: String, required: true },
    tags: [String],
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    ownerCId:{
      type:String
    }
  },
  { timestamps: true,
    versionKey:false
   },
);

export default mongoose.models.Snippet ||
  mongoose.model("Snippet", SnippetSchema);
