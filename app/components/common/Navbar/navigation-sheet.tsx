import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu, X } from "lucide-react";
import { NavMenu } from "./nav-menu";
import Logo from "./logo";
import { useState } from "react";


export const NavigationSheet = () => {
    const [open, setOpen] = useState(false);
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
            </VisuallyHidden>

            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
                    {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
            </SheetTrigger>
            <SheetContent className="px-6 py-3 bg-black">
                <Logo />
                <NavMenu orientation="vertical" className="mt-6 [&>div]:h-full" />
            </SheetContent>
        </Sheet>
    );
};
