import Image, { StaticImageData } from "next/image";
import { BottleWine, Leaf, Lightbulb, Recycle } from "lucide-react";

interface Community1Props {
  title?: string;
  text?: string;
  image?: StaticImageData | string;
}

const Community1 = ({
  title = "Join our community",
  text = "of designers & developers",
  image = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
}: Community1Props) => {
  return (
    <section className="p-4">
      <div className="container max-w-4xl">
        <div className="flex flex-col items-center gap-5 text-center">
          <Image src={image} alt="logo" width={40} height={40} />
          <h2 className="text-3xl font-semibold">
            {title}
          </h2>
          <p className="p-1 pb-4">
            {text}
          </p>
          <div className="flex items-center gap-4">
            <Leaf />
            <BottleWine />
            <Lightbulb />
            <Recycle />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Community1 };
