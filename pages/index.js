import Head from 'next/head';
import Image from "next/image";

export default function Home() {
  console.log("index.js loaded");
  return (
    <>
      <Head>
        <title>Hosei Nakajima - Home</title>
      </Head>
      {/* play thanos song */}
      <audio controls autoplay hidden src="/thanos.mp3">
      </audio>
      {/* sm:flex makes it so that it only uses flex on sm screen or larger*/}
      <div className="sm:flex">
        <div className="m-10">
        {/* image of me */}
          <Image
            priority
            src="/profile.jpg"
            height={640}
            width={640}
            alt="MyPicture"
            className="rounded-full max-w-xs sm:max-w-xs md:max-w-sm"
          />
        </div>
        {/* short description */}
        <div className="mx-10 my-20 min-w-md">
          <h3 className="text-5xl">Hello and welcome!</h3>
          <div className="py-3 text-lg">
            <p>My name is Hosei Nakajima (pronounced like Jose) and I am a full stack developer, data engineer/ analyst, and a computational biologist.</p>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
}
