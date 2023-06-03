
import ListItem from "@/components/ListItem";
import { getPostsMeta } from "@/lib/getPostMeta";
import Link from "next/link"

export const revalidate = 24 * 60 * 60;

type Props = {
    params: {
        tag: string
    }
}

export async function generateStaticParams() {
    const posts = await getPostsMeta();

    if (!posts) return [];

    const tags = new Set(posts.map(post => post.tags).flat());

    return Array.from(tags).map((tag) => ({ tag }));
}

export function generateMetadata({ params }: Props) {
    const { tag } = params;

    return {
        title: `Posts about ${tag}`
    };
}

export default async function TagPostList({ params }: Props) {
    const { tag }= params;
    const posts = await getPostsMeta();

    if (!posts) {
        return (
            <p className="mt-10 text-center">
                Sorry, no posts available.
            </p>
        );
    }

    const tagPosts = posts.filter(post => post.tags.includes(tag));

    if (!tagPosts.length) {
        return (
            <div className="text-center">
                <p className="mt-10">Sorry, no posts for that keyword.</p>
                <Link href="/">Back to Home</Link>
            </div>
        );
    }

    const postsList = tagPosts.map(post => (
        <ListItem key={post.id} post={post} />
    ));

    return (
        <>
            <h2 className="text-3xl mt-4 mb-0">Results for: #{tag}</h2>
            <section className="mt-6 mx-auto max-w-2xl">
                <ul className="w-full list-none p-0">
                    {postsList}
                </ul>
            </section>
        </>
    );
}