import React, { useEffect } from 'react'
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';

const PostCard = ({ post }) => {

    return (
        <>
            <div className='bg-white shadow-lg rounded-lg  p-0 lg:p-8 pb-12 mb-8'>

                <div className=''>

                    <img src={post.node.featuredImage.url} alt={post.node.title} className="" />

                </div>

                <h1 className="transition duration-700 text-center mb-3 mt-6 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
                    <Link href={`/post/${post.node.slug}`}>{post.node.title}</Link>
                </h1>

                {/* div to display author name and picture */}


                <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
                    <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
                        <Image

                            alt={post.node.author.name}
                            height="30px"
                            width="30px"
                            className="align-middle rounded-full"
                            src={post.node.author.photo.url}
                        />
                        <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.node.author.name}</p>
                    </div>
                    <div className="font-medium text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="align-middle">{moment(post.node.createdAt).format('MMM DD, YYYY')}</span>
                    </div>
                </div>
                <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
                    {post.node.excerpt}
                </p>


                <div className='text-center'>
                    <Link href={`/post/${post.node.slug}`}>
                        <button
                            class="py-2 px-4 bg-transparent text-red-600 font-semibold border border-red-600 rounded hover:bg-red-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
                        >Continue Reading</button>
                    </Link>

                </div>
            </div>

        </>
    )
}

export default PostCard