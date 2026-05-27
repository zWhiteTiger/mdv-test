import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { BsArrow90DegRight } from 'react-icons/bs'
import { FaArrowLeft } from 'react-icons/fa'
import Image from 'next/image'
import { Bookmark, BookMarkedIcon, Calendar, Clock, MapPin, User } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

type Props = {}

export default function page({ }: Props) {
    return (
        <div className='flex flex-col gap-2'>

            <div className='bg-white rounded-md pr-2 p-3 flex flex-row justify-between'>
                <Link href={'/'}>
                    <Button size={"lg"} variant={"outline"}>
                        <FaArrowLeft /> Back
                    </Button>
                </Link>

                <Button size={"lg"} variant={"outline"}>
                    <BsArrow90DegRight /> Share
                </Button>
            </div>

            <div className="grid grid-cols-[80%_20%]">
                <div className='flex flex-col gap-2'>
                    <div className="relative w-full h-60 p-3 rounded-md">
                        <Image
                            src={'/assets/picture/Webdev.jpg'}
                            alt={''}
                            fill
                            className="object-cover rounded-md"
                        />
                    </div>

                    <div className='flex flex-row gap-2 items-start'>
                        <Clock />
                        <div className='flex flex-col'>
                            <p>Date & Time</p>
                            <p>Oct 15, 2025 - Oct 15,2025 2:00 PM - 4:00 PM (GMT+7)</p>
                        </div>
                    </div>



                    <Calendar />

                    Registration Deadline
                    Oct 13, 2025

                    <MapPin />
                    Location
                    Onsite
                    Bangkok, Thailand

                    <User />
                    Available seats
                    50

                    Overview
                    Join us for an immersive introduction to web development! This hands-on workshop is designed for complete beginners who want to start their journey in creating websites and web applications.  During this intensive session, you'll learn the core building blocks of the web: HTML for structure, CSS for styling, and JavaScript for interactivity. Our experienced instructors will guide you through creating your first web page from scratch, and by the end of the day, you'll have built a functional personal portfolio website.  This workshop is perfect for students interested in computer science, digital media, or anyone curious about how websites are made. No prior programming experience is required – just bring your curiosity and a laptop!
                    Join us for an immersive introduction to web development! This hands-on workshop is designed for complete beginners who want to start their journey in creating websites and web applications.  During this intensive session, you'll learn the core building blocks of the web: HTML for structure, CSS for styling, and JavaScript for interactivity. Our experienced instructors will guide you through creating your first web page from scratch, and by the end of the day, you'll have built a functional personal portfolio website.  This workshop is perfect for students interested in computer science, digital media, or anyone curious about how websites are made. No prior programming experience is required – just bring your curiosity and a laptop!

                    Read more

                    Eligibility
                    High School Students
                    Undergraduate Students
                    Graduate Students
                    General Public

                    Outcomes & Benefits


                </div>

                <div>
                    <Card>
                        <CardContent>
                            Time Remaining
                            48
                            21
                            21
                            Days
                            Hours
                            Minutes


                            299 THB
                            15 Seats left

                            <Button>
                                Register Now
                            </Button>
                            <Button variant={"outline"}>
                                <Bookmark /> Bookmark
                            </Button>
                            <Button variant={"outline"}>
                                <Calendar /> Google Calendar
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>

        </div>
    )
}