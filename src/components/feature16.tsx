import { LucideIcon, Timer, Zap, ZoomIn } from "lucide-react";

interface Feature {
  name: string;
  description: string[];
  icon: LucideIcon;
}

interface Feature16Props {
  title?: string;
  subtitle?: string | null;
  features?: Feature[];
  itemCountOnLg?: number;
}

const Feature16 = ({
  title = "Why Choose Us?",
  subtitle = "OUR VALUES",
  features = [
    {
      name: "Performance",
      description: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt beatae tenetur totam aut blanditis ipsa quaerat neque eaque, atque doloremque! Eligendi."],
      icon: Timer,
    },
    {
      name: "Quality",
      description: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt beatae tenetur totam aut blanditis ipsa quaerat neque eaque, atque doloremque! Eligendi."],
      icon: ZoomIn,
    },
    {
      name: "Innovation",
      description: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt beatae tenetur totam aut blanditis ipsa quaerat neque eaque, atque doloremque! Eligendi."],
      icon: Zap,
    },
  ],
  itemCountOnLg = 3,
}: Feature16Props) => {
  return (
    <section className="p-4">
      <div className="container max-w-6xl">
        {subtitle && <p className="mb-4 text-sm text-muted-foreground lg:text-base">
          {subtitle}
        </p>
        }
        <h2 className="text-3xl font-semibold lg:text-4xl">
          {title}
        </h2>
        <div className={`mt-14 grid gap-6 lg:mt-20 lg:grid-cols-${itemCountOnLg}`}>
          {features.map((feature, i) => (
            <div key={i} className="rounded-lg bg-gradient-to-br from-green-200 to-background p-5">
              <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background">
                <feature.icon className="size-6" />
              </span>
              <h3 className="mb-4 text-xl font-semibold">
                {feature.name}
              </h3>
              <ul className="leading-7 ps-6 list-decimal">
                {feature.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature16 };
