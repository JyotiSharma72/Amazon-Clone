import React from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import ProductFeed from './components/ProductFeed';

function App() {
  return (
    <div className="bg-gray-100">
      <Toaster position="bottom-right" />
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <div className="relative">
          <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
          <img 
            src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Banner"
            className="w-full h-[500px] object-cover"
          />
        </div>

        <ProductFeed />
      </main>
    </div>
  );
}

export default App;