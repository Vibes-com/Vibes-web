'use client'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ComponentProps } from "react";

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => (
    <NavigationMenu {...props}>
        <NavigationMenuList className="space-x-3 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
            <NavigationMenuItem>
                <NavigationMenuLink asChild className="font-poppins font-normal text-[14px] leading-[100%] tracking-[0] text-[#FFFFFF]">
                    <Link href="/">HOME</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink asChild className="font-poppins font-normal text-[14px] leading-[100%] tracking-[0] text-[#FFFFFF]">
                    <Link href="/who-we-are">WHO WE ARE</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuTrigger className=" bg-transparent font-poppins font-normal text-[14px] leading-[100%] tracking-[0] text-[#FFFFFF]">
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
                            <Link href="/service2" className="block p-2 hover:bg-gray-100 rounded">
                                Branding
                            </Link>
                        </li>

                        <li>
                            <Link href="/service3" className="block p-2 hover:bg-gray-100 rounded">
                                Digital Marketing
                            </Link>
                        </li>
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink asChild className="font-poppins font-normal text-[14px] leading-[100%] tracking-[0] text-[#FFFFFF]">
                    <Link href="#">CASE STUDIES</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink asChild className="font-poppins font-normal text-[14px] leading-[100%] tracking-[0] text-[#FFFFFF]">
                    <Link href="/blog">CULTURE</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink asChild className="font-poppins font-normal text-[14px] leading-[100%] tracking-[0] text-[#FFFFFF]">
                    <Link href="#">CAREERS</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink asChild className="font-poppins font-normal text-[14px] leading-[100%] tracking-[0] text-[#FFFFFF]">
                    <Link href="/contact-us">CONTACT US</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
);
