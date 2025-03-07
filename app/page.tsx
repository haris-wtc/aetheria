import { getAllReviews } from "@/lib/contentful/client";
import PerfumeStarter from "@/components/perfume-starter";

export default async function HomePage() {
  const reviews = await getAllReviews();

  return <PerfumeStarter reviews={reviews} />;
}
