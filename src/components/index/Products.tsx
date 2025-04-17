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
        score: 5,
        price : 380000,
        bgColor: "bg-[#A3FCB1]"
    },
    {
        title: "کفش پیاده روی  مدل NOV-BK",
        image: "/images/products/PngItem_6616167.png",
        score: 2,
        price : 380000,
        bgColor: "bg-[#FCC3A3]"
    },
    {
        title: "کفش راحتی کد 210",
        image: "/images/products/PngItem_4881188.png",
        score: 4,
        price : 380000,
        bgColor: "bg-[#A3F7FC]"
    },
    {
        title: "کفش پیاده روی  مدل NOV-BK",
        image: "/images/products/507-5075088_nike-air-max-270-blue-and-green-hd-removebg-preview.png",
        score: 1,
        price : 380000,
        bgColor: "bg-[#FCA3A3]"
    },
    {
        title: "کفش پیاده روی  مدل NOV-BK",
        image: "/images/products/PngItem_6616167.png",
        score: 0,
        price : 360000,
        bgColor: "bg-[#F5E6FF]"
    },
    {
        title: "کفش اسپرت سارزی",
        image: "/images/products/507-5075088_nike-air-max-270-blue-and-green-hd-removebg-preview.png",
        score: 4.5,
        price : 380000,
        bgColor: "bg-[#7BE498]"
    },
    {
        title: "کفش راحتی کد 210",
        image: "/images/products/favpng_nike-air-max-270-womens-shoe-nike-wmns-air-max-270-flyknit-womens-sports-shoes (1).png",
        score: 0,
        price : 240000,
        bgColor: "bg-[#F7C29B]"
    },
    {
        title: "کفش راحتی کد 210",
        image: "/images/products/PngItem_4881188.png",
        score: 0,
        price : 240000,
        bgColor: "bg-[#A3F7FC]"
    },
]

export const Products = () => {
    return (
        <div className="pb-16 lg:pb-[116px]">
            <SiteContainer>
                <div className="pb-5 mb-8 border-b border-[#B6B6B6]">
                    <h2 className="flex items-center justify-center text-lg">
                        محصولات
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[55px]">
                    {productsData.map((item , index) => {
                        return <CardProduct key={index} {...item} />
                    })}
                </div>
            </SiteContainer>
        </div>
    )
}