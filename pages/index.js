import Head from "next/head";
import { PostCard, Categories, PostWidget, Header } from "../components";

const posts = [
  {
    title: "First Post",
    excerpt: "This is the first post",
    slug: "first-post",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "First Post",
    excerpt: "This is the first post",
    slug: "first-post",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "First Post",
    excerpt: "This is the first post",
    slug: "first-post",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

export default function Home() {
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
              <PostCard post={post} key={index} />
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
