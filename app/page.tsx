'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="flex items-center justify-center py-6 md:py-8 border-b border-gray-200">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
      </header>

      <div className="mx-[34px]">
        <div className="mt-[182px]  ">
          {/* 내 성향에 딱 맞춘 모임 추천 서비스, */}
          <img src="/img/main/maintitle.png" alt="캐릭터" className='w-[60%] h-[30%]' />
        </div>
        <div className="mt-[8px]">
            <img src="/img/main/mainsubtitle.png" alt="캐릭터" className='w-[50%] h-[30%]' />
        </div>
        <div className="mt-[76px]">
          <img src="/img/ongi.png" alt="캐릭터" className='w-full h-[214px] object-contain' />
        </div>
        <button
          onClick={() => router.push('/questions/1')}
          className="w-full h-[65px] bg-[#28B16E] mt-[113px] flex justify-center flex-col items-center rounded-[8px] hover:bg-[#229959] transition-colors duration-300 cursor-pointer"
        >
          <div className="text-[#fff] text-[18px] font-semibold">테스트 하러가기</div>
          <div className="text-[#fff] text-[15px]">지금까지 341,256명이 참여했어요</div>
        </button>
      </div>

      {/* Footer */}
      {/* <footer className="py-6 md:py-8 text-center text-sm md:text-base text-zinc-500 border-t border-gray-200">
        <p>온기 매칭 v1.0</p>
      </footer> */}
    </main>
  );
}
