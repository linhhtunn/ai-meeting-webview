import Image from "next/image";

export function SummarySection() {
    return (
        <section className="sec">
            <div className="wrap">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="h-title">
                        <span className="text-[#203596]">Ghi âm và tóm tắt</span>
                        <span> các Cuộc họp</span>
                    </h2>
                    <p className="h-sub mt-3 max-w-[580px] mx-auto">
                        Từ ghi âm đến tóm tắt thông minh, AI tự động tổng hợp, tóm tắt những nội dung để bạn không bỏ lỡ bất kỳ thông tin quan trọng nào.
                    </p>
                </div>
                <Image
                    src="/img/ghiAmVaTomTat.png"
                    alt="Ghi âm và tóm tắt"
                    width={1176}
                    height={600}
                    className="w-full h-auto object-contain rounded-xl"
                />
            </div>
        </section>
    );
}

export function OrgManagementSection() {
    const points = [
        "Quản lý thành viên cuộc họp",
        "Lưu trữ cuộc họp, biên bản và ghi chú tập trung",
        "Hệ thống nhất quán, tiết kiệm thời gian và loại bỏ sự phân mảnh",
    ];

    return (
        <section className="sec bg-[#F6F6FB]">
            <div className="wrap">
                <div className="f-row">
                    {/* Text */}
                    <div className="f-col text-center lg:text-left order-2 lg:order-1">
                        <h2 className="h-title mb-4">
                            <span>Hệ thống </span>
                            <span className="text-[#203596]">quản lý Tổ chức</span>
                        </h2>
                        <p className="h-sub mb-5 max-w-[500px] mx-auto lg:mx-0">
                            Một workspace tập trung để quản lý thành viên, cuộc họp và dữ liệu trong cùng một hệ thống, dễ dàng chia sẻ nội dung cuộc họp.
                        </p>
                        <ul className="flex flex-col gap-3 mb-6 text-left max-w-[500px] mx-auto lg:mx-0">
                            {points.map((point, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Image src="/img/dauTich.png" alt="check" width={28} height={28} className="w-6 h-6 md:w-7 md:h-7 shrink-0 mt-0.5" />
                                    <span className="h-sub">{point}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-center lg:justify-start">
                            <button className="btn-p">
                                <span>Dùng thử miễn phí</span>
                                <Image src="/img/arrow-right.png" alt="" width={20} height={20} />
                            </button>
                        </div>
                    </div>

                    {/* Card mockup */}
                    <div className="f-col order-1 lg:order-2 max-w-[480px] w-full mx-auto lg:mx-0">
                        <div className=" w-[476px] bg-white rounded-2xl shadow-[4px_4px_8px_0_rgba(18,29,83,.12)] p-4 md:p-5 flex flex-col gap-3">
                            {/* Banner gradient */}
                            <div className="rounded-xl p-4 bg-[linear-gradient(180deg,#7074CC_0%,#203596_100%)] flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-white text-[11px] font-medium mb-1">Cuộc họp trong tuần</p>
                                    <p className="text-white font-bold text-[32px] leading-none">
                                        5<span className="text-lg font-medium">/8</span>
                                    </p>
                                    <p className="text-white/70 text-[11px] mt-1.5">Bạn có 8 cuộc họp trong tuần này.</p>
                                </div>
                                <span className="text-white text-[11px] bg-white/20 px-2.5 py-1 rounded-full whitespace-nowrap mt-1">
                                    Đã diễn ra
                                </span>
                            </div>
                            {/* Progress */}
                            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full w-[58%] bg-[#98A2CF] rounded-full"></div>
                            </div>
                            {/* Meeting item */}
                            <div className="bg-[#F2F3FD] rounded-xl p-3 flex items-center gap-3">
                                <Image src="/img/congTyABC.png" alt="company" width={40} height={40} className="w-10 h-10 rounded-full object-cover shrink-0" />
                                <div className="flex-1 min-w-0">
                                    <p className="font-semibold text-sm">Công ty ABC</p>
                                    <div className="flex items-center gap-1.5 mt-0.5">
                                        <span className="text-[#666B6E] text-xs">20/05/2024</span>
                                        <span className="text-[#ccc] text-xs">·</span>
                                        <span className="text-[#666B6E] text-xs">08 thành viên</span>
                                    </div>
                                </div>
                                <Image src="/img/baChamDoc.png" alt="more" width={20} height={20} className="w-5 h-5 shrink-0 opacity-60" />
                            </div>
                            {/* Address */}
                            <div className="flex items-center gap-2 px-0.5">
                                <Image src="/img/address.png" alt="address" width={16} height={16} className="w-4 h-4 shrink-0 opacity-60" />
                                <span className="text-[#666B6E] text-xs truncate">Số 15, ngõ 4, Cầu Giấy, Hà Nội</span>
                            </div>
                            {/* Scrollable team chips */}
                            <div className ="relative left-[-37px] w-[530.1px] h-[24.2px]">
                            <div className="absolute flex gap-[12.07px] opacity-100 ">
                                <TeamChip name="Triển khai A" avatars={["/img/aoDen'.png", "/img/aoBe.png", "/img/aoTrang.png"]} activeAvatar="/img/aoHong.png" />
                                <TeamChip name="Review tiến độ quý 3" avatars={["/img/aoBe.png", "/img/aoTrang.png"]} activeAvatar="/img/aoDen'.png" />
                                <TeamChip name="Tiến độ dự án A" avatars={["/img/aoDen'.png", "/img/aoXam.png"]} activeAvatar="/img/avt.png" />
                           </div>
                            </div>
                            <div className ="relative mt-10 w-[530.1px] h-[24.2px]">
                            <div className="absolute flex gap-[12.07px] opacity-100 ">
                                <TeamChip name="Báo cáo dự án B" avatars={["/img/user.png", "/img/aoTrang.png"]} activeAvatar="/img/aoDen'.png" />
                                <TeamChip name="Họp Tổng kết tháng 12" avatars={["/img/aoDen'.png", "/img/aoXam.png"]} activeAvatar="/img/avt.png" />
                            </div>
                            </div>
                            <Image src="/img/trangThai.png" alt="status" width={440} height={100} className="w-full h-auto pt-10 object-contain rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function TeamChip({ name, avatars, activeAvatar }: { name: string; avatars: string[]; activeAvatar: string }) {
    return (
        <div className="flex items-center gap-4 rounded-xl ">
            <Image src={activeAvatar} alt="team" width={28} height={28} className="w-10 h-10 rounded-full object-cover" />
            <div  className="bg-[#F2F3FD] w-full h-[51.59px] rounded-[7.04px] pt-[10.06px] pr-[12.07px] pb-[10.06px] pl-[12.07px] rotate-0 opacity-100 " >
                <p className="text-[11px]  font-semibold leading-tight">{name}</p>
                <div className="flex -space-x-1.5 mt-0.5">
                    {avatars.map((src, i) => (
                        <Image key={i} src={src} alt="member" width={14} height={14} className="w-4.5 h-4.5 rounded-full border border-white" />
                    ))}
                </div>
            </div>
        </div>
    );
}

export function MeetingManagementSection() {
    const points = [
        "Bảng tổng hợp số lượng cuộc họp đã tham gia theo tuần",
        "Theo dõi trạng thái các cuộc họp (đã diễn ra, đang diễn ra, sắp tới)",
        "Lưu trữ, nghe lại ghi âm và xem tóm tắt cuộc họp",
    ];

    return (
        <section className="sec">
            <div className="wrap">
                <div className="f-row rev gap-50">
                    {/* Image panel */}
                    <div className="f-col order-2 max-w-[480px] w-full mx-auto  lg:mx-0">
                        <div className="relative bg-linear-to-b from-[#F4F5FB] to-[#E2E6F5] rounded-2xl aspect-square">
                            <Image src="/img/thongKe.png" alt="stats 0" width={400} height={400} className="absolute top-[10%] left-[8%] w-[80%] h-auto object-contain" />
                            <Image src="/img/thongKe1.png" alt="stats 1" width={400} height={400} className="absolute top-[42%] left-[-32px] w-[76%] h-auto object-contain z-10 opacity-100" />
                            <Image src="/img/thongKe2.png" alt="stats 2" width={400} height={400} className="absolute top-[66%] left-[150px] w-[76%] h-auto object-contain z-20" />
                        </div>
                    </div>

                    {/* Text */}
                    <div className="f-col order-1  text-center lg:text-left">
                        <h2 className="h-title mb-4">
                            <span className="text-[#203596]">Quản lý và tổng hợp</span>
                            <span> cuộc họp</span>
                        </h2>
                        <p className="h-sub mb-5 max-w-[600px] mx-auto lg:mx-0">
                            Quản lý tập trung toàn bộ cuộc họp với khả năng nghe lại ghi âm, xem bản tóm tắt AI và theo dõi trạng thái từng cuộc họp, giúp bạn nắm bắt thông tin nhanh chóng và hiệu quả.
                        </p>
                        <ul className="flex flex-col gap-3 mb-6 text-left max-w-[600px] mx-auto lg:mx-0">
                            {points.map((point, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Image src="/img/dauTich.png" alt="check" width={28} height={28} className="w-6 h-6 md:w-7 md:h-7 shrink-0 mt-0.5" />
                                    <span className="h-sub  ">{point}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-center lg:justify-start">
                            <button className="btn-p">
                                <span>Dùng thử miễn phí</span>
                                <Image src="/img/arrow-right.png" alt="" width={20} height={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
