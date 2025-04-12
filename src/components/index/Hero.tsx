'use client';

import { SiteContainer } from "@/lib/SiteContainer";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const Hero = () => {
    const slides = [
        {
            title: "احساس خوب زندگی با کفش‌های آرتین شاپ",
            image: "/images/banner/Group 1261153089.png",
            ornament: "/images/ornament.png",
        },
        {
            title: "راحتی و زیبایی با آرتین شاپ",
            image: "/images/banner/Group 1261153089.png",
            ornament: "/images/ornament.png",
        },
        {
            title: "سبکی متفاوت با آرتین شاپ",
            image: "/images/banner/Group 1261153089.png",
            ornament: "/images/ornament.png",
        },
    ];

    return (
        <div className="-translate-y-12">
            <SiteContainer>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                        el: '.team-custom-pagination',
                    }}
                    autoplay={{ delay: 5000 }}
                    className="w-full"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex items-center justify-between px-4">
                                <div className="flex-1 min-w-0">
                                    <h1 className="text-5xl/loose font-medium text-nowrap">
                                        {slide.title.split("آرتین شاپ")[0]}
                                        <br /> با کفش‌های <span className="text-primary">آرتین شاپ</span>
                                    </h1>
                                </div>
                                <div className="flex-1 relative flex items-center justify-center">
                                    <Image
                                        className="absolute -z-10"
                                        src={slide.ornament}
                                        alt=""
                                        width={700}
                                        height={500}
                                        style={{ objectFit: "contain" }}
                                    />
                                    <Image
                                        className="z-10"
                                        src={slide.image}
                                        alt=""
                                        width={750}
                                        height={500}
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="flex justify-center gap-x-2">
                        <div className="team-custom-pagination"></div>
                    </div>
                </Swiper>
            </SiteContainer>
        </div>
    );
};