import MyProfilePic from "@/components/MyProfilePic";
import Posts from "@/components/Posts";

export default function HomePage() {
  return (
    <main className="px-6 mx-auto">
      <MyProfilePic /> 
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Matheus Lucas</span>.
        </span>
      </p>
      <Posts />
    </main>
  )
}