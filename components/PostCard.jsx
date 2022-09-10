import React, { useEffect } from 'react'
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({ post }) => {

    useEffect(() => {
        console.log(post.node);
    }, []);

    return (
        <>
            <div className='bg-white shadow-lg rounded-lg rounded-sm p-0 lg:p-8 pb-12 mb-8'>

                <div className=''>

                    <img src={post.node.featuredImage.url} alt={post.node.title} className="" />
                </div>

                <h1 className=' transition duration-700 text-3xl font-semibold text-center mt-6 hover:text-pink-600 cursor-pointer'>
                    <Link href={`/post/${post.node.slug}`}>
                        {post.node.title}
                    </Link>
                </h1>


                <h2 className='text-center mt-2 cursor-pointer'>{post.node.excerpt} </h2>
            </div>

        </>
    )
}

export default PostCard