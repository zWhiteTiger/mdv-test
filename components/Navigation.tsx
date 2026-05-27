import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Cloudy, Goal, LayoutGrid, Bell } from 'lucide-react';

export default function SideNavigation() {
    return (
        <div className="px-2 py-4 flex">
            <aside className="w-20 bg-white rounded-md text-white flex flex-col justify-between items-center py-4">

                <div className="mb-8 text-2xl font-bold">
                    <Image src={"https://medalverse.ai/logo.svg"} width={40} height={40} priority alt={""} />
                </div>

                <nav className="flex flex-col gap-2 p-4 overflow-hidden">
                    <Link href={"#"}>
                        <button className="p-2 rounded-xl text-zinc-600 hover:text-blue-500 hover:bg-blue-600/20 transition flex flex-col items-center justify-center gap-1">
                            <Cloudy size={24} />

                            <p className="text-[10px] text-center break-words leading-tight">
                                Credential Cloud
                            </p>
                        </button>
                    </Link>
                    <Link href={"#"}>
                        <button className="p-2 hover:text-blue-500 rounded-xl text-zinc-600 hover:bg-blue-600/20 transition flex flex-col items-center justify-center gap-1">
                            <Goal size={24} />

                            <p className="text-[10px] text-center break-words leading-tight">
                                Mission Room
                            </p>
                        </button>
                    </Link>
                    <Link href={"#"}>
                        <button className="p-2 hover:text-blue-500 rounded-xl text-zinc-600 hover:bg-blue-600/20 transition flex flex-col items-center justify-center gap-1">
                            <LayoutGrid size={24} />

                            <p className="text-[10px] text-center break-words leading-tight">
                                Experience Hub
                            </p>
                        </button>
                    </Link>
                </nav>


                <div className="flex flex-col items-center gap-5">
                    <button className="p-3 rounded-xl text-zinc-600 hover:bg-blue-600/20 transition">
                        <Bell size={24} />
                    </button>

                    <Avatar
                        size="lg"
                    >
                        <AvatarImage
                            src="P"
                            alt="@shadcn"
                            className="grayscale"
                        />
                        <AvatarFallback>P</AvatarFallback>
                    </Avatar>
                </div>
            </aside>
        </div>
    )
}