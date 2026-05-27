import { Card, CardContent } from "./ui/card";
import {
    CircleStar,
    Medal,
    Trophy,
} from "lucide-react";
import { TbFileCertificate } from "react-icons/tb";
import { GlassButton } from "./ui/glass-button";

type Props = {};

export default function LoadingCard({ }: Props) {
    const CardItems = [
        {
            index: 1,
            icons: Medal,
        },
        {
            index: 2,
            icons: Trophy,
        },
        {
            index: 3,
            icons: CircleStar,
        },
        {
            index: 4,
            icons: TbFileCertificate,
        },
    ];

    return (
        <Card className="max-w-md overflow-hidden py-0 gap-0 animate-pulse">
            <div className="relative w-full h-[180px] bg-zinc-200 dark:bg-zinc-800">
                <div className="flex flex-col justify-between w-full h-full p-2">
                    <div className="flex justify-end gap-2">
                        {CardItems.map((item) => {

                            return (
                                <GlassButton
                                    variant="default"
                                    key={item.index}
                                    className="w-10 h-10 rounded-full opacity-60"
                                >
                                    <div className="w-5 h-5 rounded-full bg-zinc-200" />
                                </GlassButton>
                            );
                        })}
                    </div>

                    <GlassButton
                        size={"sm"}
                        className="rounded-full bottom-0 p-3 w-28 opacity-60"
                    >
                        <div className="w-16 h-3 rounded-full bg-white/40" />
                    </GlassButton>
                </div>
            </div>

            <CardContent className="p-4 flex flex-col gap-4">

                <div className="flex flex-row border-b-2 pb-3 justify-between items-start">
                    <div className="flex flex-col gap-2 w-full">
                        <div className="h-5 w-[90%] rounded bg-zinc-200 dark:bg-zinc-800" />
                        <div className="h-4 w-[50%] rounded bg-zinc-200 dark:bg-zinc-800" />
                    </div>

                    <GlassButton
                        variant="default"
                        className="w-10 h-10 rounded-full opacity-60"
                    >
                        <div className="w-5 h-5 rounded-full bg-zinc-200" />
                    </GlassButton>
                </div>

                <div className="flex flex-col text-zinc-500 gap-3">
                    <div className="flex flex-row gap-2 items-center">
                        <div className="w-6 h-6 rounded bg-zinc-200" />
                        <div className="h-4 w-32 rounded bg-zinc-200 dark:bg-zinc-800" />
                    </div>

                    <div className="flex flex-row gap-2 items-center">
                        <div className="w-6 h-6 rounded bg-zinc-200" />
                        <div className="h-4 w-40 rounded bg-zinc-200 dark:bg-zinc-800" />
                    </div>

                    <div className="flex flex-row gap-2 items-center">
                        <div className="w-6 h-6 rounded bg-zinc-200" />
                        <div className="h-4 w-28 rounded bg-zinc-200 dark:bg-zinc-800" />
                    </div>

                    <div className="flex flex-row gap-2 items-center">
                        <div className="w-6 h-6 rounded bg-zinc-200" />
                        <div className="h-4 w-20 rounded bg-zinc-200 dark:bg-zinc-800" />
                    </div>
                </div>

                <div className="flex flex-row gap-3 justify-between items-center">
                    <div className="h-6 w-24 rounded bg-zinc-200 dark:bg-zinc-800" />

                    <div className="h-10 w-40 rounded-full bg-blue-200/50 dark:bg-blue-500/20" />
                </div>
            </CardContent>
        </Card>
    );
}