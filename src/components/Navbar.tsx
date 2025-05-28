import { Link } from "react-router-dom";
import { User, ShoppingBag, Menu } from 'lucide-react';
import { useState } from "react";
import Sidebar from "./Sidebar";


export default function Navbar() {

    const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
    console.log(isSideBarOpen);

    return (
        <div className="min-h-[100px] flex justify-between items-center md:px-16 px-6 top-0">
            <div>
                <Link to="/" className="flex items-end">
                    <p className="lg:text-5xl md:text-3xl text-4xl font-bold mr-1">Q.</p>
                    <p className="italic lg:text-3xl md:text-3xl text-2xl font-light">Studio</p>
                </Link>
            </div>
            {!isSideBarOpen && <div className="block md:hidden text-[#6B7280] cursor-pointer" onClick={() => setIsSideBarOpen(prev => !prev)}>
                <Menu className="w-6 h-6" />
            </div>}
            {isSideBarOpen && <Sidebar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen}/>}
            <div className="hidden md:hidden lg:flex justify-between gap-12 text-[#6B7280]">
                <Link to={"/"}>Home</Link>
                <Link to={"/blog"}>Blog</Link>
                <Link to={"/podcasts"}>Podcasts</Link>
                <Link to={"/books"}>Books</Link>
                <Link to={"/about"}>About</Link>
            </div>
            <div className="hidden md:flex gap-6">
                <User className="lg:w-6 lg:h-6 md:h-5 md:5 text-[#6B7280]" />
                <ShoppingBag className="lg:w-6 lg:h-6 md:h-5 md:5 text-[#6B7280]" />
            </div>
        </div>
    )
}