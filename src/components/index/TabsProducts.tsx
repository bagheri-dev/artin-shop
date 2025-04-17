"use client"

import { SiteContainer } from "@/lib/SiteContainer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../UI/tabs"
import { Swiper, SwiperSlide } from "swiper/react"
import { CardProductSlider } from "./Card/CardProductSlider"
import "swiper/css"

type data = {
    title: string,
    image: string,
    score: number,
    price: number,
    bgColor: string
}

const latest: Array<data> = [
    {
        title: "کفش اسپورت سارزی",
        image: "/images/products/favpng_nike-air-max-270-womens-shoe-nike-wmns-air-max-270-flyknit-womens-sports-shoes (1).png",
        score: 0,
        price: 380000,
        bgColor: "bg-[#A3FCB1]"
    },
    {
        title: "کفش پیاده روی  مدل NOV-BK",
        image: "/images/products/PngItem_6616167.png",
        score: 0,
        price: 380000,
        bgColor: "bg-[#FCC3A3]"
    },
    {
        title: "کفش راحتی کد 210",
        image: "/images/products/PngItem_4881188.png",
        score: 0,
        price: 380000,
        bgColor: "bg-[#A3F7FC]"
    },
    {
        title: "کفش پیاده روی  مدل NOV-BK",
        image: "/images/products/507-5075088_nike-air-max-270-blue-and-green-hd-removebg-preview.png",
        score: 0,
        price: 380000,
        bgColor: "bg-[#FCA3A3]"
    },
    {
        title: "کفش پیاده روی  مدل NOV-BK",
        image: "/images/products/PngItem_6616167.png",
        score: 0,
        price: 360000,
        bgColor: "bg-[#F5E6FF]"
    },
    {
        title: "کفش اسپرت سارزی",
        image: "/images/products/507-5075088_nike-air-max-270-blue-and-green-hd-removebg-preview.png",
        score: 0,
        price: 380000,
        bgColor: "bg-[#7BE498]"
    },
    {
        title: "کفش راحتی کد 210",
        image: "/images/products/favpng_nike-air-max-270-womens-shoe-nike-wmns-air-max-270-flyknit-womens-sports-shoes (1).png",
        score: 0,
        price: 240000,
        bgColor: "bg-[#F7C29B]"
    },
    {
        title: "کفش راحتی کد 210",
        image: "/images/products/PngItem_4881188.png",
        score: 0,
        price: 240000,
        bgColor: "bg-[#A3F7FC]"
    },
]
const bestsellers: Array<data> = [
    {
        title: "کفش اسپورت سارزی",
        image: "/images/products/favpng_nike-air-max-270-womens-shoe-nike-wmns-air-max-270-flyknit-womens-sports-shoes (1).png",
        score: 0,
        price: 380000,
        bgColor: "bg-[#A3FCB1]"
    },
    {
        title: "کفش پیاده روی  مدل NOV-BK",
        image: "/images/products/PngItem_6616167.png",
        score: 0,
        price: 380000,
        bgColor: "bg-[#FCC3A3]"
    },
    {
        title: "کفش راحتی کد 210",
        image: "/images/products/PngItem_4881188.png",
        score: 0,
        price: 380000,
        bgColor: "bg-[#A3F7FC]"
    },
    {
        title: "کفش پیاده روی  مدل NOV-BK",
        image: "/images/products/507-5075088_nike-air-max-270-blue-and-green-hd-removebg-preview.png",
        score: 0,
        price: 380000,
        bgColor: "bg-[#FCA3A3]"
    },
    {
        title: "کفش پیاده روی  مدل NOV-BK",
        image: "/images/products/PngItem_6616167.png",
        score: 0,
        price: 360000,
        bgColor: "bg-[#F5E6FF]"
    },
    {
        title: "کفش اسپرت سارزی",
        image: "/images/products/507-5075088_nike-air-max-270-blue-and-green-hd-removebg-preview.png",
        score: 0,
        price: 380000,
        bgColor: "bg-[#7BE498]"
    },
    {
        title: "کفش راحتی کد 210",
        image: "/images/products/favpng_nike-air-max-270-womens-shoe-nike-wmns-air-max-270-flyknit-womens-sports-shoes (1).png",
        score: 0,
        price: 240000,
        bgColor: "bg-[#F7C29B]"
    },
    {
        title: "کفش راحتی کد 210",
        image: "/images/products/PngItem_4881188.png",
        score: 0,
        price: 240000,
        bgColor: "bg-[#A3F7FC]"
    },
]

export const TabsProducts = () => {
    return (
        <div className="pb-16 lg:pb-[116px]">
            <div>
                <SiteContainer>
                    <Tabs defaultValue="latest" className="w-full">
                        <div className="flex items-center justify-center border-b mb-14">
                            <TabsList className="flex items-center gap-x-8">
                                <TabsTrigger value="latest" className="text-lg">پر فروش ترین ها</TabsTrigger>
                                <TabsTrigger value="bestsellers" className="text-lg">جدید ترین ها</TabsTrigger>
                            </TabsList>
                        </div>
                        <TabsContent value="latest">
                            <Swiper
                                spaceBetween={16}
                                slidesPerView={1.2}
                                breakpoints={{
                                    640: { slidesPerView: 2.2 },
                                    768: { slidesPerView: 3.2 },
                                    1024: { slidesPerView: 4 },
                                }}
                                pagination={{
                                    clickable: true,
                                    el: '.team-custom-pagination',
                                }}
                            >
                                {latest.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <CardProductSlider {...item} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="team-custom-pagination"></div>
                        </TabsContent>
                        <TabsContent value="bestsellers">
                            <Swiper
                                spaceBetween={16}
                                slidesPerView={1.2}
                                breakpoints={{
                                    640: { slidesPerView: 2.2 },
                                    768: { slidesPerView: 3.2 },
                                    1024: { slidesPerView: 4 },
                                }}
                                pagination={{
                                    clickable: true,
                                    el: '.team-custom-pagination',
                                }}
                            >
                                {bestsellers.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <CardProductSlider {...item} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="team-custom-pagination"></div>
                        </TabsContent>
                    </Tabs>
                </SiteContainer>
            </div>
        </div>
    )
}