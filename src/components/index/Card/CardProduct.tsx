import { cn } from "@/lib/utils"
import { Star } from "lucide-react"
import Image from "next/image"

type ICardProduct = {
    title: string,
    image: string,
    price: number,
    score: number,
    bgColor : string
}

export const CardProduct = (props: ICardProduct) => {
    return (
        <div className="CardProducts p-[22px]">
            <div className={cn("flex items-center justify-center mb-3 rounded-lg w-full h-[218px] max-h-[218px]" , props.bgColor)}>
                <Image src={props.image} alt={props.title} width={220} height={218} />
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="text-lg font-medium text-[#003F62]">{props.title}</h3>
                <p className="text-lg font-bold text-left">{props.price} تومان</p>
                <div className="flex items-center gap-x-2 justify-end">
                    {props.score}<Star className="size-[15px]"/><Star className="size-[15px]"/><Star className="size-[15px]"/><Star className="size-[15px]"/><Star className="size-[15px]"/>
                </div>
            </div>
        </div>
    )
}