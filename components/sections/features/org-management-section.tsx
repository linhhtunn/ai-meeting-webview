import Image from "next/image";
import { useTranslations } from "next-intl";

const ORG_POINTS = ["memberManagement", "centralStorage", "consistency"] as const;

interface TeamChipProps {
  readonly name: string;
  readonly avatars: ReadonlyArray<string>;
  readonly activeAvatar: string;
}

function TeamChip({ name, avatars, activeAvatar }: TeamChipProps) {
  return (
    <div className="flex items-center gap-4 rounded-xl ">
      <Image
        src={activeAvatar}
        alt="team"
        width={28}
        height={28}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="bg-[#F2F3FD] w-full h-[51.59px] rounded-[7.04px] pt-[10.06px] pr-[12.07px] pb-[10.06px] pl-[12.07px] rotate-0 opacity-100 ">
        <p className="text-[11px] font-semibold leading-tight">{name}</p>
        <div className="flex -space-x-1.5 mt-0.5">
          {avatars.map((src) => (
            <Image
              key={src}
              src={src}
              alt="member"
              width={14}
              height={14}
              className="w-4.5 h-4.5 rounded-full border border-white"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function OrgManagementSection() {
  const tOrg = useTranslations("features.org");
  const tOrgPoints = useTranslations("features.org.points");
  const tCommon = useTranslations("common");

  return (
    <section className="sec bg-[#F6F6FB]">
      <div className="wrap">
        <div className="f-row">
          <div className="f-col text-center lg:text-left order-1">
            <h2 className="h-title mb-4">
              <span>{tOrg("titlePrefix")}</span>
              <span className="text-[#203596]">{tOrg("titleHighlight")}</span>
            </h2>
            <p className="h-sub mb-5 max-w-[500px] mx-auto lg:mx-0">
              {tOrg("description")}
            </p>
            <ul className="flex flex-col gap-3 mb-6 text-left max-w-[500px] mx-auto lg:mx-0">
              {ORG_POINTS.map((pointKey) => (
                <li key={pointKey} className="flex items-start gap-3">
                  <Image
                    src="/img/dauTich.png"
                    alt="check"
                    width={28}
                    height={28}
                    className="w-6 h-6 md:w-7 md:h-7 shrink-0 mt-0.5"
                  />
                  <span className="h-sub">{tOrgPoints(pointKey)}</span>
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

          <div className="f-col order-2 max-w-[480px] w-full mx-auto lg:mx-0 flex flex-col items-center lg:block">
            <div className="origin-top scale-[0.70] sm:scale-[0.85] lg:scale-100 -mb-[30%] sm:-mb-[15%] lg:mb-0">
              <div className="w-[476px] bg-white rounded-2xl shadow-[4px_4px_8px_0_rgba(18,29,83,.12)] p-4 md:p-5 flex flex-col gap-3">
                <div className="relative rounded-xl p-4 bg-[linear-gradient(180deg,#7074CC_0%,#203596_100%)]">
                  <span className="absolute right-4 top-4 text-white text-[11px] bg-white/20 px-2.5 py-1 rounded-full whitespace-nowrap">
                    {tOrg("banner.status")}
                  </span>
                  <div className="pr-24">
                    <p className="text-white text-[11px] font-medium">
                      {tOrg("banner.title")}
                    </p>
                    <p className="mt-1 text-white font-bold text-[32px] leading-none">
                      5<span className="text-lg font-medium">/8</span>
                    </p>
                  </div>
                  <div className="mt-3 h-1.5 bg-white/30 rounded-full w-full overflow-hidden">
                    <div className="h-full w-[58%] bg-[#98A2CF] rounded-full" />
                  </div>
                  <p className="text-white/70 text-[11px] mt-2">
                    {tOrg("banner.description")}
                  </p>
                </div>
                <div className="bg-[#F2F3FD] rounded-xl p-3 flex items-center gap-3">
                  <Image
                    src="/img/congTyABC.png"
                    alt="company"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm">
                      {tOrg("meeting.company")}
                    </p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[#666B6E] text-xs">20/05/2024</span>
                      <span className="text-[#ccc] text-xs">·</span>
                      <span className="text-[#666B6E] text-xs">
                        {tOrg("meeting.members")}
                      </span>
                    </div>
                  </div>
                  <Image
                    src="/img/baChamDoc.png"
                    alt="more"
                    width={20}
                    height={20}
                    className="w-5 h-5 shrink-0 opacity-60"
                  />
                </div>
                <div className="flex items-center gap-2 px-0.5">
                  <Image
                    src="/img/address.png"
                    alt="address"
                    width={16}
                    height={16}
                    className="w-4 h-4 shrink-0 opacity-60"
                  />
                  <span className="text-[#666B6E] text-xs truncate">
                    {tOrg("meeting.address")}
                  </span>
                </div>
                <div className="relative left-[-37px] w-[530.1px] h-[24.2px]">
                  <div className="absolute flex gap-[12.07px] opacity-100">
                    <TeamChip
                      name={tOrg("teams.deployA")}
                      avatars={["/img/aoDen'.png", "/img/aoBe.png", "/img/aoTrang.png"]}
                      activeAvatar="/img/aoHong.png"
                    />
                    <TeamChip
                      name={tOrg("teams.q3Review")}
                      avatars={["/img/aoBe.png", "/img/aoTrang.png"]}
                      activeAvatar="/img/aoDen'.png"
                    />
                    <TeamChip
                      name={tOrg("teams.projectA")}
                      avatars={["/img/aoDen'.png", "/img/aoXam.png"]}
                      activeAvatar="/img/avt.png"
                    />
                  </div>
                </div>
                <div className="relative mt-10 w-[530.1px] h-[24.2px]">
                  <div className="absolute flex gap-[12.07px] opacity-100">
                    <TeamChip
                      name={tOrg("teams.reportB")}
                      avatars={["/img/user.png", "/img/aoTrang.png"]}
                      activeAvatar="/img/aoDen'.png"
                    />
                    <TeamChip
                      name={tOrg("teams.summaryDec")}
                      avatars={["/img/aoDen'.png", "/img/aoXam.png"]}
                      activeAvatar="/img/avt.png"
                    />
                  </div>
                </div>
                <Image
                  src="/img/trangThai.png"
                  alt="status"
                  width={440}
                  height={100}
                  className="w-full h-auto pt-10 object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
