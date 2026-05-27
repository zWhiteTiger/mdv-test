import React from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

export default function CategoryNav() {
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

    return (
        <Tabs
            defaultValue="all"
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
    );
}