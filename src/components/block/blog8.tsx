import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import Image from "next/image";

interface Post {
    id: string;
    title: string;
    summary: string;
    label: string;
    author: string;
    published: string;
    url: string;
    image: string;
    tags?: string[];
}

interface Blog8Props {
    heading?: string;
    description?: string;
    posts?: Post[];
}

const Blog8 = ({
    heading = "Blog Posts",
    description = "Discover the latest insights and tutorials about modern web development, UI design, and component-driven architecture.",
    posts = [
        {
            id: "post-1",
            title:
                "Building Modern UIs: A Deep Dive into Shadcn and React Components",
            summary:
                "Join us for an in-depth exploration of building modern user interfaces using shadcn/ui and React. Learn best practices and advanced techniques.",
            label: "Web Design",
            author: "Sarah Chen",
            published: "15 Feb 2024",
            url: "https://shadcnblocks.com",
            image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
            tags: ["Web Design", "UI Development"],
        },
        {
            id: "post-2",
            title: "Mastering Tailwind CSS: From Basics to Advanced Techniques",
            summary:
                "Discover how to leverage the full power of Tailwind CSS to create beautiful, responsive websites with clean and maintainable code.",
            label: "Web Design",
            author: "Michael Park",
            published: "22 Feb 2024",
            url: "https://shadcnblocks.com",
            image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
            tags: ["Web Design", "CSS"],
        },
    ],
}: Blog8Props) => {
    return (
        <section>
            <div className="container flex flex-col gap-4">
                <div>
                    <h2 className="mb-6 text-3xl font-semibold text-pretty md:text-4xl">
                        {heading}
                    </h2>
                    <p className="text-muted-foreground md:text-lg">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12">
                    {posts.map((post) => (
                        <Card
                            key={post.id}
                            className="border-0 bg-transparent shadow-none"
                        >
                            <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12">
                                <div className="sm:col-span-5">
                                    <div className="mb-4 md:mb-6">
                                        <div className="flex flex-wrap gap-3 text-xs tracking-wider text-muted-foreground uppercase md:gap-5 lg:gap-6">
                                            {post.tags?.map((tag) => <span key={tag}>{tag}</span>)}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">
                                        <a
                                            href={post.url}
                                            target="_blank"
                                            className="hover:underline"
                                        >
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p className="mt-4 text-muted-foreground md:mt-5">
                                        {post.summary}
                                    </p>
                                    <div className="mt-6 flex items-center space-x-4 text-sm md:mt-8">
                                        <span className="text-muted-foreground">{post.author}</span>
                                        <span className="text-muted-foreground">•</span>
                                        <span className="text-muted-foreground">
                                            {post.published}
                                        </span>
                                    </div>
                                    <div className="mt-6 flex items-center space-x-2 md:mt-8">
                                        <a
                                            href={post.url}
                                            target="_blank"
                                            className="inline-flex items-center font-semibold hover:underline md:text-base"
                                        >
                                            <span>Selengkapnya</span>
                                            <ArrowRight className="ml-2 size-4 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                                <div className="order-first sm:order-last sm:col-span-5">
                                    <a href={post.url} target="_blank" className="block">
                                        <div className="relative aspect-video lg:aspect-[5/6] overflow-clip rounded-lg border border-border">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="h-full w-full object-cover object-top transition-opacity duration-200 fade-in hover:opacity-70"
                                            />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { Blog8 };
