import Head from 'next/head';
import Image from "next/image";
import { useRouter } from  "next/router";


export default function Home() {
  console.log("index.js loaded");

  const router = useRouter();
  const { locales, locale: activeLocale, defaultLocale } = router;

  return (
    <>
      <Head>
        <title>Hosei Nakajima's Home Page</title>
      </Head>
      {/* play thanos song */}
      {/* <audio controls autoPlay hidden src="/thanos.mp3"> */}
      {/* </audio> */}
      {/* sm:flex makes it so that it only uses flex on sm screen or larger*/}
      <div className="md:flex">
        <div className="m-5 md:m-10">
          {/* image of me */}
          <Image
            priority
            src="/profile.jpg"
            height={500}
            width={500}
            alt="MyPicture"
            className="rounded-full max-w-2xs md:max-w-sm"
          />
        </div>
        {/* short description */}
        <div className="mx-10 my-20 min-w-md">
          <h3 className="text-4xl">Hello and welcome!</h3>
          <div className="py-3 text-lg">
            <p>My name is Hosei Nakajima (pronounced like Jose) and I am a software developer, data analyst, and a computational biologist.</p>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
}
