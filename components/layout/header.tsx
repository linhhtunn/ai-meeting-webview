"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer"

import { Menu, X } from "lucide-react"

export function MobileSidebar({ lang, setLang }: { lang: string; setLang: (lang: string) => void }) {
  return (
    <Drawer direction="right">

      {/* Button mở sidebar */}
      <DrawerTrigger asChild>
        <button className="p-2">
          <Menu size={24} />
        </button>
      </DrawerTrigger>

      {/* Sidebar */}
      <DrawerContent className="        h-[100dvh]
        data-[vaul-drawer-direction=right]:w-screen
        data-[vaul-drawer-direction=right]:max-w-none
        rounded-none
        ">

        {/* Header */}
  <div className="p-3 flex items-center gap-2">
            <Image
              src="/img/logo.png"
              alt="logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="font-bold text-[15px] md:text-[17px] lg:text-lg">AI Meeting Note</span>
           
            {/* ---  MENU NGÔN NGỮ --- */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="outline-none hover:opacity-80 transition-opacity">
                  <Image
                    src="/img/imgLanguage.png"
                    alt="Chọn ngôn ngữ"
                    width={44}
                    height={44}
                    className="w-9 h-9 md:w-11 md:h-11"
                  />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-56 bg-white p-1.5 shadow-2xl rounded-xl border border-slate-200">
                
                {/* Lựa chọn Tiếng Việt */}
                <DropdownMenuItem 
                  onClick={() => setLang("vi")}
                  className="flex items-center justify-between p-3 cursor-pointer hover:bg-slate-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full overflow-hidden border border-slate-100">
                      <Image src="/img/vn.png" alt="VN" width={24} height={24} className="object-cover" />
                    </div>
                    <span className="text-[15px] font-medium text-slate-700">Tiếng Việt</span>
                  </div>
                  {/* Nút radio xanh nếu đang chọn vi */}
                  {lang === "vi" && (
                    <Image src="/img/Circle check.png" alt="VN" width={20} height={20} className="object-cover" />
                  )}
                </DropdownMenuItem>

                {/* Lựa chọn Tiếng Anh */}
                <DropdownMenuItem 
                  onClick={() => setLang("en")}
                  className="flex items-center justify-between p-3 cursor-pointer hover:bg-slate-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full overflow-hidden border border-slate-100">
                      <Image src="/img/us.png" alt="US" width={24} height={24} className="object-cover" />
                    </div>
                    <span className="text-[15px] font-medium text-slate-700">Tiếng Anh</span>
                  </div>
                  {/* Nút radio xanh nếu đang chọn en */}
                  {lang === "en" && (
                     <Image src="/img/Circle check.png" alt="VN" width={20} height={20} className="object-cover" />                  )}
                </DropdownMenuItem>

              </DropdownMenuContent>
            </DropdownMenu>
  <DrawerClose asChild>
    <button className="p-2 pl-3">
      <X size={22}/>
    </button>
  </DrawerClose>
</div>
        {/* Buttons */}
        <div className="px-4 space-y-3">

          <Button variant="outline" className="w-full">
            Đăng nhập
          </Button>

          <Button className="w-full">
            Dùng thử miễn phí →
          </Button>

        </div>

        {/* Menu */}
        <div className="mt-6 px-4 space-y-4 text-gray-600">

          <p>Ghi âm & tóm tắt cuộc họp</p>
          <p>Hệ thống quản lý Tổ chức</p>
          <p>Quản lý Cuộc họp</p>
          <p>Phản hồi khách hàng</p>
          <p>Hỏi đáp</p>

        </div>

      </DrawerContent>
    </Drawer>
  )
}

export function Header() {

  const [lang, setLang] = React.useState("vi")

  return (
    <header className="border-b border-slate-100">
      <div className="wrap-wide">
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

     
          <div className="flex items-center gap-3">


            
            {/* ---  MENU NGÔN NGỮ --- */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="outline-none hover:opacity-80 transition-opacity">
                  <Image
                    src="/img/imgLanguage.png"
                    alt="Chọn ngôn ngữ"
                    width={44}
                    height={44}
                    className="w-9 h-9 md:w-11 md:h-11"
                  />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-56 bg-white p-1.5 shadow-2xl rounded-xl border border-slate-200">
                
                {/* Lựa chọn Tiếng Việt */}
                <DropdownMenuItem 
                  onClick={() => setLang("vi")}
                  className="flex items-center justify-between p-3 cursor-pointer hover:bg-slate-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full overflow-hidden border border-slate-100">
                      <Image src="/img/vn.png" alt="VN" width={24} height={24} className="object-cover" />
                    </div>
                    <span className="text-[15px] font-medium text-slate-700">Tiếng Việt</span>
                  </div>
                  {/* Nút radio xanh nếu đang chọn vi */}
                  {lang === "vi" && (
                    <Image src="/img/Circle check.png" alt="VN" width={20} height={20} className="object-cover" />
                  )}
                </DropdownMenuItem>

                {/* Lựa chọn Tiếng Anh */}
                <DropdownMenuItem 
                  onClick={() => setLang("en")}
                  className="flex items-center justify-between p-3 cursor-pointer hover:bg-slate-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full overflow-hidden border border-slate-100">
                      <Image src="/img/us.png" alt="US" width={24} height={24} className="object-cover" />
                    </div>
                    <span className="text-[15px] font-medium text-slate-700">Tiếng Anh</span>
                  </div>
                  {/* Nút radio xanh nếu đang chọn en */}
                  {lang === "en" && (
                     <Image src="/img/Circle check.png" alt="VN" width={20} height={20} className="object-cover" />                  )}
                </DropdownMenuItem>

              </DropdownMenuContent>
            </DropdownMenu>
  <MobileSidebar lang={lang} setLang={setLang} >

  </MobileSidebar>

            <button className="btn-p text-sm hidden md:block px-4 py-2 md:px-5 md:py-2.5 flex items-center gap-2 rounded-full">
              <Image
                src="/img/imgUser.png"
                alt=""
                width={16}
                height={16}
                className="w-4 h-4 brightness-0 invert"
              />
              <span className="md:block ">Đăng nhập</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
