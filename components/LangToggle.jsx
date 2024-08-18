"use client";

import React from "react";
import { useRouter, usePathname } from "../navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { FcGlobe } from "react-icons/fc";
import { useTransition } from "react";
import { Globe } from "lucide-react";

export function LocaleSwitchers() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  const locales = [
    { code: "en", name: "🇬🇧 English" },
    { code: "tr", name: "🇹🇷 Türkçe" },
    { code: "de", name: "🇩🇪 Deutsch" },
  ];

  function changeLocale(locale, href) {
    startTransition(() => {
      router.push({ pathname: locale, href }, undefined, {
        locale,
      });
      router.refresh();
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="h-8 w-8 border-none rounded-2xl" size="icon">
          <Globe className="h-7 w-7 hover:scale-105 transition-all" />
          <span className="sr-only">Change Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map(({ code, name }) => (
          <DropdownMenuItem key={code} onClick={() => changeLocale(code)}>
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
