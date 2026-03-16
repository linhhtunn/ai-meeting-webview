/**
 * Chức năng: biết user đang dùng ngôn ngữ nào để trả về bản dịch phù hợp.
 * Cấu hình này chạy phía server (server-side) trước khi render trang, giúp đảm bảo nội dung đã được dịch đúng ngôn ngữ ngay từ đầu.
 * next-intl sẽ tự động gọi hàm này trước mỗi request để lấy thông tin locale và bản dịch tương ứng.
 */

// hasLocale   : Hàm kiểm tra xem một locale có nằm trong danh sách được hỗ trợ không
import {hasLocale} from "next-intl";

// getRequestConfig : Hàm của next-intl/server dùng để cấu hình i18n theo từng request
//                    (chạy phía server, không phải client)
import {getRequestConfig} from "next-intl/server";

// Nhập cấu hình routing (danh sách locales, defaultLocale,...) đã định nghĩa sẵn
import {routing} from "./routing";

/**
 * Đây là cấu hình mặc định được next-intl gọi tự động trước mỗi request.
 * Tham số requestLocale: Promise chứa locale lấy từ URL của request hiện tại.
 */
export default getRequestConfig(async ({requestLocale}) => {
  // Giải quyết Promise để lấy giá trị locale thực từ URL (ví dụ: "vi" hoặc "en")
  const requested = await requestLocale;

  // Kiểm tra locale lấy được có hợp lệ không (có trong danh sách routing.locales không).
  // Nếu hợp lệ → dùng locale đó.
  // Nếu không hợp lệ (undefined, sai,...) → dùng ngôn ngữ mặc định (routing.defaultLocale).
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    // Trả về locale đã xác định để next-intl biết đang dùng ngôn ngữ nào
    locale,

    // Tải động file bản dịch JSON tương ứng với locale (ví dụ: messages/vi.json hoặc messages/en.json).
    // .default vì file JSON được import dưới dạng ES module default export.
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});

