import { SiteContainer } from "@/lib/SiteContainer"
import Image from "next/image"
import Link from "next/link"

export const Banner2 = () => {
    return (
        <div className="pb-16 lg:pb-[116px]">
            <SiteContainer>
                <div className="flex items-center gap-14">
                    <div className="relative w-full min-h-[370px] flex items-center justify-between bg-gradient-to-t from-[#9D035A] to-[#DC0278] border-radius px-8">
                        <Image className="absolute top-0 left-5" src={"/images/Rectangle 28.png"} alt="" width={95} height={297} />
                        <Image className="absolute bottom-0 right-5" src={"/images/Rectangle 29 (2).png"} alt="" width={95} height={297} />
                        <div className="flex flex-col gap-4 text-white">
                            <h3 className="text-2xl font-bold">فروش تابستانه</h3>
                            <p>انواع محصولات درجه یک و با کیفیت</p>
                            <div className="mt-10">
                                <Link href={"#"}><button className="border-radius py-2.5 px-6 bg-white/15 border border-white">مشاهده تخفیفات</button></Link>
                            </div>
                        </div>
                        <div>
                            <Image src={"/images/banner/images (13) 2.png"} alt="" width={338} height={180} />
                        </div>
                    </div>
                    <div className="relative w-full min-h-[370px] flex items-center justify-between bg-gradient-to-t from-[#0E38B0] to-[#7854F7] border-radius px-8">
                        <Image className="absolute bottom-0 right-5" src={"/images/Rectangle 29 (3).png"} alt="" width={95} height={297} />
                        <Image className="absolute top-0 left-5" src={"/images/Rectangle 30 (2).png"} alt="" width={95} height={297} />
                        <div className="flex flex-col gap-4 text-white">
                            <h3 className="text-2xl font-bold">شگفت انگیز های روز</h3>
                            <p>50% تخفیف  تمامی کفش ها در حراج کده بهارستان 1402</p>
                            <div className="mt-10">
                                <Link href={"#"}><button className="border-radius py-2.5 px-6 bg-white/15 border border-white">رفتن به حراج کده</button></Link>
                            </div>
                        </div>
                        <div className="">
                            <Image className="" src={"/images/banner/air-max-270-react-se.png"} alt="" width={338} height={180} />
                        </div>
                    </div>
                </div>
            </SiteContainer>
        </div>
    )
}