import Link from "next/link";

export default function Home() {
  return (
    <div className="w-[1000px] mx-auto py-20">
      <Link
        href={"/create"}
        className="px-3 py-2 text-white transition duration-300 rounded bg-sky-700 hover:bg-sky-500"
      >
        Create
      </Link>

      <div className="grid items-center grid-cols-1 gap-4 mt-8 md:grid-cols-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <div key={item} className="flex flex-col p-4 border rounded-md">
            <h1>Title</h1>
            <p>Content</p>
            <div className="inline-flex gap-4 mt-4">
              <Link
                href={"/update"}
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
