import Image from "next/image";
import { useTranslations } from "next-intl";

type SummaryCardId = "record" | "speechToText" | "summary";

const SUMMARY_CARDS: ReadonlyArray<{
  readonly id: SummaryCardId;
  readonly iconSrc: string;
  readonly imageSrc: string;
}> = [
  { id: "record", iconSrc: "/features/icon1.svg", imageSrc: "/features/feat1.png" },
  { id: "speechToText", iconSrc: "/features/icon2.svg", imageSrc: "/features/feat2.png" },
  { id: "summary", iconSrc: "/features/icon3.svg", imageSrc: "/features/feat3.png" },
];

export function SummarySection() {
  const tSummary = useTranslations("features.summary");
  const tCards = useTranslations("features.summary.cards");

  return (
    <section className="sec">
      <div className="wrap">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="h-title">
            <span className="text-[#203596]">{tSummary("titleHighlighted")}</span>
            <span> {tSummary("titleRest")}</span>
          </h2>
          <p className="h-sub mt-3 max-w-[580px] mx-auto">{tSummary("description")}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {SUMMARY_CARDS.map((card) => (
            <div
              key={card.id}
              className="flex flex-col rounded-2xl border border-[#E5E7F2] bg-white p-5 md:p-6 shadow-[0_10px_30px_rgba(18,29,83,.08)] md:min-h-[560px]"
            >
              <div className="rounded-xl overflow-hidden">
                <Image
                  src={card.imageSrc}
                  alt={tCards(`${card.id}.imageAlt`)}
                  width={520}
                  height={320}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="mt-4 flex items-center gap-3">
                <Image
                  src={card.iconSrc}
                  alt=""
                  width={48}
                  height={48}
                  className="w-10 h-10 md:w-12 md:h-12"
                />
              </div>
              <h3 className="font-semibold text-md lg:text-lg pt-4 pb-2 text-black">
                {tCards(`${card.id}.title`)}
              </h3>
              <p className="mt-2 h-sub">{tCards(`${card.id}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
