import Image from "next/image";

export default function Home() {
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

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 lg:px-16 py-12 md:py-16 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-black dark:text-zinc-50 mb-4 md:mb-6">
          온기 매칭 앱
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 mb-8 md:mb-10 max-w-md">
          시작하려면 page.tsx 파일을 수정하세요.
        </p>

        <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full md:w-auto">
          <a
            className="flex h-12 md:h-14 items-center justify-center gap-2 rounded-lg bg-foreground px-6 md:px-8 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:min-w-[180px]"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            배포하기
          </a>
          <a
            className="flex h-12 md:h-14 items-center justify-center rounded-lg border border-solid border-black/[.08] px-6 md:px-8 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:min-w-[180px]"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            문서 보기
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 md:py-8 text-center text-sm md:text-base text-zinc-500 border-t border-gray-200">
        <p>온기 매칭 v1.0</p>
      </footer>
    </main>
  );
}
