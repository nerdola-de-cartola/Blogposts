import Link from "next/link";

export default function NotFound() {
   return (
      <main className="px-6 mx-auto flex items-center flex-col">
         <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
            <span>
               Sorry 😅
            </span>
            <br />
            <span className="whitespace-nowrap">
               We couldn&apos;t find your post
            </span>
         </p>
         <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
            <Link href="/">← Back to home</Link>
         </p>
      </main>
   )
}