"use client";
import React, { useState, useEffect, useRef } from 'react';
import { FiSearch, FiShoppingCart, FiHeart, FiUser, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import HomepageSlider from '@/components/home/Slider';
import Partners from '@/components/home/Partners';
import PopularProducts from '@/components/home/PopularProducts';

const HomePage = () => {
  // Sample data
  

  
  const categories = [
    { id: 1, name: "Electronics", image: "/images/cat-electronics.jpg" },
    { id: 2, name: "Fashion", image: "/images/cat-fashion.jpg" },
    { id: 3, name: "Home & Garden", image: "/images/cat-home.jpg" },
    { id: 4, name: "Beauty", image: "/images/cat-beauty.jpg" },
    { id: 5, name: "Sports", image: "/images/cat-sports.jpg" },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      oldPrice: 129.99,
      rating: 4.5,
      image: "/images/product1.jpg",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      oldPrice: 249.99,
      rating: 4.2,
      image: "/images/product2.jpg",
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 79.99,
      oldPrice: 99.99,
      rating: 4.7,
      image: "/images/product3.jpg",
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      price: 59.99,
      oldPrice: 79.99,
      rating: 4.3,
      image: "/images/product4.jpg",
    },
  ];

  const [cartCount, setCartCount] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const swiperRef = useRef(null);
  const sponsorsSwiperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Slider with Swiper */}
      <HomepageSlider />

      {/* Sponsors Carousel */}
      <Partners />

      {/* popular products */}
      <PopularProducts />

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <div key={category.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg aspect-square mb-3">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-center font-medium text-lg">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                    <FiHeart className="text-gray-600" />
                  </button>
                  {product.oldPrice && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-sm px-2 py-1 rounded">
                      {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    {renderRatingStars(product.rating)}
                    <span className="text-gray-500 text-sm ml-2">({product.rating})</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-indigo-600">${product.price}</span>
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through ml-2">${product.oldPrice}</span>
                    )}
                  </div>
                  <button 
                    className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded transition duration-300"
                    onClick={() => setCartCount(cartCount + 1)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Get the latest updates on new products and upcoming sales
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-l-lg text-gray-900 outline-none"
            />
            <button className="bg-indigo-800 hover:bg-indigo-900 px-6 py-3 rounded-r-lg font-medium transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default HomePage;