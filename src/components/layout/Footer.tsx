import { SiteContainer } from "@/lib/SiteContainer"
import Image from "next/image"
import Link from "next/link"
import { AiFillAmazonCircle } from "react-icons/ai"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6"

export const Footer = () => {
    return (
        <div className="bg-[#EBE6FE] border-t border-[#003F6280]">
            <div className="border-b border-[#003F6280]">
                <SiteContainer>
                    <div className="flex items-center justify-between py-[18px] text-[#003F62]">
                        <div>
                            <p>پشتیبانی 24 ساعته در هر روز هفته</p>
                        </div>
                        <div>
                            <p>تلفن پشتیبانی کالا: 5293792-021</p>
                        </div>
                        <div>
                            <nav>
                                <ul className="flex items-center gap-x-8">
                                    <li>
                                        <Link href={""}>راهنما</Link>
                                    </li>
                                    <li>
                                        <Link href={""}>فروشگاه</Link>
                                    </li>
                                    <li>
                                        <Link href={""}>سبد خرید</Link>
                                    </li>
                                    <li>
                                        <Link href={""}>پرسش های متداول</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </SiteContainer>
            </div>
            <div className="pt-[34px] pb-10 border-b border-[#003F6280]">
                <SiteContainer>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-[92px]">
                            <nav className="space-y-3">
                                <h3 className="text-[#003F62] font-bold">دسته‌بندی ها</h3>
                                <ul className="space-y-2 text-menu">
                                    <li>
                                        <Link href={"#"}>زنانه</Link>
                                    </li>
                                    <li>
                                        <Link href={"#"}>مردانه</Link>
                                    </li>
                                    <li>
                                        <Link href={"#"}>بچگانه</Link>
                                    </li>
                                    <li>
                                        <Link href={"#"}>زیبایی و سلامت</Link>
                                    </li>
                                </ul>
                            </nav>
                            <nav className="space-y-3">
                                <h3 className="text-[#003F62] font-bold">برند های مهم</h3>
                                <ul className="space-y-2 text-menu">
                                    <li>
                                        <Link href={"#"}>کفش نایک</Link>
                                    </li>
                                    <li>
                                        <Link href={"#"}>کفش آدیداس</Link>
                                    </li>
                                    <li>
                                        <Link href={"#"}>کفش سالومون</Link>
                                    </li>
                                    <li>
                                        <Link href={"#"}>کفش نیوبالانس</Link>
                                    </li>
                                </ul>
                            </nav>
                            <nav className="space-y-3">
                                <h3 className="text-[#003F62] font-bold">خدمات ما</h3>
                                <ul className="space-y-2 text-menu">
                                    <li>
                                        <Link href={"#"}>درباره ما</Link>
                                    </li>
                                    <li>
                                        <Link href={"#"}>تماس با ما</Link>
                                    </li>
                                    <li>
                                        <Link href={"#"}>همکاری در تجاری</Link>
                                    </li>
                                    <li>
                                        <Link href={"#"}>قوانین و مقررات</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center justify-end gap-x-8 pb-7">
                                <Link href={"#"}><AiFillAmazonCircle className="text-[#003F62] size-6"/></Link>
                                <Link href={"#"}><FaWhatsapp className="text-[#003F62] size-6"/></Link>
                                <Link href={"#"}><FaFacebook className="text-[#003F62] size-6"/></Link>
                                <Link href={"#"}><FaInstagram className="text-[#003F62] size-6"/></Link>
                            </div>
                            <div className="flex items-center gap-x-10">
                            <div>
                                    <Image src={"/images/licence/logo 1.png"} alt="" width={100} height={100} />
                                </div>
                                <div>
                                    <Image src={"/images/licence/image 84.png"} alt="" width={100} height={100} />
                                </div>
                                <div>
                                    <Image src={"/images/licence/star1 1.png"} alt="" width={100} height={100} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-10">
                        <h3 className="text-[#003F62] font-bold mb-3">درباره ما</h3>
                        <p className="text-menu leading-8">کتپوش برخلاف بسیاری از فروشگاه ها، به صورت تخصصی بر روی کفش و کتونی تمرکز کرده است تا بتواند در این حوزه بهترین محصولات و خدمات ممکن را ارائه دهد. مهم ترین هدف کتپوش ارائه کتونی و کفش با بالاترین کیفیت ممکن در دنیاست تا علاوه بر رضایت مشتریان یک خرید لذت بخش را ارائه دهد.</p>
                    </div>
                </SiteContainer>
            </div>
            <div className="flex items-center justify-center py-4 text-sm text-menu">
                <span>تمام حقوق مادی و معنوی این سایت متعلق به فروشگاه اینترنتی آرتین شاپ می باشد.</span>
            </div>
        </div>
    )
}