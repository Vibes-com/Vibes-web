'use client';

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ComponentProps } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    const isWhatWeDoActive =
        pathname === "/technology" ||
        pathname === "/branding" ||
        pathname === "/digital-marketing";

    const linkClass = (active: boolean) =>
        clsx(
            "relative font-poppins font-normal text-[14px] leading-[100%] tracking-[0]",
            "text-white bg-transparent",
            "hover:text-white focus:text-white data-[active]:text-white",
            "hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent",
            "after:absolute after:left-0 after:-bottom-1 after:h-[4px] after:w-full after:bg-[#F4BE00]",
            "after:scale-x-0 after:transition-transform after:duration-300 after:origin-left after:rounded-tl-[30px] after:rounded-tr-[30px]",
            active && "after:scale-x-100"
        );
    return (
        <NavigationMenu {...props}>
            <NavigationMenuList className=" nav-menu-new space-x-3 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">

                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={linkClass(isActive("/"))}>
                        <Link href="/">HOME</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem className="">
                    <NavigationMenuLink asChild className={linkClass(isActive("/who-we-are"))}>
                        <Link href="/who-we-are" className="text-white">WHO WE ARE</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger
                        className={clsx(
                            "bg-transparent !bg-transparent text-white font-poppins font-normal text-[14px] leading-[100%]",

                            // 🔥 force remove bg on ALL states
                            "hover:!bg-transparent focus:!bg-transparent active:!bg-transparent",
                            "data-[state=open]:!bg-transparent data-[state=closed]:!bg-transparent",

                            // text stays white
                            "hover:text-white focus:text-white data-[state=open]:text-white",

                            // underline
                            "relative after:absolute after:left-0 after:-bottom-1 after:h-[4px] after:w-full after:bg-[#F4BE00]",
                            "after:scale-x-0 after:transition-transform after:duration-300 after:origin-left after:rounded-tl-[30px] after:rounded-tr-[30px]",

                            isWhatWeDoActive && "after:scale-x-100"
                        )}
                    >
                        WHAT WE DO
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[300px]">
                            <li>
                                <Link href="/technology" className="block p-2 hover:bg-gray-100 rounded">
                                    Technology
                                </Link>
                            </li>
                            <li>
                                <Link href="/branding" className="block p-2 hover:bg-gray-100 rounded">
                                    Branding
                                </Link>
                            </li>
                            <li>
                                <Link href="/digital-marketing" className="block p-2 hover:bg-gray-100 rounded">
                                    Digital Marketing
                                </Link>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink
                        asChild
                        className={linkClass(isActive("/case-study"))}
                    >
                        <Link href="/case-study">CASE STUDIES</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={linkClass(isActive("/gallery"))}>
                        <Link href="/gallery">CULTURE</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={linkClass(isActive("/careers"))}>
                        <Link href="/careers">CAREERS</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={linkClass(isActive("/contact-us"))}>
                        <Link href="/contact-us">CONTACT US</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
    );
};
