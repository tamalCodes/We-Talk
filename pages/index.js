import Head from "next/head";
import { PostCard, Categories, PostWidget, Header } from "../components";
import { getPosts } from "../services";

export default function Home({ posts }) {
  return (
    <>
      <div className="container mx-auto px-10 mb-8">
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* //* Centered posts */}

          <div className="lg:col-span-8 col-span-1">
            {posts.map((post, index) => (
              <PostCard post={post.node} key={index} />
            ))}
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
    </>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  //? By returning { props: posts }, the Blog component will receive `posts` as a prop at build time

  return {
    props: {
      posts,
    },
  };
}
