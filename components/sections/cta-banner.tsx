import Image from "next/image";

export function CTABanner() {
    return (
        <section className="bg-[#17266B] py-14 md:py-20 lg:py-24">
            <div className="wrap text-center">
                <h2 className="h-title text-white max-w-5xl mx-auto mb-8 md:mb-10">
                    Bắt đầu quản lý cuộc họp thông minh ngay hôm nay
                </h2>
                <button className="inline-flex items-center gap-3 rounded-[40px] px-6 py-3 bg-white text-[#203596] font-semibold text-sm md:text-base hover:bg-gray-50 transition-colors">
                    <span>Dùng thử miễn phí</span>
                    <Image src="/img/muiTenTim.png" width={24} height={24} className="w-5 h-5 md:w-6 md:h-6" alt="" />
                </button>
            </div>
        </section>
    );
}
