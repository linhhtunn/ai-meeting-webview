/**
 * Chức năng: khai báo có mấy ngôn ngữ, ngôn ngữ mặc định là gì, và cách hiển thị ngôn ngữ trong URL như thế nào.
 */

// Nhập hàm defineRouting từ thư viện next-intl để cấu hình routing đa ngôn ngữ
import {defineRouting} from "next-intl/routing";

/**
 * routing: Đối tượng cấu hình routing được export ra để dùng chung toàn ứng dụng.
 *
 * Các thuộc tính cấu hình:
 *  - locales       : Danh sách các ngôn ngữ được hỗ trợ. Ở đây gồm "vi" (Tiếng Việt)
 *                    và "en" (Tiếng Anh).
 *  - defaultLocale : Ngôn ngữ mặc định khi người dùng truy cập mà không chỉ định locale.
 *                    Ở đây là "vi" (Tiếng Việt).
 *  - localePrefix  : Cách thêm tiền tố ngôn ngữ vào URL.
 *                    "always" → luôn hiển thị locale trong URL.
 *                    Ví dụ: /vi/trang-chu hoặc /en/home (kể cả ngôn ngữ mặc định).
 */
export const routing = defineRouting({
  locales: ["vi", "en"],
  defaultLocale: "vi",
  localePrefix: "always",
});

