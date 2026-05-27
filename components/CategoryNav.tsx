"use client";

import React, { useMemo, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import CourseCard from "./CourseCard";
import { courses } from "@/Mockup/data01";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

const COLS_PER_ROW = 5;
const ROWS_PER_PAGE = 2;
const ITEMS_PER_PAGE = COLS_PER_ROW * ROWS_PER_PAGE; // 10 items

export default function CategoryNav() {
    const [category, setCategory] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);

    const navMenu = [
        { name: "All", value: "all" },
        { name: "Bookmarked", value: "bookmarked" },
        { name: "Registered", value: "registered" },
        { name: "History", value: "history" },
    ];

    const filteredCourses = useMemo(() => {
        setCurrentPage(1); // reset หน้าเมื่อเปลี่ยน category
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

    const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);

    const paginatedCourses = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredCourses.slice(start, start + ITEMS_PER_PAGE);
    }, [filteredCourses, currentPage]);

    const getPageNumbers = () => {
        const pages: (number | "ellipsis")[] = [];

        if (totalPages <= 5) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        pages.push(1);

        if (currentPage > 3) pages.push("ellipsis");

        for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
            pages.push(i);
        }

        if (currentPage < totalPages - 2) pages.push("ellipsis");

        pages.push(totalPages);

        return pages;
    };

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
                {paginatedCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>

            {totalPages > 1 && (
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (currentPage > 1) setCurrentPage((p) => p - 1);
                                }}
                                className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                            />
                        </PaginationItem>

                        {getPageNumbers().map((page, idx) =>
                            page === "ellipsis" ? (
                                <PaginationItem key={`ellipsis-${idx}`}>
                                    <PaginationEllipsis />
                                </PaginationItem>
                            ) : (
                                <PaginationItem key={page}>
                                    <PaginationLink
                                        href="#"
                                        isActive={currentPage === page}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setCurrentPage(page);
                                        }}
                                    >
                                        {page}
                                    </PaginationLink>
                                </PaginationItem>
                            )
                        )}

                        <PaginationItem>
                            <PaginationNext
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (currentPage < totalPages) setCurrentPage((p) => p + 1);
                                }}
                                className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            )}
        </div>
    );
}