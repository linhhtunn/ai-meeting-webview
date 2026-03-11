import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

const FAQ_KEYS = ["howItWorks", "accuracy", "minutes", "workspace"] as const;

export function FAQ() {
  const tFaq = useTranslations("faq");
  const tItems = useTranslations("faq.items");

  return (
    <section className="sec">
      <div className="wrap">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="h-title max-w-[700px] mx-auto">
            <span className="text-[#203596]">{tFaq("titleHighlight")}</span>
            <span>{tFaq("titleRest")}</span>
          </h2>
          <p className="h-sub mt-3 max-w-[660px] mx-auto">
            {tFaq("description")}
          </p>
        </div>

        <div className="max-w-[880px] mx-auto">
          <Accordion
            type="single"
            collapsible
            className="flex flex-col gap-3 py-4"
          >
            {FAQ_KEYS.map((key, index) => (
              <AccordionItem
                key={key}
                value={`item-${index}`}
                className="border-[1.5px] border-[#E5E7EB] rounded-xl overflow-hidden px-4 md:px-5 last:border-b-[1.5px]"
              >
                <AccordionTrigger className="hover:no-underline py-4 md:py-5 text-left font-semibold text-sm md:text-base lg:text-[17px] no-underline!">
                  {tItems(`${key}.question`)}
                </AccordionTrigger>
                <AccordionContent className="pb-4 md:pb-5 pt-0 text-[#666B6E] text-sm md:text-base">
                  {tItems(`${key}.answer`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

