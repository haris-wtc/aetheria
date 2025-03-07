"use client";

import { useEffect, useState } from "react";
import PerfumeGenerator from "@/components/perfume-generator";
import PerfumeDesigner from "@/components/perfume-designer";
import { PerfumeReview } from "@/components/perfume-review";
import { useStore } from "@/store/useStore";
import { Review } from "@/lib/contentful/types";

interface Props {
  reviews: Review[];
}

const PerfumeStarter = (props: Props) => {
  const [isClient, setIsClient] = useState(false);
  const { step, setReviews } = useStore();

  useEffect(() => {
    setIsClient(true);
    setReviews(props.reviews);
  }, []);

  const getPage = () => {
    if (isClient) {
      if (step === 3) {
        return <PerfumeReview />;
      }
      if (step === 2) {
        return <PerfumeDesigner />;
      }
    }

    return <PerfumeGenerator />;
  };

  return getPage();
};

export default PerfumeStarter;
