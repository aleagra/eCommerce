import { useState } from 'react'
import { CartIcon, CloseIcon, HeartIcon, SearchIcon, UserIcon } from '../icons'
import { NavLink } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import Cart from '../pages/Cart'
function Navbar() {
    var { totalUniqueItems } = useCart()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
        document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
        setIsModalOpen(false)
        document.body.style.overflow = 'visible'
    }
    return (
        <>
            <nav className="w-full items-center flex justify-between px-12 py-5 h-[80px] border-b-2 border-[#e5e5e5]">
                <ul className="flex gap-12 text-[#9c9c9c] text-xl">
                    <NavLink to={'/'} activeclassname={'active'}>
                        Home
                    </NavLink>
                    <li>Sale</li>
                    <li>Man</li>
                    <li>Woman</li>
                    <li>Kids</li>
                </ul>
                <NavLink className="flex gap-6 h-fit items-center">
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            placeholder="Enter your search shoes..."
                            className="outline-none bg-[#f5f5f5] text-[#c5c5c5] shadow-sm rounded-lg py-3 pl-12 pr-14 text-sm"
                        />
                        <SearchIcon />
                    </div>
                    <NavLink>
                        <HeartIcon className={'w-6 h-6'} />
                    </NavLink>
                    <div onClick={openModal}>
                        <div className="flex relative">
                            <CartIcon className={'w-6 h-6 stroke-[#c5c5c5]'} />
                            <span
                                className={`px-[3px] absolute right-0 top-0 h-fit rounded-full ${
                                    totalUniqueItems > 0 ? 'bg-blue-800 text-white text-xs' : 'hidden'
                                }`}
                            >
                                {totalUniqueItems}
                            </span>
                        </div>

                        <NavLink activeclassname={'active'} className={'stroke-[#c5c5c5]'} to={'/login'}>
                            <UserIcon />
                        </NavLink>
                    </div>
                </NavLink>
            </nav>
            {isModalOpen && (
                <div className="fixed top-0 right-0 w-full z-[999] h-full flex  items-center bg-black bg-opacity-60">
                    <div className="absolute top-0 left-0 w-full h-full" onClick={closeModal}></div>

                    <div className="bg-white w-[470px] flex flex-col h-full absolute right-0">
                        <button onClick={closeModal} className="absolute top-5 right-3 text-gray-600">
                            <CloseIcon />
                        </button>
                        {Cart()}
                        <div className="relative"></div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar
