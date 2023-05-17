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
      <div className="flex content-evenly">
      {/* image of me */}
        <Image
          priority
          src="/profile.jpg"
          height={500}
          width={500}
          alt="MyPicture"
          className="rounded-full m-10"
        />
      {/* short description */}
        <div className="my-20">
          <h3 className="text-5xl">Hello and welcome!</h3>
          <p>My name is Hosei Nakajima (pronounced like Jose) and I am a full stack developer, data engineer/ analyst, and a translator.</p>
        </div>
      </div>
    </>
  );
}
