import { User, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isSideBarOpen, setIsSideBarOpen }: { isSideBarOpen: boolean, setIsSideBarOpen?: (value: boolean) => void }) => {
    return (
        <div
            id="sidebar"
            className={`fixed top-0 right-0 h-full w-64 bg-white shadow-sm transform ${isSideBarOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out md:hidden z-50`}
        >
            <div className="flex justify-between items-center p-6 cursor-pointer">
                <Link to={"/profile"} className='rounded-full border-2 p-2 border-[#6B7280]'>
                    <User className="lg:w-6 lg:h-6 md:h-5 md:5 text-[#6B7280]" />
                </Link>
                {setIsSideBarOpen &&
                    <X className="w-6 h-6 text-[#abafb7] cursor-pointer" onClick={() => setIsSideBarOpen(false)} />
                }
            </div>
            <div className="flex flex-col gap-6 px-8 py-4 text-[#6B7280] text-md">
                <Link to="/" onClick={() => setIsSideBarOpen?.(false)}>
                    Home
                </Link>
                <Link to="/blog" onClick={() => setIsSideBarOpen?.(false)}>
                    Blog
                </Link>
                <Link to="/podcasts" onClick={() => setIsSideBarOpen?.(false)}>
                    Podcasts
                </Link>
                <Link to="/books" onClick={() => setIsSideBarOpen?.(false)}>
                    Books
                </Link>
                <Link to="/about" onClick={() => setIsSideBarOpen?.(false)}>
                    About
                </Link>
            </div>
        </div>
    );
}

export default Sidebar
