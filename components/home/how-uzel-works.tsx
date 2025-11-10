import { cn } from "@/lib/utils";
import { ShieldCheck, Coins, Globe2 } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    title: "Your Security, Our Priority",
    description: `Uzel employs industry-leading encryption for all data, both at rest and in transit. With robust fraud detection, secure APIs, and regular independent security audits, your funds and personal information are always
protected. We are committed to fostering trust and confidence in every transaction.`,
    icon: ShieldCheck,
  },
  {
    title: "Finance Made Simple",
    description: `Designed with you in mind, Uzel oﬀers an
intuitive and easy-to-navigate interface. Whether you're a financial novice or an experienced investor, managing your money has never been this straightforward and enjoyable.`,
    icon: Coins,
  },
  {
    title: "Break Down Financial Borders",
    description: `Experience financial freedom without
geographical limitations. Uzel's pan-global platform connects you to domestic and
international financial services, making cross-border transactions as easy as local
ones.`,
    icon: Globe2,
  },
];

const HowUzelWorks = () => {
  return (
    <section className="w-full max-w-[1352px] mx-auto py-[96px]">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <h2 className="text-3xl font-medium sm:leading-[64px] font-twklausanne tracking-tight text-semantic-text-strong-950 sm:text-4xl lg:text-5xl">
          How UZEL Works
        </h2>
        <p className="mt-4 max-w-2xl font-medium text-base text-[#525866] sm:text-base">
          Get started in minutes. Manage your money like a pro.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {steps.map(({ title, description, icon: Icon }, index) => (
          <article
            key={title}
            className="flex h-full flex-col justify-between aspect-[4/5] rounded-3xl rounded-br-[40px] rounded-bl-[64xl] border border-[#D5E2FF] bg-semantic-bg-weak-50 bg-[#EBF1FF] p-8 shadow-subtle transition hover:-translate-y-1 hover:shadow-card-button"
          >
            <div className="space-y-4 text-left">
              <h3 className="text-xl font-medium w-[200px] text-semantic-text-strong-950 sm:text-2xl">
                {title}
              </h3>
              <p
                className={cn(
                  "text-sm font-medium text-[#525866] sm:text-base",
                  index === 0 && "sm:text-sm"
                )}
              >
                {description}
              </p>
            </div>

            <div className="mt-5 flex items-center justify-center">
              <Image
                src={`/how-uzel-works/${index + 1}.svg`}
                alt={title}
                width={700}
                height={700}
                className=" aspect-square size-36 object-cover"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HowUzelWorks;
