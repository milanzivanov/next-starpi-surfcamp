import { HeroSection } from "@/components/blocks/HeroSection";
import { InfoBlock } from "@/components/blocks/InfoBlock";
import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";

async function loader() {
  const data = await getHomePage();

  if (!data) {
    notFound();
  }

  console.log("////////// data", data);
  return { ...data.data };
}

export default async function HomeRoute() {
  const data = await loader();
  const blocks = data?.blocks || [];
  console.log("////////// data", data);

  return (
    <div>
      <HeroSection {...blocks[0]} />
      <InfoBlock {...blocks[1]} />
      <InfoBlock {...blocks[2]} />
    </div>
  );
}
