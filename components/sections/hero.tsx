import Image from "next/image";

export function Hero() {
    return (
        <section className="pt-8 md:pt-12 lg:pt-16">
            <div className="wrap">
                <div className="f-row">
                    {/* Text */}
                    <div className="f-col text-center lg:text-left flex flex-col gap-4 md:gap-5">
                        <h1 className="h-title">
                            <span className="text-[#4D5DAB]">Trợ lý thông minh của </span>
                            <span>các Cuộc họp</span>
                        </h1>
                        <p className="h-sub max-w-[520px] mx-auto lg:mx-0">
                            <strong className="font-semibold text-black">AI Meeting Note</strong> - trợ lý cuộc họp thông minh. Từ các buổi thảo luận đến những cuộc họp và thuyết trình chuyên nghiệp, AI Meeting Note đảm bảo mọi nội dung trao đổi đều được ghi lại, phiên âm và tổng hợp thành tài liệu rõ ràng, dễ theo dõi.
                        </p>
                        <div className="flex justify-center lg:justify-start pt-1">
                            <button className="btn-p">
                                <span>Dùng thử miễn phí</span>
                                <Image src="/img/arrow-right.png" alt="" width={20} height={20} />
                            </button>
                        </div>
                    </div>
                    {/* Image */}
                    <div className="f-col flex justify-center lg:justify-end">
                        <Image
                            src="/img/introHeader.png"
                            alt="preview"
                            width={500}
                            height={500}
                            priority
                            className="w-full max-w-[320px] md:max-w-[400px] lg:max-w-[460px] xl:max-w-[500px] h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
