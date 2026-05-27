import Banner from '@/components/Banner'
import CategoryNav from '@/components/CategoryNav'
import CourseCard from '@/components/CourseCard'
import LoadingCard from '@/components/LoadingCard'
import SearchBar from '@/components/SearchBar'
import React from 'react'

type Props = {}

export default function page({ }: Props) {
    return (
        <div className='flex flex-col'>
            <Banner />

            <div className='py-2 gap-2 flex flex-col'>
                <SearchBar />
                <CategoryNav />
            </div>

            <div className="my-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 w-full">
                {Array.from({ length: 1 }).map((_, index) => (
                    <CourseCard key={index} />
                ))}

                <LoadingCard/>
            </div>
        </div>
    )
}