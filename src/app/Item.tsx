"use client";
import { Post } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ItemProps {
  post: Post;
}

export default function Item({ post }: ItemProps) {
  const router = useRouter();

  const deleteHandler = async (id: number) => {
    await fetch(`/api/posts?id=${id}`, {
      method: "DELETE",
    });

    router.refresh();
  };

  return (
    <div className="flex flex-col gap-2 p-4 border rounded-md">
      <h1 className="text-lg font-semibold">{post.title}</h1>
      <p>{post.content}</p>
      <div className="inline-flex gap-4 mt-2">
        <Link
          href={`/update/${post.id}`}
          className="text-sm transition duration-300 hover:font-semibold hover:text-sky-700"
        >
          Update
        </Link>
        <button
          className="text-sm transition duration-300 hover:font-semibold hover:text-red-700"
          onClick={() => deleteHandler(post.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
