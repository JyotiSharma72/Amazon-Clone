import React from 'react';
import { Star } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import toast from 'react-hot-toast';

const products = [
  {
    id: 1,
    title: "2024 Latest Laptop",
    price: 999.99,
    description: "High-performance laptop with the latest specifications, featuring a stunning 4K display, powerful processor, and all-day battery life",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    rating: 4.5
  },
  {
    id: 2,
    title: "Wireless Noise Cancelling Headphones",
    price: 199.99,
    description: "Premium wireless headphones with active noise cancellation, perfect for immersive listening experience",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    rating: 4.8
  },
  {
    id: 3,
    title: "Smart Watch Series 5",
    price: 299.99,
    description: "Advanced smartwatch with health monitoring features, GPS, and cellular connectivity",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    rating: 4.3
  },
  {
    id: 4,
    title: "4K Ultra HD Smart TV",
    price: 799.99,
    description: "55-inch 4K Smart TV with HDR, featuring stunning picture quality and smart home integration",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    rating: 4.6
  },
  {
    id: 5,
    title: "Professional Camera Kit",
    price: 1299.99,
    description: "Complete professional camera kit with multiple lenses and accessories for stunning photography",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    rating: 4.9
  },
  {
    id: 6,
    title: "Organic Coffee Beans",
    price: 24.99,
    description: "Premium organic coffee beans, freshly roasted and sourced from sustainable farms",
    category: "Food & Grocery",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    rating: 4.7
  },
  {
    id: 7,
    title: "Yoga Mat Premium",
    price: 49.99,
    description: "Extra thick and comfortable yoga mat with perfect grip and carrying strap",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    rating: 4.4
  },
  {
    id: 8,
    title: "Designer Leather Bag",
    price: 159.99,
    description: "Handcrafted genuine leather bag with modern design and multiple compartments",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    rating: 4.6
  },
  {
    id: 9,
    title: "Smart Home Security System",
    price: 299.99,
    description: "Complete home security system with cameras, sensors, and mobile app integration",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    rating: 4.5
  },
  {
    id: 10,
    title: "Wireless Gaming Mouse",
    price: 79.99,
    description: "High-precision wireless gaming mouse with customizable RGB lighting",
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    rating: 4.8
  },
  {
    id: 11,
    title: "Stainless Steel Water Bottle",
    price: 29.99,
    description: "Vacuum insulated stainless steel water bottle, keeps drinks cold for 24 hours",
    category: "Sports & Outdoors",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    rating: 4.7
  },
  {
    id: 12,
    title: "Wireless Earbuds",
    price: 129.99,
    description: "True wireless earbuds with premium sound quality and long battery life",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    rating: 4.6
  }
];

export default function ProductFeed() {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (product: any) => {
    addItem(product);
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products.map((product) => (
        <div key={product.id} className="relative flex flex-col m-5 bg-white z-30 p-10 rounded-lg">
          <p className="absolute top-2 right-2 text-xs italic text-gray-400">{product.category}</p>

          <img src={product.image} alt={product.title} className="h-200 w-200 object-contain" />

          <h4 className="my-3 font-medium">{product.title}</h4>
          
          <div className="flex">
            {Array(Math.round(product.rating))
              .fill(null)
              .map((_, i) => (
                <Star key={i} className="h-5 text-yellow-500" fill="currentColor" />
              ))}
          </div>

          <p className="text-xs my-2 line-clamp-2">{product.description}</p>

          <div className="mb-5">
            <p className="text-xl font-bold">${product.price}</p>
          </div>

          <button 
            onClick={() => handleAddToCart(product)}
            className="mt-auto button bg-yellow-400 hover:bg-yellow-500 p-2 rounded-md font-semibold"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}