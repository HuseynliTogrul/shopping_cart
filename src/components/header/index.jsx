import React from 'react'
import { Link } from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from 'react-redux';
import { FaRegHeart } from "react-icons/fa";

const Header = () => {

    const { cart } = useSelector((state) => state)
    const totalItems = cart.reduce((acc, item) => acc + item.count, 0)

    return (
        <div>
            <nav className='flex items-center justify-between h-20 max-w-6xl mx-auto'>
                <Link to={"/"}>
                    <div>
                        <h1 className='font-bold text-xl cursor-pointer text-[25px] text-red-950'>---Shoppig Cart</h1>
                    </div>
                </Link>
                <ul className='flex list-none items-center text-gray-800 font-semibold relative'>
                    <Link to={"/cart"}>
                        <li className='text-[25px] cursor-pointer hover:text-red-500'><TiShoppingCart /></li>
                    </Link>
                    {
                        totalItems > 0 && (
                            <div className="absolute top-[-13px] right-[-13px] bg-[seagreen] text-white rounded-full w-6 h-6 flex justify-center items-center">
                                {totalItems}
                            </div>
                        )
                    }
                    <Link to={"/heart"}>
                        <li className='text-[25px] cursor-pointer hover:text-red-500'><FaRegHeart /></li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Header