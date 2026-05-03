import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import SnippetCard from "../components/SnippetCard";
import AddButton from "../components/AddButton";
import HeroSection from "../components/Hero";
import SnippetGrid from "../components/SnippetsGrid";

const page = async () => {
  const { getToken, userId } = await auth();

  const token = await getToken();

  let data = await fetch("/api/snippets", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  let snippets = await data.json();
  return (
    <div className="">
      <HeroSection />

      <SnippetGrid snippets={snippets} />


    </div>
  );
};

export default page;
