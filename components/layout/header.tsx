"use client";

import * as React from "react";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import { Menu, X, User } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/lib/types/i18n";

interface LanguageMenuProps {
  readonly value: Locale;
  readonly onChange: (nextValue: Locale) => void;
}

const LANGUAGES: ReadonlyArray<{
  readonly value: Locale;
  readonly flagSrc: string;
}> = [
  { value: "vi", flagSrc: "/img/vn.png" },
  { value: "en", flagSrc: "/img/us.png" },
];

function LanguageMenu({ value, onChange }: LanguageMenuProps) {
  const t = useTranslations("header.language");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="outline-none hover:opacity-80 transition-opacity"
          aria-label="Select language"
        >
          <Image
            src="/img/imgLanguage.png"
            alt="Language"
            width={44}
            height={44}
            className="w-9 h-9 md:w-11 md:h-11"
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-56 bg-white z-100 p-1.5 shadow-2xl rounded-xl border border-slate-200"
      >
        {LANGUAGES.map((language) => (
          <DropdownMenuItem
            key={language.value}
            onClick={() => onChange(language.value)}
            className={`flex items-center justify-between p-3 cursor-pointer rounded-lg transition-colors focus:bg-slate-100 hover:bg-slate-100 ${
              value === language.value ? "bg-slate-100" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full overflow-hidden border border-slate-100">
                <Image
                  src={language.flagSrc}
                  alt={t(language.value)}
                  width={24}
                  height={24}
                  className="object-cover"
                />
              </div>
              <span className="text-[15px] font-medium text-slate-700">
                {t(language.value)}
              </span>
            </div>
            {value === language.value && (
              <Image
                src="/img/Circle check.png"
                alt="Selected"
                width={20}
                height={20}
                className="object-cover"
              />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

interface MobileSidebarProps {
  readonly lang: Locale;
  readonly onChangeLang: (nextLang: Locale) => void;
}

function MobileSidebar({ lang, onChangeLang }: MobileSidebarProps) {
  const tCommon = useTranslations("common");
  const tHeader = useTranslations("header.menu");

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <button type="button" className="p-2 md:hidden" aria-label="Open menu">
          <Menu size={24} />
        </button>
      </DrawerTrigger>

      <DrawerContent className="h-dvh data-[vaul-drawer-direction=right]:w-screen data-[vaul-drawer-direction=right]:max-w-none rounded-none">
        <DrawerHeader className="sr-only">
          <DrawerTitle>Menu</DrawerTitle>
        </DrawerHeader>

        <div className="p-3 flex items-center gap-2">
          <Image
            src="/img/logo.png"
            alt="logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="font-bold text-[15px] md:text-[17px] lg:text-lg">
            AI Meeting Note
          </span>
          <div className="ml-auto flex items-center gap-1">
            <LanguageMenu value={lang} onChange={onChangeLang} />
            <DrawerClose asChild>
              <button
                type="button"
                className="p-2 pl-3"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </DrawerClose>
          </div>
        </div>

        <div className="px-4 flex items-center justify-center gap-10">
          <Button
            variant="outline"
            className="w-fit rounded-full border-[#203596] text-[#203596] hover:text-[#203596] hover:border-[#203596] hover:bg-blue-50 flex items-center justify-center h-10 text-[13px] sm:text-sm font-semibold px-4 gap-1.5"
          >
            <User size={16} className="fill-current" />
            {tCommon("login")}
          </Button>

          <Button className="w-fit rounded-full bg-[#203596] hover:bg-[#203596]/90 text-white flex items-center justify-center h-10 text-[13px] sm:text-sm font-semibold px-4 whitespace-nowrap">
            {tCommon("freeTrialWithArrow")}
          </Button>
        </div>

        <div className="mt-8 px-4 flex flex-col space-y-5 text-gray-600 text-[15px]">
          <span className="cursor-pointer hover:text-[#203596] transition-colors">
            {tHeader("recordAndSummarize")}
          </span>
          <span className="cursor-pointer hover:text-[#203596] transition-colors">
            {tHeader("orgManagement")}
          </span>
          <span className="cursor-pointer hover:text-[#203596] transition-colors">
            {tHeader("meetingManagement")}
          </span>
          <span className="cursor-pointer hover:text-[#203596] transition-colors">
            {tHeader("customerFeedback")}
          </span>
          <span className="cursor-pointer hover:text-[#203596] transition-colors">
            {tHeader("faq")}
          </span>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default function Header() {
  const [hasMounted, setHasMounted] = React.useState(false);
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const tCommon = useTranslations("common");
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  const handleChangeLanguage = (nextLocale: Locale) => {
    if (nextLocale === locale) {
      return;
    }
    router.push(pathname, { locale: nextLocale });
  };

  return (
    <header className="bg-transparent relative z-20">
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
            <span className="font-bold text-[15px] md:text-[17px] lg:text-lg">
              AI Meeting Note
            </span>
          </div>

          <div className="flex items-center gap-3">
            <LanguageMenu value={locale} onChange={handleChangeLanguage} />
            <MobileSidebar lang={locale} onChangeLang={handleChangeLanguage} />

            <button className="btn-p text-sm hidden md:inline-flex px-4 py-2 md:px-5 md:py-2.5 items-center gap-2 rounded-full">
              <Image
                src="/img/imgUser.png"
                alt=""
                width={16}
                height={16}
                className="w-4 h-4 brightness-0 invert"
              />
              <span className="md:block ">{tCommon("login")}</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

