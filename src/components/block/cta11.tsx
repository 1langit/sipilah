import Image, { StaticImageData } from "next/image";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import SampleImage from "@/assets/sample.jpg"

interface Cta11Props {
  heading?: string;
  description?: string;
  icon?: LucideIcon;
  imageSrc?: StaticImageData;
  buttonText?: string;
  buttonHref?: string;
}

const Cta11 = ({
  heading = "Call to Action",
  description = "Build faster with our collection of pre-built blocks. Speed up your development and ship features in record time.",
  icon: Icon,
  imageSrc = SampleImage,
  buttonText = "Button",
  buttonHref = "",
}: Cta11Props) => {
  return (
    <section className="container">
      <div className="bg-gradient-to-br from-green-200 to-green-300 flex w-full flex-col gap-16 overflow-hidden rounded-lg p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-12">
        <div className="flex-1 space-y-6">
          <h3 className="text-2xl font-semibold md:mb-4 md:text-4xl flex items-center space-x-4">
            {Icon && <Icon size={32} />}
            <span>{heading}</span>
          </h3>
          <p className="text-muted-foreground font-semibold max-w-xl lg:text-lg">
            {description}
          </p>
          <Link href={buttonHref} className={buttonVariants()}>
            {buttonText}
          </Link>
        </div>
        <div className="shrink-0 hidden lg:block">
          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
            <div className="relative h-32 w-32 overflow-hidden rounded-lg sm:h-40 sm:w-40">
              <Image src={imageSrc} alt={heading} placeholder="blur" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta11 };
