"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Create() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitHandler = async (e: any) => {
    e.preventDefault();

    const res = await fetch("api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    router.push("/");
  };

  return (
    <div className="max-w-[1000px] mx-auto py-20">
      <Link
        href={"/"}
        className="px-3 py-2 text-white transition duration-300 rounded bg-sky-700 hover:bg-sky-500"
      >
        Home
      </Link>

      <div className="flex flex-col items-center justify-center flex-grow mt-20">
        <form className="w-9/12" onSubmit={submitHandler}>
          <div className="mb-6">
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add title"
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="text"
              id="content"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add content"
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
