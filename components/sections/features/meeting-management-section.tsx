import Image from "next/image";
import { useTranslations } from "next-intl";

const MEETING_POINTS = ["weeklyOverview", "statusTracking", "storage"] as const;

export function MeetingManagementSection() {
  const tMeeting = useTranslations("features.meeting");
  const tMeetingPoints = useTranslations("features.meeting.points");
  const tCommon = useTranslations("common");

  return (
    <section className="sec">
      <div className="wrap">
        <div className="f-row rev gap-8 md:gap-12 lg:gap-16">
          <div className="f-col order-2 max-w-[480px] w-full mx-auto lg:mx-0">
            <div className="relative bg-linear-to-b from-[#F4F5FB] to-[#E2E6F5] rounded-2xl aspect-square scale-[0.85] lg:scale-100 -mt-[10%] lg:mt-0 mb-[5%] lg:mb-0">
              <Image
                src="/img/thongKe.png"
                alt="stats 0"
                width={400}
                height={400}
                className="absolute top-[10%] left-[8%] w-[80%] h-auto object-contain"
              />
              <Image
                src="/img/thongKe1.png"
                alt="stats 1"
                width={400}
                height={400}
                className="absolute top-[42%] left-[-32px] w-[74%] h-auto object-contain z-10 opacity-100"
              />
              <Image
                src="/img/thongKe2.png"
                alt="stats 2"
                width={400}
                height={400}
                className="absolute top-[66%] left-[150px] w-[66%] h-auto object-contain z-20"
              />
            </div>
          </div>

          <div className="f-col order-1  text-center lg:text-left">
            <h2 className="h-title mb-4">
              <span className="text-[#203596]">
                {tMeeting("titleHighlight")}
              </span>
              <span>{tMeeting("titleRest")}</span>
            </h2>
            <p className="h-sub mb-5 max-w-[600px] mx-auto lg:mx-0">
              {tMeeting("description")}
            </p>
            <ul className="flex flex-col gap-3 mb-6 text-left max-w-[600px] mx-auto lg:mx-0">
              {MEETING_POINTS.map((pointKey) => (
                <li key={pointKey} className="flex items-start gap-3">
                  <Image
                    src="/img/dauTich.png"
                    alt="check"
                    width={28}
                    height={28}
                    className="w-6 h-6 md:w-7 md:h-7 shrink-0 mt-0.5"
                  />
                  <span className="h-sub">{tMeetingPoints(pointKey)}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center lg:justify-start">
              <button className="btn-p">
                <span>{tCommon("freeTrial")}</span>
                <Image src="/img/arrow-right.png" alt="" width={20} height={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
