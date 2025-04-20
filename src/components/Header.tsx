import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, User } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import Cart from './Cart';

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((count, item) => count + (item.quantity || 1), 0);

  return (
    <>
      <header className="bg-[#131921] text-white sticky top-0 z-50">
        <div className="flex items-center p-2 flex-grow">
          <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
            <span className="text-2xl font-bold cursor-pointer px-4">amazon</span>
          </div>

          <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
            <input
              className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 text-black"
              type="text"
              placeholder="Search products"
            />
            <Search className="h-12 p-4 text-gray-800" />
          </div>

          <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
            <div className="link">
              <p>Hello, Sign in</p>
              <p className="font-extrabold md:text-sm">Account & Lists</p>
            </div>

            <div className="link">
              <p>Returns</p>
              <p className="font-extrabold md:text-sm">& Orders</p>
            </div>

            <div 
              className="relative link flex items-center cursor-pointer"
              onClick={() => setIsCartOpen(true)}
            >
              <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                {itemCount}
              </span>
              <ShoppingCart className="h-10" />
              <p className="hidden md:inline font-extrabold md:text-sm mt-2">Cart</p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3 p-2 pl-6 bg-[#232F3E] text-white text-sm">
          <p className="link flex items-center">
            <Menu className="h-6 mr-1" />
            All
          </p>
          <p className="link">Prime Video</p>
          <p className="link">Amazon Business</p>
          <p className="link">Today's Deals</p>
          <p className="link hidden lg:inline-flex">Electronics</p>
          <p className="link hidden lg:inline-flex">Food & Grocery</p>
          <p className="link hidden lg:inline-flex">Prime</p>
          <p className="link hidden lg:inline-flex">Buy Again</p>
          <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
          <p className="link hidden lg:inline-flex">Health & Personal Care</p>
        </div>
      </header>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}