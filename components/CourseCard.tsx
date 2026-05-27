import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import {
    Bookmark,
    Calendar,
    Check,
    CircleStar,
    Clock,
    MapPin,
    Medal,
    Trophy,
    User,
} from "lucide-react";
import { TbFileCertificate } from "react-icons/tb";
import { GlassButton } from "./ui/glass-button";
import { courses } from "@/Mockup/data01";

type Course = {
    id: number;
    image: string;
    title: string;
    university: string;
    date: string;
    time: string;
    location: string;
    seats: number;
    price: number;
    currency: string;
    sponsored: boolean;
    extensionAvailable: boolean;
    bookmarked: boolean;
    registered: boolean;
    history: boolean;
};

type Props = {
    course: Course;
};

export default function CourseCard({ course }: Props) {
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
        <Card
            key={course.id}
            className="max-w-md overflow-hidden py-0 gap-0 flex flec-col justify-between"
        >
            <div className="flex flex-col">
                <div className="relative w-full h-[180px]">
                    <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        quality={100}
                        className="object-cover"
                    />

                    <div className="flex flex-col justify-between w-full h-full p-2">
                        <div className="flex justify-end gap-2">
                            {CardItems.map((item) => {
                                const Icon = item.icons;

                                return (
                                    <GlassButton
                                        variant="default"
                                        key={item.index}
                                        className="w-10 h-10 rounded-full"
                                    >
                                        <Icon size={24} className="text-white" />
                                    </GlassButton>
                                );
                            })}
                        </div>

                        {course.sponsored && (
                            <GlassButton
                                size={"sm"}
                                className="rounded-full bottom-0 p-3"
                            >
                                Sponsored
                            </GlassButton>
                        )}
                    </div>
                </div>

                <div className="flex flex-row border-b-2 p-3 justify-between">
                    <div className="flex flex-col">
                        <p className="text-lg font-bold">
                            {course.title}
                        </p>

                        <p className="text-sm text-current/50">
                            {course.university}
                        </p>
                    </div>

                    <GlassButton
                        variant="default"
                        className="w-10 h-10 rounded-full"
                    >
                        <Bookmark
                            className={
                                course.bookmarked
                                    ? "fill-zinc-600 text-zinc-600"
                                    : "text-zinc-600"
                            }
                        />
                    </GlassButton>
                </div>
            </div>

            <CardContent className="p-4 flex flex-col gap-4">

                <div className="flex flex-col text-zinc-500 gap-2">
                    <p className="flex flex-row gap-2 items-center">
                        <Calendar
                            className="text-blue-500"
                            size={18}
                        />
                        {course.date}
                    </p>

                    <p className="flex flex-row gap-2 items-center">
                        <Clock
                            className="text-blue-500"
                            size={18}
                        />
                        {course.time}
                    </p>

                    <p className="flex flex-row gap-2 items-center">
                        <MapPin
                            className="text-blue-500"
                            size={18}
                        />
                        {course.location}
                    </p>

                    <p className="flex flex-row gap-2 items-center">
                        <User
                            className="text-blue-500"
                            size={18}
                        />
                        {course.seats} seats
                    </p>
                </div>

                <div className="flex flex-row gap-3 justify-between items-center">
                    <div className="text-emerald-600 text-xl">
                        {course.registered ? (
                            <p className="text-emerald-600 text-sm items-center font-bold flex flex-row gap-2">
                                <Check /> Registered
                            </p>
                        ) : (
                            <p className="text-emerald-600 text-xl items-center flex flex-row gap-2">
                                {course.price} {course.currency}
                            </p>
                        )}
                    </div>

                    {course.extensionAvailable && (
                        <button className="bg-blue-300/25 text-blue-600 font-bold rounded-full py-2 px-3">
                            Extension Available
                        </button>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}