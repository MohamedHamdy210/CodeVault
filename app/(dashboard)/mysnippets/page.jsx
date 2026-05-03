
import SnippetGrid from "@/app/components/SnippetsGrid";
import { auth } from "@clerk/nextjs/server";
import { Clock, FolderCode, LayoutGrid } from "lucide-react";

const page = async () => {
  const { getToken } = await auth();

  const token = await getToken();

  let data = await fetch("http://localhost:3000/api/mysnippets", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  let snippets = await data.json();
  const stats = [
    {
      label: "Total Snippets",
      value: snippets.length,
      icon: <FolderCode size={18} />,
    },
    { label: "Most Used Tech", value: "React", icon: <LayoutGrid size={18} /> },
    { label: "Last Updated", value: "2h ago", icon: <Clock size={18} /> },
  ];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <header className="mb-12 border-b border-gray-800 pb-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold tracking-tight">My Vault</h1>
            <p className="text-gray-500 max-w-xl">
              This is your central repository for all saved code logic.
              Organized, secure, and ready for deployment.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mt-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#161616] border border-gray-800 p-4 rounded-xl flex items-center gap-4 transition-all hover:border-blue-500/30"
              >
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                    {stat.label}
                  </p>
                  <p className="text-lg font-semibold text-gray-200">
                    {stat.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </header>

        
        <section>
          
          <div className="flex items-center gap-3 mb-8">
            <div className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            <h2 className="text-lg font-medium text-gray-300">
              All Collections
            </h2>
          </div>

          
          <SnippetGrid snippets={snippets} />

        </section>
      </div>

    </div>
  );
};

export default page;
