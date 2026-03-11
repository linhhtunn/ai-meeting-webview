import Image from "next/image";
import { useTranslations } from "next-intl";

export function Hero() {
  const tHero = useTranslations("hero");
  const tCommon = useTranslations("common");

  return (
    <section className="pt-8 md:pt-12 lg:pt-16">
      <div className="wrap">
        <div className="f-row">
          <div className="f-col text-center lg:text-left flex flex-col gap-4 md:gap-5">
            <h1 className="h-title">
              <span className="text-[#4D5DAB]">{tHero("titleHighlight")}</span>
              <span>{tHero("titleRest")}</span>
            </h1>
            <p className="h-sub max-w-[520px] mx-auto lg:mx-0">
              <strong className="font-semibold text-black">
                {tCommon("appName")}
              </strong>{" "}
              - {tHero("description")}
            </p>
            <div className="flex justify-center lg:justify-start pt-1">
              <button className="btn-p">
                <span>{tHero("cta")}</span>
                <Image
                  src="/img/arrow-right.png"
                  alt=""
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>
          <div className="f-col flex justify-center lg:justify-end">
            <Image
              src="/img/introHeader.png"
              alt="preview"
              width={500}
              height={500}
              priority
              className="w-full max-w-[320px] md:max-w-[400px] lg:max-w-[460px] xl:max-w-[500px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

