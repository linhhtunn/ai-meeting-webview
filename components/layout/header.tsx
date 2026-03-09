import Link from "next/link";
import Image from "next/image";

export function Header() {
    return (
        <header className="bg-[linear-gradient(180deg,#EAEDFF_0%,#fff_84.53%)]">
            <div className="wrap-wide">
                {/* Nav bar */}
                <nav className="flex items-center justify-between h-14 md:h-[68px]">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/img/logo.png"
                            alt="logo"
                            width={32}
                            height={32}
                            className="w-8 h-8"
                        />
                        <span className="font-bold text-[15px] md:text-[17px] lg:text-lg">AI Meeting Note</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="p-0.5">
                            <Image
                                src="/img/imgLanguage.png"
                                alt="lang"
                                width={44}
                                height={44}
                                className="w-9 h-9 md:w-11 md:h-11"
                            />
                        </button>
                        <button className="btn-p text-sm px-4 py-2.5 md:px-5 md:py-3">
                            <Image
                                src="/img/imgUser.png"
                                alt=""
                                width={16}
                                height={16}
                                className="w-4 h-4 brightness-0 invert"
                            />
                            <span>Đăng nhập</span>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
}
