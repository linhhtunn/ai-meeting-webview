import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function Footer() {
  const tFooter = useTranslations("footer");
  const tLinks = useTranslations("footer.links");

  return (
    <footer className="pt-10 md:pt-14 lg:pt-20 pb-8">
      <div className="wrap-wide">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-14 lg:gap-16 mb-10 md:mb-14">
          <div className="col-span-1 md:col-span-2">
            <p className="font-semibold text-[15px] md:text-base mb-4 text-[#111827]">
              {tFooter("featuresSupport")}
            </p>
            <div className="grid grid-cols-2 gap-x-4">
              <div className="flex flex-col gap-3.5">
                <Link
                  href="#"
                  className="text-[#666B6E] hover:text-black transition text-[13px] sm:text-sm"
                >
                  {tLinks("recordMeeting")}
                </Link>
                <Link
                  href="#"
                  className="text-[#666B6E] hover:text-black transition text-[13px] sm:text-sm"
                >
                  {tLinks("speechToText")}
                </Link>
                <Link
                  href="#"
                  className="text-[#666B6E] hover:text-black transition text-[13px] sm:text-sm"
                >
                  {tLinks("meetingSummary")}
                </Link>
                <Link
                  href="#"
                  className="text-[#666B6E] hover:text-black transition text-[13px] sm:text-sm"
                >
                  {tLinks("orgManagement")}
                </Link>
              </div>
              <div className="flex flex-col gap-3.5">
                <Link
                  href="#"
                  className="text-[#666B6E] hover:text-black transition text-[13px] sm:text-sm"
                >
                  {tLinks("meetingManagement")}
                </Link>
                <Link
                  href="#"
                  className="text-[#666B6E] hover:text-black transition text-[13px] sm:text-sm"
                >
                  {tLinks("customerFeedback")}
                </Link>
                <Link
                  href="#"
                  className="text-[#666B6E] hover:text-black transition text-[13px] sm:text-sm"
                >
                  {tLinks("faq")}
                </Link>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-1">
            <p className="font-semibold text-[15px] md:text-base mb-4 text-[#111827]">
              {tFooter("termsPolicies")}
            </p>
            <nav className="flex flex-col gap-3.5">
              <Link
                href="https://teraxel.asia/privacy-policy"
                className="text-[#666B6E] hover:text-black transition text-[13px] sm:text-sm"
              >
                {tLinks("privacyPolicy")}
              </Link>
              <Link
                href="https://teraxel.asia/terms-of-service"
                className="text-[#666B6E] hover:text-black transition text-[13px] sm:text-sm"
              >
                {tLinks("termsOfService")}
              </Link>
              <Link
                href="#"
                className="text-[#666B6E] hover:text-black transition text-[13px] sm:text-sm"
              >
                {tLinks("communityGuidelines")}
              </Link>
              <Link
                href="#"
                className="text-[#666B6E] hover:text-black transition text-[13px] sm:text-sm"
              >
                {tLinks("purchasePolicy")}
              </Link>
              <Link
                href="#"
                className="text-[#666B6E] hover:text-black transition text-[13px] sm:text-sm"
              >
                {tLinks("cookiePolicy")}
              </Link>
            </nav>
          </div>

          <div className="col-span-1 md:col-span-1">
            <p className="font-semibold text-[15px] md:text-base mb-4 text-[#111827]">
              {tFooter("downloadApp")}
            </p>
            <div className="flex flex-row md:flex-col gap-3.5">
              <Image
                src="/img/ggPlay.png"
                alt="download"
                width={440}
                height={130}
                className="w-[140px] md:w-35 h-auto object-contain rounded-sm"
              />
              <Image
                src="/img/appStore.png"
                alt="download"
                width={440}
                height={130}
                className="w-[140px] md:w-35 h-auto object-contain rounded-sm"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-[#F2F3F5] pt-5 md:pt-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Image
                src="/img/logo.png"
                alt="logo"
                width={32}
                height={32}
                className="w-8 h-8 rounded-lg"
              />
              <span className="font-bold text-[15px] md:text-base text-[#111827]">
                AI Meeting Note
              </span>
            </div>
            <div className="flex items-center gap-1.5 opacity-90">
              <Image
                src="/img/copyright.png"
                alt="copyright"
                width={16}
                height={16}
                className="w-3.5 h-3.5 opacity-60"
              />
              <span className="text-[#666B6E] text-[13px] sm:text-sm font-normal">
                {tFooter("copyright")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

