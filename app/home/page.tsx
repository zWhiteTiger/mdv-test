import Banner from '@/components/Banner'
import CategoryNav from '@/components/CategoryNav'
import CourseCard from '@/components/CourseCard'
import LoadingCard from '@/components/LoadingCard'
import SearchBar from '@/components/SearchBar'
import { courses } from '@/Mockup/data01'
import React from 'react'

type Props = {}

export default function page({ }: Props) {
    return (
        <div className='flex flex-col'>
            <Banner />

            <div className='py-2 gap-2 flex flex-col'>
                <SearchBar />
            </div>

            <div className="">
                <CategoryNav />
            </div>

        </div>
    )
}