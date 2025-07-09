import Image, { StaticImageData } from "next/image";
import SampleImage from "@/assets/sample.jpg"
import { Check, LucideIcon } from "lucide-react";

interface Feature {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string[];
  color?: string;
  image: StaticImageData;
}

interface Feature13Props {
  heading?: string;
  features?: Feature[];
}

const Feature13 = ({
  heading = "A better way to build websites",
  features = [
    {
      id: "feature-1",
      title: "Built for artists and designers",
      icon: Check,
      description:
        ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima doloribus illum, labore quis facilis molestias!"],
      image: SampleImage,
    },
    {
      id: "feature-2",
      title: "Built for coders and developers",
      icon: Check,
      description:
        ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima doloribus illum, labore quis facilis molestias!"],
      image: SampleImage,
    },
  ],
}: Feature13Props) => {
  return (
    <section className="p-4">
      <div className="container max-w-7xl">
        <h2 className="text-3xl font-semibold lg:text-4xl">{heading}</h2>
        <div className="mt-20 grid gap-9 lg:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`${feature.color} flex flex-col justify-between rounded-lg`}
            >
              <div className="h-full flex flex-col md:flex-row justify-between gap-10 border-b">
                <div className="flex flex-col justify-between gap-14 py-6 px-6 md:py-10 md:px-8 lg:justify-normal">
                  <p className="text-xs text-muted-foreground">
                    <feature.icon />
                  </p>
                  <h3 className="text-2xl font-semibold md:text-4xl">{feature.title}</h3>
                  <ul className="text-black space-y-4">
                    {feature.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="md:1/3 md:w-2/5 shrink-0 rounded-r-lg border-l overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    placeholder="blur"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature13 };
