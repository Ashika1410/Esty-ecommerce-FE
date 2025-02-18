import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useState } from 'react';
import { Dialog, DialogPanel, PopoverGroup, } from '@headlessui/react';
import SearchComponent from '../UI/Components/SearchComponent';
import { useSelector } from "react-redux";
import { TfiMenuAlt } from "react-icons/tfi";
import Country from '../UI/Components/Country';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchProduct, setSearchProduct] = useState('');
  const SearchUser = (event) => {
    setSearchProduct(event.target.value);
  };
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <>
      <section>
        <div className="header border-y-2">
          <nav className="nav-bar flex flex-row p-3 space-x-16">
            <div><a href='/' className="text-4xl text-orange-600 hover:text-orange-500 italic font-bold">Etsy</a></div>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-2 rounded-md bg-white px-3 py-2 text-xl font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  <TfiMenuAlt size={24} /> Category
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="/hergifts"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Jewellary
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="/baby"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Clothings
                    </a>
                  </MenuItem>
                </div>
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="/wedding"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Wedding
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="/hisgifts"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Accessories
                    </a>
                  </MenuItem>
                </div>
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="/house"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Home & Living
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="/potraites"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Art & collabities
                    </a>
                  </MenuItem>
                </div>
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="/birthday"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Book,Filim & Music
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
            <div className='flex justify-center'>
              <SearchComponent searchProduct={searchProduct}
                SearchUser={SearchUser} />
            </div>
            <a href="/signin">
              <button type='sign-in' className='w-32 h-12 text-lg text-white rounded-lg bg-blue-600 hover:bg-blue-300'><p>Sign-in</p></button>
            </a>
            {/* <a href="/"> */}
              <button type="button"  onClick={() => setIsOpen(true)} className='h-12 rounded-lg bg-transparent'> {isOpen && (<Country />)} 
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0414f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flag"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" x2="4" y1="22" y2="15" /></svg></button>
            {/* </a> */}
            <a href="/wishlist">
              <button type="button" className='h-12 rounded-lg bg-transparent'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f10404" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg></button>
            </a>
            <a href="/gifts">
              <button type="button" className='h-12 rounded-lg bg-transparent'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f1046b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gift"><rect x="3" y="8" width="18" height="4" rx="1" /><path d="M12 8v13" /><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" /><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" /></svg></button>
            </a>
            <a href="/cart">
              <button type="button" className='h-12 rounded-lg bg-transparent'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#04caf1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
                {totalItems > 0 && (
                  <span className="absolute top-4 right-8 bg-red-500 text-white text-sm font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>)}
              </button>
            </a>
          </nav>

          <header className="bg-white">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-center lg:px-8">


              <PopoverGroup className="hidden lg:flex lg:gap-x-12 object-cover object-center group-hover:opacity-65 mt-2">

                <a href="/hisgifts" className="text-sm font-medium leading-6 text-gray-900 hover:bg-gray-200 rounded-full p-2">
                  <i className="fa-solid fa-gift"></i>Gift Mode
                </a>
                <a href="/potraites" className="text-sm font-medium leading-6 text-gray-900 hover:bg-gray-200 rounded-full p-2">
                  Creative Potraites
                </a>
                <a href="/house" className="text-sm font-medium leading-6 text-gray-900 hover:bg-gray-200 rounded-full p-2">
                  Home Favorites
                </a>
                <a href="/hergifts" className="text-sm font-medium leading-6 text-gray-900 hover:bg-gray-200 rounded-full p-2">
                  Fashion Finds
                </a>
                <a href="/anniversary" className="text-sm font-medium leading-6 text-gray-900 hover:bg-gray-200 rounded-full p-2">
                  Registry
                </a>
              </PopoverGroup>

            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
              <div className="fixed inset-0 z-10 mt-2" />
              <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="py-6">
                      <a
                        href="/gifts"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-900"
                      >
                        <i className="fa-solid fa-gift"></i>Gift Mode
                      </a>
                      <a
                        href="/potraites"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-900"
                      >
                        Creative Potraites
                      </a>
                      <a
                        href="/house"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-900"
                      >
                        Home Favorites
                      </a>
                      <a
                        href="/"
                        className="-mx-3 block rounded-full px-3 py-2 text-base font-medium leading-7 text-gray-700 hover:bg-gray-900"
                      >
                        Fashion Finds
                      </a>
                      <a
                        href="/"
                        className="-mx-3 block rounded-full px-3 py-2 text-base font-medium leading-7 text-gray-700 hover:bg-gray-900"
                      >
                        Registry
                      </a>
                    </div>

                  </div>
                </div>
              </DialogPanel>
            </Dialog>
          </header>
        </div>
      </section>
    </>
  )
}