import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings/lib'
import rehypeHighlight from 'rehype-highlight/lib'
import rehypeSlug from 'rehype-slug'
import Video from '@/components/Video'
import CustomImage from '@/components/CustomImage'

export async function getPostByName(fileName: string): Promise<BlogPost | undefined> {
    const url = `https://raw.githubusercontent.com/nerdola-de-cartola/mdx-posts/main/${fileName}`;
    const params = {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
        }
    };

    const res = await fetch(url, params);

    if (!res.ok) return undefined;

    const rawMDX = await res.text();

    if (rawMDX === '404: Not Found') return undefined;

    const { frontmatter, content } = await compileMDX<Partial<Meta>>({
        source: rawMDX,
        components: {
            Video,
            CustomImage,
        },
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                rehypePlugins: [
                    rehypeHighlight,
                    rehypeSlug,
                    [
                        rehypeAutolinkHeadings,
                        {
                            behavior: 'wrap'
                        }
                    ],
                ],
            },
        }
    })

    const id = fileName.replace(/\.mdx$/, '');

    const blogPostObj: BlogPost = {
        meta: {
            id,
            title: frontmatter.title || "",
            date: frontmatter.date || "",
            tags: frontmatter.tags || [],
        },
        content
    };

    return blogPostObj;
}
