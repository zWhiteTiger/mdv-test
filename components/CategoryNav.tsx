"use client";

import React, { useMemo, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import CourseCard from "./CourseCard";
import { courses } from "@/Mockup/data01";

export default function CategoryNav() {
    const [category, setCategory] = useState("all");

    const navMenu = [
        {
            name: "All",
            value: "all",
        },
        {
            name: "Bookmarked",
            value: "bookmarked",
        },
        {
            name: "Registered",
            value: "registered",
        },
        {
            name: "History",
            value: "history",
        },
    ];

    const filteredCourses = useMemo(() => {
        switch (category) {
            case "bookmarked":
                return courses.filter((course) => course.bookmarked);

            case "registered":
                return courses.filter((course) => course.registered);

            case "history":
                return courses.filter((course) => course.history);

            default:
                return courses;
        }
    }, [category]);

    return (
        <div className="flex flex-col gap-6">
            <Tabs
                value={category}
                onValueChange={setCategory}
                className="w-full border-b-2 border-zinc-200"
            >
                <TabsList
                    variant="line"
                    className="inline-flex rounded-none bg-transparent p-0 h-auto"
                >
                    {navMenu.map((item) => (
                        <TabsTrigger
                            key={item.value}
                            value={item.value}
                            className="w-fit px-2 py-2 flex-none"
                        >
                            {item.name}
                        </TabsTrigger>
                    ))}
                </TabsList>
            </Tabs>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {filteredCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
}