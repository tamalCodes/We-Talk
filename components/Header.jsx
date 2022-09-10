import React, { useState, useEffect } from 'react';

import Link from 'next/link';


const Header = () => {
    const categories = [{ name: 'React', slug: 'react' }, { name: 'React', slug: 'react' }, { name: 'React', slug: 'react' }, { name: 'React', slug: 'react' }];



    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="border-b w-full inline-block border-white-800 py-8">
                <div className="md:float-left block">
                    <Link href="/">
                        <span className="cursor-pointer font-bold text-4xl text-white">Graph CMS</span>
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