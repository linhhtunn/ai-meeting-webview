import { useTranslations } from "next-intl";

const STAT_KEYS = ["meetings", "organizations", "timeSaved", "satisfaction"] as const;

export function Stats() {
  const tStats = useTranslations("stats.items");

  const stats: ReadonlyArray<{ readonly value: string; readonly key: (typeof STAT_KEYS)[number] }> =
    [
      { value: "12K", key: "meetings" },
      { value: "5K", key: "organizations" },
      { value: "34%", key: "timeSaved" },
      { value: "98%", key: "satisfaction" },
    ];

  return (
    <section className="py-8 md:py-10 lg:py-16">
      <div className="wrap">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {stats.map((stat) => (
            <div key={stat.key} className="stat">
              <span className="font-bold text-xl md:text-2xl text-[#4D5DAB]">
                {stat.value}
              </span>
              <span className="h-sub text-center mt-1.5 text-xs md:text-sm">
                {tStats(stat.key)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

