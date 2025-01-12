import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Mr. Ashish",
    body: "Chanakya's expert guidance in corporate structuring has been instrumental in our successful expansion into the UAE market.",
    img: "/d.png",
  },
  {
    name: "Mr. Fahad",
    body: "The legal team at Chanakya provided invaluable support during our complex M&A process, ensuring a smooth transition.",
    img: "/a.png",
  },
  {
    name: "Mr. Farhad",
    body: "Chanakya's comprehensive approach to business consultancy has helped us navigate the intricacies of both Indian and UAE markets effectively.",
    img: "/f.png",
  },
  {
    name: "Automech Group",
    body: "Their expertise in intellectual property rights has been crucial in protecting our innovations across international borders.",
    img: "/automech.webp",
  },
  {
    name: "Nanban Group Of Companies",
    body: "Chanakya's strategic restructuring advice has significantly improved our operational efficiency and profitability.",
    img: "/nanban.webp",
  },
  {
    name: "Mr. Light Global",
    body: "From incorporation to expansion, Chanakya has been an indispensable partner in our business journey in India and the UAE.",
    img: "/light.webp",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl p-4",
        "bg-[#24388F] text-white",
        "border-2 border-white",
        "hover:bg-[#2a4098]",
        "transition-colors duration-300"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width="32" height="38" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-xl font-medium">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/70">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#24388F]">Client Testimonials</h2>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard username={""} key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard username={""} key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

