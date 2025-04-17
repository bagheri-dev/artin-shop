import { cn } from "@/lib/utils"
import { Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type ICardProduct = {
    title: string,
    image: string,
    price: number,
    score: number,
    bgColor: string
}

export const CardProduct = (props: ICardProduct) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <Star
                    key={i}
                    className={cn(
                        "size-[15px] transition-colors duration-300 group-hover:stroke-yellow-400",
                        i <= props.score ? "fill-yellow-400 stroke-yellow-400" : "fill-none stroke-gray-400"
                    )}
                />
            );
        }
        return stars;
    };

    return (
        <Link href={"#"}>
            <div className="CardProducts p-[22px] group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className={cn(
                    "flex items-center justify-center mb-3 rounded-lg w-full h-[218px] max-h-[218px] transition-colors duration-300 group-hover:brightness-110",
                    props.bgColor
                )}>
                    <Image 
                        src={props.image} 
                        alt={props.title} 
                        width={220} 
                        height={218} 
                        className="transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex flex-col gap-4 relative z-10">
                    <h3 className="text-lg font-medium text-[#003F62] transition-colors duration-300 group-hover:text-[#0066a1]">
                        {props.title}
                    </h3>
                    <p className="text-lg font-bold text-left animate-pulse-price">
                        {props.price} تومان
                    </p>
                    <div className="flex items-center gap-x-2 justify-end">
                        {renderStars()}
                    </div>
                </div>
            </div>
        </Link>
    )
}