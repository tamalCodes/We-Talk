import React, { useEffect } from 'react';
import { PostCard, Categories, PostWidget, Header, Author, CommentsForm, Comments } from "../../components";
import { getPosts, getPostDetails } from "../../services";
import { useRouter } from 'next/router'
import Head from 'next/head';


const PostDetails = ({ post }) => {
    const router = useRouter()
    const { slug } = router.query

    // useEffect(() => {
    //     console.log(post);
    // }, [])


    return (
        <div className="container mx-auto px-10 mb-8">
            <Head>
                <title>{`Post | ${post.post.title}`}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* //* Centered posts */}

                <div className="lg:col-span-8 col-span-1">
                    <PostCard post={post.post} />
                    <Author />
                    <CommentsForm />
                    <Comments />
                </div>

                {/* //* Right side posts */}
                <div className="lg:col-span-4 col-span-1">
                    {/* //* Parent for recent posts, categories  */}
                    <div className="lg:sticky relative top-8">
                        <PostWidget />
                        <Categories />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PostDetails;

export async function getStaticProps(context) {
    const { slug } = context.params;
    const post = await getPostDetails(slug);
    console.log(post);

    //? By returning { props: posts }, the Blog component will receive `posts` as a prop at build time

    return {
        props: {
            post: JSON.parse(JSON.stringify(post)),
        }, // will be passed to the page component as props
    }
}


// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
    const posts = await getPosts();
    return {
        paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
        fallback: true,
    };
}



