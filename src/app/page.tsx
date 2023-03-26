import Link from "next/link";
import { Post } from "@prisma/client";

const getPosts = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
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
          <div
            key={item.id}
            className="flex flex-col gap-2 p-4 border rounded-md"
          >
            <h1 className="text-lg font-semibold">{item.title}</h1>
            <p>{item.content}</p>
            <div className="inline-flex gap-4 mt-2">
              <Link
                href={`/update/${item.id}`}
                className="text-sm transition duration-300 hover:font-semibold hover:text-sky-700"
              >
                Update
              </Link>
              <Link
                href={"/delete"}
                className="text-sm transition duration-300 hover:font-semibold hover:text-red-700"
              >
                Delete
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
