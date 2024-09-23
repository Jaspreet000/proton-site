"use client";
import Image from "next/image";
import { FollowerPointerCard } from "../ui/following-pointer";
import Link from "next/link";
// import { useRouter } from "next/navigation";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { url } from "inspector";
import { useBlogContext } from '@/context/BlogContext';
import { blogs } from '@/data/blogs'

export function BlogHom() {
  // const handleClick = () => {
  //   router.push(blogContents.url); // Use this to programmatically navigate
  // };

  const { setSelectedBlog } = useBlogContext();

  const handleBlogClick = (id: any) => {
    setSelectedBlog(blogs.find((blog) => blog.id === id));
  };
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
                              <Link
                                href={`/blogs/${blogContent.id}`}
                                onClick={() => handleBlogClick(blogContent.id)}
                                className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs cursor-pointer transition transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-800"
                              >
                                Read More
                              </Link>
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
    id: 1,
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
    id: 2,
    date: "28th March, 2023",
    title: "Rise of the Custom Generative AI",
    description:
      "In the ever-evolving landscape of artificial intelligence (AI), custom generative AI solutions are emerging...",
    image: "/assets/images/genai.png",
    authorAvatar: "",
  },
  {
    slug: "",
    author: "",
    id: 3,
    date: "28th March, 2023",
    title: "Pi 2.5: The Next Leap in Personal AI Evolution",
    description:
      "In the ever-evolving landscape of artificial intelligence, the quest for creating smarter, more capabl...",
    image: "/assets/images/aiimg.jpg",
    authorAvatar: "",
  },
  {
    slug: "",
    author: "",
    id: 4,
    date: "28th March, 2023",
    title: "Advantages of small large language models",
    description:
      "In a landscape where ‘bigger is better’ often takes center stage, it’s worth exploring the advantages that smalle...",
    image: "/assets/images/llm.jpg",
    authorAvatar: "",
  },
  {
    slug: "",
    author: "",
    id: 5,
    date: "28th March, 2023",
    title: "The Evolving Landscape of Data Orchestration",
    description:
      "When it comes to the dynamic world of data orchestration, one open-source tool has stood the test of time: Apache...",
    image: "/assets/images/dataorc.png",
    authorAvatar: "",
  },
  {
    slug: "",
    author: "",
    id: 6,
    date: "28th March, 2023",
    title: "Mastering the Modeling of Data",
    description:
      "Privacy in AI has become a paramount concern in today’s digital landscape. As artificial intelligence (AI) continues...",
    image: "/assets/images/bigdata.jpg",
    authorAvatar: "",
  },
];

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
