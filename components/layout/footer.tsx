import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="pt-10 md:pt-14 lg:pt-20 pb-8">
            <div className="wrap-wide">
                {/* Link grid: mobile 2-col, desktop 3-col */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 lg:gap-16 mb-10 md:mb-14">
                    {/* Col 1 */}
                    <div>
                        <p className="font-semibold text-sm md:text-base mb-4">Tính năng và hỗ trợ</p>
                        <nav className="flex flex-col gap-2.5">
                            <Link href="#" className="text-[#666B6E] hover:text-black transition text-xs md:text-sm">Ghi âm cuộc họp</Link>
                            <Link href="#" className="text-[#666B6E] hover:text-black transition text-xs md:text-sm">Chuyển lời nói thành văn bản</Link>
                            <Link href="#" className="text-[#666B6E] hover:text-black transition text-xs md:text-sm">Tóm tắt Cuộc họp</Link>
                            <Link href="#" className="text-[#666B6E] hover:text-black transition text-xs md:text-sm">Quản lý Tổ chức</Link>
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
                        <div className="flex flex-row md:flex-col gap-3">
                            <Link
                                href="#"
                                className="flex items-center gap-2.5 bg-black text-white rounded-xl px-4 py-2.5 w-fit hover:bg-gray-900 transition"
                            >
                                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0">
                                    <path d="M3.18 23.76a2.27 2.27 0 0 1-.72-.6L13.2 12 2.46.84A2.27 2.27 0 0 1 3.18.08l.06.06 12.36 11.5v.72L3.24 23.7l-.06.06zM1.56 1.32A2.27 2.27 0 0 0 1.2 2.4v19.2c0 .38.12.74.36 1.08L12.12 12 1.56 1.32zM16.2 13.68l-2.52-2.34-.48.48 2.52 2.34 3.12-1.8-.06-.06-2.58 1.38zM3.18.08l13.02 7.68-2.58 2.4.48.48 2.64-2.46L3.24.02 3.18.08z" />
                                </svg>
                                <div className="leading-tight">
                                    <p className="text-[9px] text-gray-400">GET IT ON</p>
                                    <p className="text-[13px] font-semibold">Google Play</p>
                                </div>
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-2.5 bg-black text-white rounded-xl px-4 py-2.5 w-fit hover:bg-gray-900 transition"
                            >
                                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                                <div className="leading-tight">
                                    <p className="text-[9px] text-gray-400">Download on the</p>
                                    <p className="text-[13px] font-semibold">App Store</p>
                                </div>
                            </Link>
                        </div>
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
