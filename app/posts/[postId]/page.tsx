import getFormattedDate from "@/lib/getFormattedDate"
import { notFound } from "next/navigation"
import Link from "next/link"
import getPosts from "@/lib/getPosts"
import getPostData from "@/lib/getPostData"

type Props = {
   params: {
      postId: string;
   }
}

export function generateStaticParams() {
   const posts = getPosts()

   return posts.map((post) => ({
      postId: post.id
   }))
}

export function generateMetadata({ params: {
   postId
} }: Props) {

   const posts = getPosts()

   console.log(posts);

   console.log(postId);

   const post = posts.find(post => post.id === postId)

   console.log(post);

   if (!post) {
      return {
         title: `Post ${postId} Not Found`
      }
   }

   return {
      title: post.title,
      description: post.title
   }
}

export default async function Post({ params: {
   postId
} }: Props) {
   const posts = getPosts()

   if (!posts.find(post => post.id === postId)) notFound()

   const { title, date, contentHtml } = await getPostData(postId)

   return (
      <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
         <h1 className="text-3xl mt-4 mb-0">
            {title}
         </h1>
         <p className="mt-0">
            {getFormattedDate(date)}
         </p>
         <article>
            <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
            <p>
               <Link href="/">← Back to home</Link>
            </p>
         </article>
      </main>
   )
}