import { remark } from 'remark'
import html from 'remark-html'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'blogposts')

export default async function getPostData(id: string) {
   const fullPath = path.join(postsDirectory, `${id}.md`);
   const fileContents = fs.readFileSync(fullPath, 'utf8');

   // Use gray-matter to parse the post metadata section
   const matterResult = matter(fileContents);

   const processedContent = await remark()
      .use(html)
      .process(matterResult.content);

   const contentHtml = processedContent.toString();

   const blogPostWithHTML: BlogPost & { contentHtml: string } = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      contentHtml,
   }

   // Combine the data with the id
   return blogPostWithHTML
}