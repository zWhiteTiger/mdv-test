import React from "react";
import { Menu } from "lucide-react";
import { GlassButton } from "./ui/glass-button";
import Image from "next/image";
import { Button } from "./ui/button";

type Props = {};

export default function BurgerBar({ }: Props) {
    return (
        <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[95%] max-w-7xl">
            <div className="flex items-center justify-between rounded-2xl border border-white/20 bg-white px-4 py-3 shadow-lg">

                <div className="flex items-center gap-2">
                    <div className="h-5 md:h-10 rounded-xl flex gap-2 items-center justify-center text-white font-bold">
                        <Image src={"https://medalverse.ai/logo.svg"} className="hidden md:flex" width={40} height={40} priority alt={""} />
                        <Image src={"https://medalverse.ai/logo.svg"} className="flex md:hidden" width={20} height={20} priority alt={""} />
                        <p className="text-black">medalverse</p>
                    </div>
                </div>

                <Button variant={"ghost"}>
                    <Menu className="text-black" size={22} />
                </Button>
            </div>
        </header>
    );
}