import Image from "next/image"

export default function Banner() {
    return (
        <div className="relative w-full h-64 rounded-xl overflow-hidden">
            <Image
                src="/assets/picture/banner.jpg"
                alt="Banner"
                fill
                priority
                className="object-cover"
            />
        </div>
    )
}