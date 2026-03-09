import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
    const faqs = [
        {
            question: "AI Meeting Note hoạt động như thế nào?",
            answer: "AI Meeting Note ghi âm cuộc họp, tự động phiên âm lời nói thành văn bản và tạo bản tóm tắt nội dung chính, quyết định và các việc cần thực hiện sau cuộc họp.",
        },
        {
            question: "Độ chính xác của phiên âm AI là bao nhiêu?",
            answer: "AI Meeting Note sử dụng công nghệ nhận diện giọng nói tiên tiến nhất, đạt độ chính xác lên tới 98% cho tiếng Việt và hỗ trợ nhiều ngôn ngữ khác nhau.",
        },
        {
            question: "AI Meeting Note có tự động tạo biên bản cuộc họp không?",
            answer: "Có, hệ thống sẽ tự động phân loại các mục trong biên bản như: mục tiêu cuộc họp, các điểm thảo luận chính, quyết định đã được thông qua và danh sách công việc cần làm.",
        },
        {
            question: "Tôi có thể tạo tổ chức và quản lý thành viên không?",
            answer: "Hoàn toàn được. AI Meeting Note cung cấp tính năng Workspace dành cho doanh nghiệp, cho phép bạn tạo tổ chức, thêm bớt thành viên và phân quyền truy cập vào các cuộc họp khác nhau.",
        },
    ];

    return (
        <section className="sec">
            <div className="wrap">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="h-title max-w-[700px] mx-auto">
                        <span className="text-[#203596]">Câu hỏi thường gặp </span>
                        <span>về AI Meeting Note</span>
                    </h2>
                    <p className="h-sub mt-3 max-w-[660px] mx-auto">
                        Hiểu rõ cách AI Meeting Note hoạt động giúp bạn tiết kiệm thời gian, giảm tải công việc ghi chép thủ công và nâng cao hiệu quả quản lý cuộc họp.
                    </p>
                </div>

                <div className="max-w-[880px] mx-auto">
                    <Accordion type="single" collapsible className="flex flex-col gap-3 py-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="border-[1.5px] border-[#E5E7EB] rounded-xl overflow-hidden px-4 md:px-5 last:border-b-[1.5px]">
                                <AccordionTrigger className="hover:no-underline py-4 md:py-5 text-left font-semibold text-sm md:text-base lg:text-[17px] no-underline!">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="pb-4 md:pb-5 pt-0 text-[#666B6E] text-sm md:text-base">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
