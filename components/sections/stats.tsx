export function Stats() {
    const stats = [
        { value: "12K", label: "Cuộc họp diễn ra" },
        { value: "5K", label: "Tổ chức sử dụng" },
        { value: "34%", label: "Thời gian tổng hợp biên bản được tiết kiệm" },
        { value: "98%", label: "Người dùng hài lòng" },
    ];

    return (
        <section className="py-8 md:py-10 lg:py-16">
            <div className="wrap">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat">
                            <span className="font-bold text-xl md:text-2xl text-[#4D5DAB]">{stat.value}</span>
                            <span className="h-sub text-center mt-1.5 text-xs md:text-sm">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
