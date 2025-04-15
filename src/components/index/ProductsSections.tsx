import { SiteContainer } from "@/lib/SiteContainer"
import { CardProduct } from "./Card/CardProduct"

type data = {
    title: string,
    image: string,
    score: number,
    price : number,
    bgColor: string
}

const productsData : Array<data> = [
    {
        title: "کفش اسپورت سارزی",
        image: "/images/products/favpng_nike-air-max-270-womens-shoe-nike-wmns-air-max-270-flyknit-womens-sports-shoes (1).png",
        score: 0,
        price : 380000,
        bgColor: "bg-[#A3FCB1]"
    },
    {
        title: "کفش پیاده روی  مدل NOV-BK",
        image: "/images/products/PngItem_6616167.png",
        score: 0,
        price : 380000,
        bgColor: "bg-[#FCC3A3]"
    },
    {
        title: "کفش راحتی کد 210",
        image: "/images/products/PngItem_4881188.png",
        score: 0,
        price : 380000,
        bgColor: "bg-[#A3F7FC]"
    },
    {
        title: "کفش پیاده روی  مدل NOV-BK",
        image: "/images/products/507-5075088_nike-air-max-270-blue-and-green-hd-removebg-preview.png",
        score: 0,
        price : 380000,
        bgColor: "bg-[#FCA3A3]"
    },
]

export const ProductsSections = () => {
    return (
        <div className="pb-16 lg:pb-[116px]">
            <SiteContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[55px]">
                    {productsData.map((item, index) => {
                        return <CardProduct key={index} {...item} />
                    })}
                </div>
            </SiteContainer>
        </div>
    )
}