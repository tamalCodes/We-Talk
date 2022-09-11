import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../services';


const PostWidget = ({ categories, slug }) => {

    const [relatedPosts, setrelatedPosts] = useState([]);


    useEffect(() => {

        if (slug) {
            getSimilarPosts(categories, slug).then((res) => {
                setrelatedPosts(res);
            });
        } else {
            getRecentPosts().then((res) => {
                setrelatedPosts(res);

            });
        }

    }, []);



    return (
        <>
            <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">

                <h3 className="text-xl mb-8 font-semibold border-b pb-4">{slug ? 'Related Posts' : 'Recent Posts'}</h3>

                {relatedPosts.map((post, index) => (
                    <div key={index} className="flex items-center w-full mb-4">
                        <div className="w-16 flex-none">
                            <Image
                                alt={post.node.title}
                                height="60px"
                                width="60px"
                                className="align-middle rounded-full object-cover"
                                src={post.node.featuredImage.url}
                            />
                        </div>
                        <div className="flex-grow ml-4">
                            <p className="text-gray-500 font-xs">{moment(post.node.createdAt).format('MMM DD, YYYY')}</p>
                            <Link href={`/post/${post.node.slug}`} className="text-md" key={index}>{post.node.title}</Link>
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}

export default PostWidget