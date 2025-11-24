import { BlockRenderer } from "@/components/BlockRenderer";
import { ContentList } from "@/components/ContentList";
import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/BlogCard";

async function loader() {
  const data = await getHomePage();

  if (!data) {
    notFound();
  }

  return { ...data.data };
}

interface PageProps {
  searchParams: Promise<{ page?: string; query?: string }>;
}

export default async function HomeRoute({ searchParams }: PageProps) {
  const { query } = await searchParams;
  const data = await loader();
  const blocks = data?.blocks || [];

  return (
    <div>
      <BlockRenderer blocks={blocks} />
      <div className="container">
        <ContentList
          headline="Featured Articles"
          path="/api/articles"
          component={BlogCard}
          featured
          showSearch
          query={query}
        />
      </div>
    </div>
  );
}
