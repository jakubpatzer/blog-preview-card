import Image from "next/image";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-6 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-figtree)] bg-Yellow">
      <div className=" max-w-[350px] bg-White w-full p-6 border-Gray-950 border rounded-xl shadow-[5px_5px_0px_rgba(0,0,0,1)]">
        <Image 
          src='/assets/images/illustration-article.svg' 
          width={100} 
          height={100}
          alt='article illustration'
          className="rounded-xl mb-4"
          layout="responsive"
        />
        <div className="bg-Yellow text-Gray-950 rounded font-bold inline-block px-2 text-sm mb-2">
          Learning
        </div>
        <p className="text-sm text-Gray-950 mb-2">Published 21 Dec 2023</p>
        <a href="" className="block text-lg text-Gray-950 font-bold mb-3 hover:cursor-pointer active:text-Yellow">HTML & CSS foundations</a>
        <p className="text-sm text-Gray-500 mb-5">
          These languages are the backbone of every website, defining structure, content, and presentation.
        </p>
        <div className=" grid grid-cols-[auto,1fr] items-center gap-2 text-Gray-950 font-bold text-sm">
          <Image 
            src='/assets/images/image-avatar.webp'
            width={30}
            height={30}
            alt='image avatar'
          />
          Greg Hooper
        </div>
      </div>
    </div>
  );
}
