import Link from "next/link";
import { Post } from "@prisma/client";
import Item from "./Item";

const getPosts = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/posts`, {
    next: {
      revalidate: 0,
    },
  });
  const posts = await res.json();
  return posts.data;
};

export default async function Home() {
  const posts: Post[] = await getPosts();

  return (
    <div className="max-w-[1000px] mx-auto py-20 px-10 md:px-4">
      <Link
        href={"/create"}
        className="px-3 py-2 text-white transition duration-300 rounded bg-sky-900 hover:bg-sky-700"
      >
        Create
      </Link>

      <div className="grid items-center grid-cols-1 gap-4 mt-8 md:grid-cols-2">
        {posts.map((item) => (
          <Item key={item.id} post={item} />
        ))}
      </div>
    </div>
  );
}
