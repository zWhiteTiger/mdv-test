import BurgerBar from '@/components/BurgerBar';
import SideNavigation from '@/components/Navigation';
import React from 'react'

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex h-screen bg-gray-100">

            <div className='hidden md:flex'>
                <SideNavigation />
            </div>
            <div className='flex md:hidden lg:hidden'>
                <BurgerBar />
            </div>

            <main className="flex-1 overflow-auto py-4 pr-2">
                {children}
            </main>
        </div>
    )
}