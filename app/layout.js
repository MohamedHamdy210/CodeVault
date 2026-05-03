import {
  ClerkProvider,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { auth, currentUser } from "@clerk/nextjs/server";
import dbConnect from "@/lib/db";
import User from "../models/Users"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",  
  subsets: ["latin"],
});

export const metadata = {
  title: "CodeVault",
  description: "Safe Code Vault for resuable code ",
};

export default async function RootLayout({ children }) {
  const { userId } = await auth();
  const user = await currentUser();

  await dbConnect();


  const mongoUser = await User.findOne({ clerkId: userId });

  if (!mongoUser && user) {
    
    console.log(userId)
    await User.create({
      clerkId: userId,
      email: user.emailAddresses[0].emailAddress,
      photo: user.imageUrl,
    });
  }
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#0d0d0d] bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent`}
      >
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}
