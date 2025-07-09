import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import SampleImage from "@/assets/sample.jpg"

interface Feature74Props {
  header?: null | {
    title: string;
    subtitle: string;
    buttonLabel: string;
  };
  feature1: {
    name: string;
    text: string;
    image: StaticImageData;
  };
  feature2: {
    name: string;
    text: string;
    image: StaticImageData;
  }
}

const Feature74 = ({
  header = {
    title: "Feature name",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
    buttonLabel: "Book a demo",
  },
  feature1 = {
    name: "Default Feature One",
    text: "This is the default text for feature one, showcasing its benefits.",
    image: SampleImage,
  },
  feature2 = {
    name: "Default Feature Two",
    text: "Here's the default explanation for feature two, highlighting its impact.",
    image: SampleImage,
  },
}: Feature74Props) => {
  return (
    <section className="p-4">
      <div className="container flex flex-col gap-16 lg:px-16">
        {header && <div className="lg:max-w-sm">
          <h2 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
            {header.title}
          </h2>
          <p className="mb-8 text-muted-foreground lg:text-lg">
            {header.subtitle}
          </p>
          <a
            href="#"
            className="group flex items-center text-xs font-medium md:text-base lg:text-lg"
          >
            {header.buttonLabel} {" "}
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        }
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          <div className="flex flex-col overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
            {feature1.image && <div className="relative md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
              <Image
                src={feature1.image}
                alt={feature1.name}
                placeholder="blur"
                fill
                className="aspect-16/9 h-full w-full object-cover object-center"
              />
            </div>
            }
            <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                {feature1.name}
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                {feature1.text}
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
            <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                {feature2.name}
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                {feature2.text}
              </p>
            </div>
            {feature2.image && <div className="relative md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
              <Image
                src={feature2.image}
                alt={feature2.name}
                placeholder="blur"
                fill
                className="aspect-16/9 h-full w-full object-cover object-center"
              />
            </div>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature74 };
