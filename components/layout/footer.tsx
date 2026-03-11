import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="pt-10 md:pt-14 lg:pt-20 pb-8">
            <div className="wrap-wide">
                {/* Link grid: mobile 2-col, desktop 3-col */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 lg:gap-16 mb-10 md:mb-14">
                    {/* Col 1 */}
                    <div>
                        <p className="font-semibold text-sm md:text-base mb-4">Tính năng và hỗ trợ</p>
                        <nav className="flex flex-col gap-3.5">
                            <Link href="#" className="text-[#666B6E] hover:text-black transition text-xs md:text-sm">Ghi âm cuộc họp</Link>
                            <Link href="#" className="text-[#666B6E] hover:text-black transition text-xs md:text-sm">Chuyển lời nói thành văn bản</Link>
                            <Link href="#" className="text-[#666B6E] hover:text-black transition text-xs md:text-sm">Tóm tắt Cuộc họp</Link>
                            <Link href="#" className="text-[#666B6E] hover:text-black transition text-xs md:text-sm">Quản lý Tổ chức</Link>
                                                 </nav>
                    </div>
                    <div>

                        <nav className="flex flex-col mt-9 gap-3.5">
                            <Link href="#" className="text-[#666B6E] hover:text-black transition text-xs md:text-sm">Quản lý Cuộc họp</Link>
                            <Link href="#" className="text-[#666B6E] hover:text-black transition text-xs md:text-sm">Phản hồi khách hàng</Link>
                            <Link href="#" className="text-[#666B6E] hover:text-black transition text-xs md:text-sm">Hỏi đáp</Link>
                        </nav>
                    </div>
                    {/* Col 2 */}
                    <div>
                        <p className="font-semibold text-sm md:text-base mb-4">Điều khoản & Chính sách</p>
                        <nav className="flex flex-col gap-2.5">
                            <Link href="#" className="text-[#666B6E] hover:text-black transition text-xs md:text-sm">Chính sách quyền riêng tư</Link>
                            <Link href="#" className="text-[#666B6E] hover:text-black transition text-xs md:text-sm">Điều khoản dịch vụ</Link>
                            <Link href="#" className="text-[#666B6E] hover:text-black transition text-xs md:text-sm">Nguyên tắc cộng đồng</Link>
                            <Link href="#" className="text-[#666B6E] hover:text-black transition text-xs md:text-sm">Chính sách mua gói</Link>
                            <Link href="#" className="text-[#666B6E] hover:text-black transition text-xs md:text-sm">Chính sách cookie</Link>
                        </nav>
                    </div>

                    {/* Col 3: App download */}
                    <div className="col-span-2 md:col-span-1">
                        <p className="font-semibold text-sm md:text-base mb-4">Download app</p>
   <Image src="/img/ggPlay.png" alt="download" width={440} height={100} className="w-35 h-auto object-contain rounded-lg" />
   <Image src="/img/appStore.png" alt="download" width={440} height={100} className="w-35 h-auto pt-3.5 object-contain rounded-lg" />
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-gray-200 pt-5 md:pt-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/img/logo.png"
                                alt="logo"
                                width={32}
                                height={32}
                                className="w-7 h-7 md:w-8 md:h-8"
                            />
                            <span className="font-bold text-sm md:text-base">AI Meeting Note</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Image
                                src="/img/copyright.png"
                                alt=""
                                width={16}
                                height={16}
                                className="w-3.5 h-3.5 md:w-4 md:h-4 opacity-60"
                            />
                            <span className="text-[#666B6E] text-xs md:text-sm">2025 All rights reserved.</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
