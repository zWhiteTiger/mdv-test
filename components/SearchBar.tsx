import React from 'react'
import { Input } from './ui/input'
import { InputGroup, InputGroupAddon, InputGroupInput } from './ui/input-group'
import { Calendar, Funnel, SearchIcon } from 'lucide-react'
import { Button } from './ui/button'

type Props = {}

export default function SearchBar({ }: Props) {
    return (
        <div className='h-10 w-full gap-2 flex flex-row justify-between'>
            <InputGroup className='border h-full border-2 shadow-xs ring-none focus-none rounded-xl'>
                <InputGroupInput placeholder="Search..." />
                <InputGroupAddon>
                    <SearchIcon className='text-zinc-400' />
                </InputGroupAddon>
            </InputGroup>

            <Button variant={"outline"} className='h-full border-2 shadow-xs rounded-xl'>
                <Calendar /> Jan 6, 2025 - Jan 13, 2025
            </Button>
            <Button variant={"outline"} className='h-full border-2 shadow-xs rounded-xl'>
                <Funnel /> Filter
            </Button>
        </div>
    )
}