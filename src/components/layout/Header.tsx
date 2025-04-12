"use client"
import { SiteContainer } from "@/lib/SiteContainer"
import Link from "next/link"
import CartIcon from "../UI/svgs/shoppingCart"
import SearchIcon from "../UI/svgs/search"

const menuData = [
    {
        name: "مردانه",
        src: "",
        child: [
            {
                name: "",
                src: ""
            }
        ]
    },
    {
        name: "زنانه",
        src: "",
        child: [
            {
                name: "",
                src: ""
            }
        ]
    },
    {
        name: "بچگانه",
        src: "",
        child: [
            {
                name: "",
                src: ""
            }
        ]
    },
    {
        name: "شگفت انگیز",
        src: "",
        child: [
            {
                name: "",
                src: ""
            }
        ]
    },
    {
        name: "جدیدترین ها",
        src: "",
        child: [
            {
                name: "",
                src: ""
            }
        ]
    },
    {
        name: "بلاگ",
        src: "",
        child: [
            {
                name: "",
                src: ""
            }
        ]
    },
    {
        name: "پشتیبانی",
        src: "",
        child: [
            {
                name: "",
                src: ""
            }
        ]
    },
]

export const Header = () => {
    return (
        <header>
            <div>
                <SiteContainer>
                    <div className="flex items-center justify-between py-5">
                        <div>
                            <p className="text-3xl"><span className="text-primary">آرتین</span> شاپ</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-center border rounded-lg px-4 py-4 min-w-[406px] focus-within:outline-1">
                                <input className="w-full h-full focus-within:outline-none" type="search" name="" id="" placeholder="جستجو کنید" /> < SearchIcon />
                            </div>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <Link href={"#"}><button className="cursor-pointer">ورود / عضویت</button></Link>
                            <Link href={"#"}><button className="cursor-pointer flex items-center gap-x-2 py-2.5 px-6 bg-[#FF4842] text-white rounded-lg"> <CartIcon /> سبد خرید</button></Link>
                        </div>
                    </div>
                </SiteContainer>
                <div className="bg-[#F3F3F3] py-5 border-y border-[#80003F62]">
                    <SiteContainer>
                        <nav className="flex items-center justify-center">
                            <ul className="flex items-center gap-x-10">
                                {menuData.map((item, index) => {
                                    return <Link key={index} href={item.src}>
                                        <li>{item.name}</li>
                                    </Link>
                                })}
                            </ul>
                        </nav>
                    </SiteContainer>
                </div>
            </div>
        </header>
    )
}