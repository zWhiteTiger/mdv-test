import { Card, CardContent } from './ui/card'
import Image from 'next/image'
import { Bookmark, Calendar, CircleStar, Clock, MapPin, Medal, Trophy, User } from 'lucide-react'
import { TbFileCertificate } from 'react-icons/tb'
import { GlassButton } from './ui/glass-button'

type Props = {}

export default function CourseCard({ }: Props) {

    const CardItems = [
        {
            index: 1,
            icons: Medal
        },
        {
            index: 2,
            icons: Trophy
        },
        {
            index: 3,
            icons: CircleStar
        },
        {
            index: 4,
            icons: TbFileCertificate
        },
    ]

    return (
        <Card className="max-w-md overflow-hidden py-0 gap-0">
            <div className="relative w-full h-[180px]">
                <Image
                    src="/assets/picture/blockchain.jpg"
                    alt="Blockchain"
                    fill
                    quality={100}
                    className="object-cover"
                />
                <div className='flex flex-col justify-between w-full h-full p-2'>
                    <div className='flex justify-end gap-2'>

                        {CardItems.map((item) => {
                            const Icon = item.icons;

                            return (
                                <GlassButton
                                    variant="default"
                                    key={item.index}
                                    className="w-10 h-10 rounded-full">
                                    <Icon size={24} className="text-white" />
                                </GlassButton>

                            );
                        })}

                    </div>
                    <GlassButton size={"sm"} className='rounded-full bottom-0 p-3'>
                        Sponsored
                    </GlassButton>
                </div>
            </div>

            <CardContent className="p-4 flex flex-col gap-4">
                <div className='flex flex-row border-b-2'>
                    <div className='flex flex-col'>
                        <p className='text-lg font-bold'>Blockchain Fundamentals for Beginners</p>
                        <p className='text-sm text-current/50'>Kasetsart University</p>
                    </div>

                    <GlassButton
                        variant="default"
                        className="w-10 h-10 rounded-full">
                        <Bookmark className='text-zinc-600' />
                    </GlassButton>

                </div>

                <div className='flex flex-col text-zinc-500 gap-2'>
                    <p className='flex flex-row gap-2 items-center'><Calendar className='text-blue-500' size={18} />Oct 15, 2025</p>
                    <p className='flex flex-row gap-2 items-center'><Clock className='text-blue-500' size={18} />9:30 AM – 12:00 PM</p>
                    <p className='flex flex-row gap-2 items-center'><MapPin className='text-blue-500' size={18} />Online Event</p>
                    <p className='flex flex-row gap-2 items-center'><User className='text-blue-500' size={18} />50 seats</p>
                </div>

                <div className='flex flex-row gap-3 justify-between items-center'>
                    <p className='text-emerald-600 text-xl'>299 THB</p>
                    <button className='bg-blue-300/25 text-blue-600 text-bold rounded-full py-2 px-3'>
                        Extension Avaliable
                    </button>
                </div>
            </CardContent>
        </Card>
    )
}