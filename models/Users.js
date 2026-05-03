import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    username: { type: String },
    photo: { type: String },
  },
  { timestamps: true 
    ,versionKey:false
  },
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
