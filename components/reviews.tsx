import Image from "next/image";
import { Star } from "lucide-react";
import { useStore } from "@/store/useStore";

const Reviews = () => {
  const { reviews } = useStore();
  console.log('reviews', reviews)

  if (!Array.isArray(reviews) || !reviews.length) return null;

  return (
    <div className="bg-white rounded-lg p-4 w-full max-w-xl">
      <div className="grid grid-cols-3 gap-4">
        {reviews.map((review, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-1 overflow-hidden">
              <Image
                src={
                  `https:${review.fields.image.fields.file.url}` ||
                  "/placeholder.svg"
                }
                alt={review.fields.name}
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            <p className="font-medium text-sm">{review.fields.name}</p>
            <div className="flex text-yellow-400 my-1">
              {Array(5)
                .fill(null)
                .map((_, i) => {
                  const rating = parseInt(review.fields.rating);
                  const fillClass = rating <= i ? "" : " fill-yellow-400";
                  return (
                    <Star
                      key={i}
                      className={`w-3 h-3 text-yellow-400${fillClass}`}
                    />
                  );
                })}
            </div>
            <p className="text-xs text-center mt-1">
              {review.fields.reviewText}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
