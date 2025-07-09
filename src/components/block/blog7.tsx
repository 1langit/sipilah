import { ArrowRight, LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import SampleImage from "@/assets/sample.jpg"

interface PostContent {
  name: string;
  text: string;
}

interface Post {
  id: string;
  title: string;
  summary: string;
  icons?: LucideIcon[] | null;
  contents?: PostContent[] | null;
  color?: string;
  image: StaticImageData;
}

interface Blog7Props {
  tagline?: string | null;
  heading?: string;
  description?: string;
  buttonText?: string | null;
  buttonUrl?: string;
  postCountOnLg: number;
  posts?: Post[];
}

const Blog7 = ({
  tagline = "Latest Updates",
  heading = "Blog Posts",
  description = "Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights.",
  buttonText = "View all articles",
  buttonUrl = "https://shadcnblocks.com",
  postCountOnLg = 3,
  posts = [
    {
      id: "post-1",
      title: "Getting Started with shadcn/ui Components",
      summary:
        "Learn how to quickly integrate and customize shadcn/ui components in your Next.js projects. We'll cover installation, theming, and best practices for building modern interfaces.",
      image: SampleImage,
    },
    {
      id: "post-2",
      title: "Building Accessible Web Applications",
      summary:
        "Explore how to create inclusive web experiences using shadcn/ui's accessible components. Discover practical tips for implementing ARIA labels, keyboard navigation, and semantic HTML.",
      image: SampleImage,
    },
    {
      id: "post-3",
      title: "Modern Design Systems with Tailwind CSS",
      summary:
        "Dive into creating scalable design systems using Tailwind CSS and shadcn/ui. Learn how to maintain consistency while building flexible and maintainable component libraries.",
      image: SampleImage,
    },
  ],
}: Blog7Props) => {
  return (
    <section className="">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          {tagline && <Badge variant="secondary" className="mb-6">
            {tagline}
          </Badge>
          }
          <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            {heading}
          </h2>
          <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
            {description}
          </p>
          {buttonText && <Button variant="link" className="w-full sm:w-auto" asChild>
            <a href={buttonUrl} target="_blank">
              {buttonText}
              <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
          }
        </div>
        <div className={`grid gap-x-6 md:grid-cols-2 lg:grid-cols-${postCountOnLg} md:gap-8`}>
          {posts.map((post) => (
            <Card
              key={post.id}
              className={`${post.color} text-white grid grid-rows-[auto_auto_1fr_auto] rounded-none md:rounded-xl overflow-hidden pt-0`}
            >
              <div className="relative aspect-16/9 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  placeholder="blur"
                  fill
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <CardHeader>
                <h3 className="text-lg font-semibold md:text-xl">
                  {post.title}
                </h3>
              </CardHeader>
              <CardContent className="space-y-6">
                <p>{post.summary}</p>
                <div className="flex space-x-2">
                  {post.icons && post.icons.map((Icon, i) => (
                    <Icon key={i} />
                  ))}
                </div>
                {post.contents && post.contents.map((item, i) => (
                  <div key={i}>
                    <b>{item.name}</b>
                    <p>{item.text}</p>
                  </div>
                ))}
              </CardContent>
              {/* <CardFooter>
                <Button variant="ghost">
                  Selengkapnya
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </CardFooter> */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Blog7 };
