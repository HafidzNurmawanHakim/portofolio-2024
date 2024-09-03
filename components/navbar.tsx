"use client";

import {
   Navbar as NextUINavbar,
   NavbarContent,
   NavbarMenu,
   NavbarMenuToggle,
   NavbarBrand,
   NavbarItem,
   NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useState } from "react";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, HeartFilledIcon, SearchIcon } from "@/components/icons";
import { fontFira } from "@/config/fonts";
import { CustomLink } from "./lib/CustomLink";

export const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const searchInput = (
      <Input
         aria-label="Search"
         classNames={{
            inputWrapper: "bg-default-100",
            input: "text-sm",
         }}
         endContent={
            <Kbd className="hidden lg:inline-block" keys={["command"]}>
               K
            </Kbd>
         }
         labelPlacement="outside"
         placeholder="Search..."
         startContent={
            <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
         }
         type="search"
      />
   );

   return (
      <NextUINavbar
         shouldHideOnScroll
         classNames={{
            wrapper: "rounded-full custom-blur",
            base: "bg-transparent mt-2 relative z-50",
         }}
         isBlurred={false}
         isMenuOpen={isMenuOpen}
         maxWidth="xl"
         onMenuOpenChange={(isOpen) => {
            return setIsMenuOpen(isOpen);
         }}
      >
         <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
            <NavbarBrand as="li" className="gap-3 max-w-fit">
               <NextLink className="flex justify-start items-center gap-1" href="/">
                  <p className={clsx("font-bold text-inherit", fontFira.className)}>V 1.0</p>
               </NextLink>
            </NavbarBrand>
         </NavbarContent>
         <NavbarContent justify="center">
            <ul className="hidden lg:flex gap-4 justify-start ml-2">
               {siteConfig.navItems.map((item) => (
                  <NavbarItem key={item.href}>
                     <NextLink
                        className={clsx(
                           linkStyles({ color: "foreground" }),
                           "data-[active=true]:text-primary data-[active=true]:font-medium"
                        )}
                        color="foreground"
                        href={item.href}
                        scroll={true}
                     >
                        {item.label}
                     </NextLink>
                  </NavbarItem>
               ))}
            </ul>
         </NavbarContent>

         <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
            <NavbarItem className="hidden sm:flex gap-2">
               <Link isExternal aria-label="Github" href={siteConfig.links.github}>
                  <GithubIcon className="text-default-500" />
               </Link>
               <ThemeSwitch />
            </NavbarItem>
            {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
            <NavbarItem className="hidden md:flex">
               <Button
                  // isExternal
                  as={Link}
                  className="text-sm font-normal text-default-600 bg-default-100"
                  // href={siteConfig.links.sponsor}
                  href={"#contact"}
                  startContent={<HeartFilledIcon className="text-danger" />}
                  variant="flat"
               >
                  Hire Me
               </Button>
            </NavbarItem>
         </NavbarContent>

         <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
            <Link isExternal aria-label="Github" href={siteConfig.links.github}>
               <GithubIcon className="text-default-500" />
            </Link>
            <ThemeSwitch />
            <NavbarMenuToggle />
         </NavbarContent>

         <NavbarMenu>
            {searchInput}
            <div className="mx-4 mt-2 flex flex-col gap-2">
               {siteConfig.navMenuItems.map((item, index) => (
                  <NavbarMenuItem key={`${item}-${index}`}>
                     <Link
                        color={
                           index === 2
                              ? "primary"
                              : index === siteConfig.navMenuItems.length - 1
                                ? "danger"
                                : "foreground"
                        }
                        href={item.href}
                        size="lg"
                        onClick={() => setIsMenuOpen(false)}
                     >
                        {item.label}
                     </Link>
                  </NavbarMenuItem>
               ))}
            </div>
         </NavbarMenu>
      </NextUINavbar>
   );
};
