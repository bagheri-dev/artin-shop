import { SiteContainer } from "@/lib/SiteContainer"
import Link from "next/link"

export const Newsletter = () => {
    return(
        <div className="pb-16 lg:pb-[116px]">
            <SiteContainer>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm text-[#003F62] font-bold">ثبت نام در خبرنامه</h3>
                        <p className="text-sm text-[#4A4A4A] font-medium">اولین نفری باشید که از جدیدترین محصولات، جشنواره ها و فروش‌های ویژه ما مطلع می شوید.</p>
                    </div>
                    <div className="flex items-center gap-x-6">
                        <div className="focus-within:outline border p-4 w-full border-radius min-w-[352px]">
                            <input className="focus-within:outline-none" name="" placeholder="شماره موبایل" />
                        </div>
                        <div>
                            <Link href={"#"}><button className="cursor-pointer border-radius py-3.5 px-11 bg-[#7854F7] text-lg text-white hover:bg-white hover:text-[#7854F7] transition-colors border hover:border border-[#7854F7]">ارسال</button></Link>
                        </div>
                    </div>
                </div>
            </SiteContainer>
        </div>
    )
}