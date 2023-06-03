import MyProfilePic from "@/components/MyProfilePic";
import Posts from "@/components/Posts";

export const revalidate = 24 * 60 * 60;

export default function Home() {
  return (
    <div className="mx-auto">
      <MyProfilePic />
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I'm 
          <span className="font-bold">
            Matheus Lucas
          </span>.
        </span>
      </p>
      {/* @ts-expect-error Server Component */}
      <Posts />
    </div>
  )
}
