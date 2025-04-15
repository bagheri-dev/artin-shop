import { SiteContainer } from "@/lib/SiteContainer"
import Image from "next/image"
import Link from "next/link"

export const Banner1 = () => {
    return (
        <div className="pb-16 lg:pb-[116px]">
            <SiteContainer>
                <div className="relative bg-gradient-to-t from-[#F3395A] to-[#B92241] flex items-center justify-between ps-9 border-radius min-h-[371px]">
                    <Image className="absolute left-5 top-0" src={"/images/Rectangle 30 (1).png"} alt="" width={95} height={297} />
                    <Image className="absolute right-5 bottom-0" src={"/images/Rectangle 29 (1).png"} alt="" width={95} height={297} />
                    <div className="text-white font-bold">
                        <p className="text-2xl mb-4">50 درصد تخفیف ویژه</p>
                        <p className="leading-8">یک استایل شیک و متفاوت را با کفش های اسپرت ما تجربه کنید. ارائه انواع کفش ورزشی با مدل های متنوع. خرید با قیمت‌های باورنکردنی فقط تا 24 اردیبهشت ماه. بشتابید و تا فرصت به اتمام نرسیده از این تخفیف استثنایی استفاده کنید.</p>
                        <div className="mt-6">
                            <Link href={"#"}><button className="border-radius py-2.5 px-6 bg-white/15 border border-white">مشاهده تخفیفات</button></Link>
                        </div>
                    </div>
                    <div className="relative w-full">
                        <Image className="absolute -top-[285px]" src={"/images/banner/Nike-Huarache-Type_1_.png"} alt="banner1" width={700} height={200} />
                    </div>
                </div>
            </SiteContainer>
        </div>
    )
}