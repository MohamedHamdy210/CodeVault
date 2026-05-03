'use client'
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Terminal } from "lucide-react"; 
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname()
  

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#1e1e1e] border-b border-gray-800 sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-2 group">
        <div className="bg-blue-600 p-1.5 rounded-lg group-hover:bg-blue-500 transition-colors">
          <Terminal size={20} className="text-white" />
        </div>
        <span className="text-xl font-bold text-white tracking-tight">
          Code<span className="text-blue-500">Vault</span>
        </span>
      </Link>

      <div className="flex items-center gap-8">
        <Link
          href="/"
          className={`text-sm font-medium   transition-colors ${path === "/" ? "text-blue-500" : "text-gray-400 hover:text-white"}`}
        >
          Dashboard
        </Link>
        <Link
          href="/mysnippets"
          className={`text-sm font-medium   transition-colors ${path === "/mysnippets" ? "text-blue-500" : "text-gray-400 hover:text-white"}`}
        >
          My Snippets
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <div className="h-8 w-1px bg-gray-800 mx-2" />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox:
                "h-9 w-9 border border-gray-700 hover:border-blue-500 transition-all",
            },
          }}
        />
      </div>
    </nav>
  );
}
