import Image from "next/image";
import { useTranslations } from "next-intl";

export function CTABanner() {
  const tCta = useTranslations("cta");

  return (
    <section className="bg-[#17266B] py-14 md:py-20 lg:py-24">
      <div className="wrap text-center">
        <h2 className="h-title text-white max-w-5xl mx-auto mb-8 md:mb-10">
          {tCta("heading")}
        </h2>
        <button className="inline-flex items-center gap-3 rounded-[40px] px-6 py-3 bg-white text-[#203596] font-semibold text-sm md:text-base hover:bg-gray-50 transition-colors">
          <span>{tCta("button")}</span>
          <Image
            src="/img/muiTenTim.png"
            width={24}
            height={24}
            className="w-5 h-5 md:w-6 md:h-6"
            alt=""
          />
        </button>
      </div>
    </section>
  );
}

