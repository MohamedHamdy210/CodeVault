

import HeroSection from "../components/Hero";
import SnippetGrid from "../components/SnippetsGrid";
import Snippet from "@/models/Snippet";
import dbConnect from "@/lib/db";

const page = async () => {
  
  
await dbConnect();
const snippets = await Snippet.find({}).lean();
  


  return (
    <div className="">
      <HeroSection />

      <SnippetGrid snippets={snippets} />


    </div>
  );
};

export default page;
