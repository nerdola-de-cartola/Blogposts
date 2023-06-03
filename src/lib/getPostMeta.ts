import { getPostByName } from "./getPostByName";

export async function getPostsMeta(): Promise<Meta[] | undefined> {
   const url = "https://api.github.com/repos/nerdola-de-cartola/mdx-posts/git/trees/main?recursive=1";
   const params = {
       headers: {
           Accept: 'application/vnd.github+json',
           Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
           'X-GitHub-Api-Version': '2022-11-28',
       }
   }

   const res = await fetch(url, params);

   if (!res.ok) return undefined;

   const repoFiletree: Filetree = await res.json();

   const filesArray = repoFiletree.tree.map(obj => obj.path).filter(path => path.endsWith('.mdx'))

   const posts: Meta[] = [];

   for (const file of filesArray) {
       const post = await getPostByName(file);

       if (post) {
           const { meta } = post;
           posts.push(meta);
       }
   }

   return posts.sort((a, b) => a.date < b.date ? 1 : -1);
}