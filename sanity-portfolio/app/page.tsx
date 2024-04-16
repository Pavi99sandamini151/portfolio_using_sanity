import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
// import HeroSvg from "./icons/HeroSvg";
import Job from "./components/Job"; // import job component

export default async function Home() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="max-w-7xl mx-auto lg:px-16 px-6">
      <section> // code truncated for brevity
        {/* <HeroSvg /> */}
      </section>
      <Job /> // declare job component
    </main>
  );
}