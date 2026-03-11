"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Testimonials() {
    const testimonials = [
        {
            name: "Nguyễn Văn A",
            role: "Giám đốc, Công ty ABC",
            initial: "/img/aoHong.png",
            rating: "5.0 ★★★★★",
            content: '"AI Meeting Note giúp chúng tôi tiết kiệm hơn 40% thời gian tổng hợp biên bản. Công cụ rất dễ dùng và chính xác."',
        },
        {
            name: "Trần Thị B",
            role: "Trưởng nhóm, Startup XYZ",
            initial: "/img/aoTrang.png",
            rating: "5.0 ★★★★★",
            content: '"Phiên âm tiếng Việt rất chính xác. Tóm tắt AI giúp cả nhóm nắm được nội dung ngay cả khi vắng mặt."',
        },
        {
            name: "Lê Minh C",
            role: "CEO, Doanh nghiệp DEF",
            initial: "/img/aoBe.png",
            rating: "4.0 ★★★★☆",
            content: '"Quản lý workspace cho cả tổ chức rất tiện. Chúng tôi dùng hằng ngày cho tất cả các buổi họp."',
        },
        {
            name: "Phạm Văn D",
            role: "Quản lý dự án, GHI Group",
            initial: "/img/aoHong.png",
            rating: "5.0 ★★★★★",
            content: '"Giao diện thân thiện, dễ sử dụng. Khả năng tóm tắt đa ngôn ngữ thực sự ấn tượng và hữu ích cho team quốc tế của chúng tôi."',
        },
        {
            name: "Hoàng Thị E",
            role: "Trợ lý hành chính, JKL Corp",
            initial: "/img/aoDen'.png",
            rating: "5.0 ★★★★★",
            content: '"Tôi không còn phải lo lắng về việc bỏ sót ý chính trong các cuộc họp kéo dài. AI làm việc này cực kỳ hiệu quả."',
        },
        {
            name: "Đỗ Minh F",
            role: "Trưởng phòng Nhân sự, MNO Ltd",
            initial: "/img/aoTrang.png",
            rating: "5.0 ★★★★★",
            content: '"Việc lưu trữ và tra cứu biên bản họp trở nên nhanh chóng hơn bao giờ hết. Một giải pháp tuyệt vời cho văn phòng số."',
        },
        {
            name: "Vũ Anh G",
            role: "Founder, Tech Vision",
            initial: "/img/aoBe.png",
            rating: "4.0 ★★★★☆",
            content: '"Hệ thống ghi âm chất lượng cao, lọc tạp âm tốt. Rất phù hợp cho các buổi họp online lẫn offline tại văn phòng."',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [itemsToShow, setItemsToShow] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setItemsToShow(3);
            } else if (window.innerWidth >= 768) {
                setItemsToShow(2);
            } else {
                setItemsToShow(1);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const totalSlides = testimonials.length;
    const maxIndex = Math.max(0, totalSlides - itemsToShow);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
    }, [maxIndex]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
    };

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide, isPaused]);

    return (
        <section className="sec bg-[#F6F6FB]">
            <div className="wrap">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="h-title">
                        <span className="text-[#203596]">Khách hàng nói gì </span>
                        <span>về chúng tôi?</span>
                    </h2>
                    <p className="h-sub mt-3 max-w-[560px] mx-auto">
                        Trải nghiệm thực tế từ các đội nhóm và doanh nghiệp đã tối ưu quy trình họp cùng chúng tôi.
                    </p>
                </div>

                <div
                    className="relative px-4 md:px-0"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Main Carousel Area */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
                        >
                            {testimonials.map((t, i) => (
                                <div
                                    key={i}
                                    className="shrink-0 px-2 md:px-3"
                                    style={{ width: `${100 / itemsToShow}%` }}
                                >
                                    <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 border border-gray-100 shadow-sm h-100 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center gap-3 md:gap-4 mb-4">
                                                {/* <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#EAEDFF] shrink-0 flex items-center justify-center font-bold text-[#203596] text-sm md:text-lg">
                                                    {t.initial}
                                                </div> */}
                                                <div className="relative w-12 h-12 shrink-0">
        <Image 
            src={t.initial} 
            alt={t.name}
            fill 
            className="rounded-full object-cover border border-gray-200" 
        />
    </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="font-semibold text-base md:text-lg lg:text-xl truncate">{t.name}</p>
                                                  
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 mb-4 shrink-0 border-b border-gray-200 pb-4 mb-4">
    {/* Phần số hiển thị màu đen */}
    <span className="text-black text-lg md:text-xl">
        {t.rating.split(' ')[0]} 
    </span>
    {/* Phần ngôi sao hiển thị màu vàng */}
    <span className="text-yellow-400 text-2xl md:text-3xl tracking-widest leading-none">
        {t.rating.split(' ')[1]}
    </span>
</div>
                                            <p className="text-base md:text-lg lg:text-xl text-[#444] leading-relaxed  line-clamp-4">
                                                {t.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-[-15px] md:left-[-40px] lg:left-[-60px] top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center text-[#203596] hover:bg-gray-50 transition-colors z-10 border border-gray-100"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-[-15px] md:right-[-40px] lg:right-[-60px] top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center text-[#203596] hover:bg-gray-50 transition-colors z-10 border border-gray-100"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Indicators */}
                    {/* <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={cn(
                                    "w-2.5 h-2.5 rounded-full transition-all",
                                    currentIndex === i ? "bg-[#203596] w-6" : "bg-gray-300"
                                )}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div> */}
                </div>
            </div>
        </section>
    );
}
