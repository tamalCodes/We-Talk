import React, { useState, useEffect } from 'react';

import Link from 'next/link';


const Header = () => {
    const categories = [{ name: 'Login', slug: 'login' }, { name: 'About Us', slug: 'about-us' }, { name: 'Home', slug: 'react' }];



    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="border-b w-full inline-block border-white-800 py-8">
                <div className="text-center sm:float-left">
                    <Link href="/">
                        <span className="cursor-pointer font-bold text-4xl text-white">We Talk</span>
                    </Link>
                </div>
                <div className="hidden md:float-left md:contents">
                    {categories.map((category, index) => (
                        <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
                    ))}


                </div>
            </div>
        </div>
    );
};

export default Header;