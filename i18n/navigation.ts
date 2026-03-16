/**
 * Chức năng: tạo link đúng ngôn ngữ dựa trên cấu hình routing đã định nghĩa, giúp việc điều hướng giữa các trang trong ứng dụng đa ngôn ngữ trở nên dễ dàng và nhất quán.
 * Cấu hình này sử dụng createNavigation của next-intl để tự động xử lý việc thêm tiền tố ngôn ngữ vào URL, giúp các component và hàm điều hướng khác trong ứng dụng không phải lo lắng về việc quản lý locale trong URL.
 * Ví dụ: khi dùng <Link href="/home">, nó sẽ tự động render ra /vi/home hoặc /en/home tùy theo ngôn ngữ hiện tại.
 */

// createNavigation : Hàm của next-intl tạo ra bộ công cụ điều hướng đa ngôn ngữ
import {createNavigation} from "next-intl/navigation";

// Nhập cấu hình routing (danh sách locales, defaultLocale, localePrefix,...)
import {routing} from "./routing";

/**
 * Destructure các tiện ích điều hướng từ createNavigation(routing).
 * Tất cả đều tự động thêm/xử lý tiền tố locale trong URL dựa trên routing config.
 *
 *  - Link        : Component thay thế <Link> của Next.js, tự động thêm locale vào href.
 *                  Ví dụ: <Link href="/home"> → render ra /vi/home hoặc /en/home.
 *
 *  - redirect    : Hàm server-side thay thế redirect() của Next.js, tự động gắn locale.
 *
 *  - usePathname : Hook thay thế usePathname() của Next.js, trả về pathname không có
 *                  tiền tố locale. Ví dụ: URL là /vi/home → trả về /home.
 *
 *  - useRouter   : Hook thay thế useRouter() của Next.js, các phương thức push/replace
 *                  tự động xử lý locale trong URL.
 *
 *  - getPathname : Hàm tiện ích (dùng phía server) để tạo pathname có locale từ
 *                  một đường dẫn nội bộ. Ví dụ: getPathname({locale: "en", href: "/home"}) → /en/home.
 */
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);

