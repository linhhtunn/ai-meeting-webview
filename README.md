AI Meeting Webview

Một nền tảng Webview hỗ trợ trải nghiệm họp trực tuyến tích hợp AI, được xây dựng với Next.js nhằm tối ưu hiệu năng, khả năng mở rộng và trải nghiệm người dùng hiện đại.

🔗 Trải nghiệm dự án

Repository: https://github.com/linhhtunn/ai-meeting-webview
Tech Stack: Next.js + React + TypeScript + Tailwind CSS

🎨 Tổng Quan Giao Diện

Dự án được thiết kế với mục tiêu cung cấp giao diện webview nhẹ, nhanh và thân thiện với người dùng cho các hệ thống họp trực tuyến tích hợp AI.

Giao diện tập trung vào:

Trải nghiệm người dùng mượt mà

Khả năng hiển thị đa ngôn ngữ (i18n)

Thiết kế tối giản nhưng hiện đại

Tối ưu hiệu năng khi chạy trên Webview

Ngoài ra, hệ thống còn hỗ trợ quản lý nội dung hiển thị, điều hướng thông minh và khả năng mở rộng cho nhiều tính năng AI trong tương lai.

🛠 Công Nghệ Sử Dụng

Framework

Next.js (App Router)

React.js

Ngôn ngữ

TypeScript

Styling

Tailwind CSS

Internationalization

next-intl (đa ngôn ngữ)

Architecture

Component-based architecture

Modular folder structure

Server & Client Components của Next.js

📂 Cấu Trúc Dự Án
app/
components/
i18n/
messages/
public/
lib/

Giải thích:

app/ – Routing và layout chính của Next.js

components/ – Các UI components tái sử dụng

i18n/ – Cấu hình đa ngôn ngữ

messages/ – File nội dung cho từng ngôn ngữ

public/ – Tài nguyên tĩnh (images, icons…)

lib/ – Các utility functions và logic dùng chung

🌍 Hỗ Trợ Đa Ngôn Ngữ (i18n)

Dự án sử dụng next-intl để hỗ trợ nhiều ngôn ngữ.

Ví dụ cấu trúc:

messages/
 ├ en.json
 └ vi.json

URL sẽ có dạng:

/en
/vi

Giúp hệ thống hiển thị nội dung phù hợp với ngôn ngữ của người dùng.

📸 Hình Ảnh Demo
1. Trang chính

Main Interface

2. Giao diện Webview

Webview Interface

3. Hỗ trợ đa ngôn ngữ

Internationalization

4. Component UI

Reusable Components

5. Responsive Layout

Responsive Design
