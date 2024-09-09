"use client";
import Image from "next/image";
import { FollowerPointerCard } from "../ui/following-pointer";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function BlogHom() {
  return (
    <>
      <div className="text-2xl mb-12 mt-28 md:text-5xl font-bold dark:text-white text-center">
        Blogs
      </div>
      <div className="flex justify-center">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-[84%]"
        >
          <CarouselContent>
            {blogContents.map((blogContent, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <FollowerPointerCard title="">
                        <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
                          <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative h-44">
                            <Image
                              src={blogContent.image}
                              alt="thumbnail"
                              layout="fill"
                              objectFit="cover"
                              className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
                            />
                          </div>
                          <div className=" p-4">
                            <h2 className="font-bold my-4 text-lg text-zinc-700">
                              {blogContent.title}
                            </h2>
                            <h2 className="font-normal my-4 text-sm text-zinc-500">
                              {blogContent.description}
                            </h2>
                            <div className="flex flex-row justify-between items-center mt-10">
                              <span className="text-sm text-gray-500">
                                {blogContent.date}
                              </span>
                              <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                                Read More
                              </div>
                            </div>
                          </div>
                        </div>
                      </FollowerPointerCard>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}

const blogContents = [
  {
  slug: "",
  author: "",
  date: "28th March, 2023",
  title: "Enhancing the Privacy in AI Field",
  description:
    "Privacy in AI has become a paramount concern in today’s digital landscape. As artificial intelligence (AI) continues...",
  image: "/assets/images/privacy.jpeg",
  authorAvatar: "",
},
{
  slug: "",
  author: "",
  date: "28th March, 2023",
  title: "Rise of Custom Generative AI",
  description:
    "In the ever-evolving landscape of artificial intelligence (AI), custom generative AI solutions are emerging...",
  image: "/assets/images/genai.png",
  authorAvatar: "",
},
{
  slug: "",
  author: "",
  date: "28th March, 2023",
  title: "Pi 2.5: The Next Leap in Personal AI Evolution",
  description:
    "In the ever-evolving landscape of artificial intelligence, the quest for creating smarter, more capable language models...",
  image: "/assets/images/aiimg.jpg",
  authorAvatar: "",
},
{
  slug: "",
  author: "",
  date: "28th March, 2023",
  title: "Enhancing Privacy in AI",
  description:
    "Privacy in AI has become a paramount concern in today’s digital landscape. As artificial intelligence (AI) continues...",
  image: "/assets/images/privacy.jpeg",
  authorAvatar: "",
},
{
  slug: "",
  author: "",
  date: "28th March, 2023",
  title: "Enhancing Privacy in AI",
  description:
    "Privacy in AI has become a paramount concern in today’s digital landscape. As artificial intelligence (AI) continues...",
  image: "/assets/images/privacy.jpeg",
  authorAvatar: "",
},
{
  slug: "",
  author: "",
  date: "28th March, 2023",
  title: "Enhancing Privacy in AI",
  description:
    "Privacy in AI has become a paramount concern in today’s digital landscape. As artificial intelligence (AI) continues...",
  image: "/assets/images/privacy.jpeg",
  authorAvatar: "",
},
]

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);
