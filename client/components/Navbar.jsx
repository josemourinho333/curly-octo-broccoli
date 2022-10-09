import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

const NavBarItems = ({ title, classProps }) => {
  return (
    <li className={`mx-4 cursor-pointer ${classProps}`}>
      {title}
    </li>
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const title = ["Market", "Exchange", "Tutorial", "Wallets"];

  return (
    <nav className="w-full flex md:justify-center justify-between items-cetner p-4">
      <div className="md:flex-[0.5] flex-initial justfiy-center items-center">
        <h1><a href="/">Home</a></h1>
      </div>
      <ul className="md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {title.map((item, index) => {
            return <NavBarItems key={item+index} title={item} />
          }
        )}
        <li className="bg-[#2952e3] text-white py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Log In
        </li>
      </ul>
      <div className="flex relative">
        {toggleMenu
          ? <AiOutlineClose fontSize={28} className="md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
          : <HiMenuAlt4 fontSize={28} className="md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md bg-blue-300">
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {title.map((item, index) => {
                return <NavBarItems key={item+index} title={item} clasProps="my-2 text-lg"/>
              }
            )}
          </ul>
        )

        }
      </div>
      
    </nav>
  )
}

export default Navbar;