import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "온기 - 성향기반 취미매칭 플랫폼",
  description: "내 성향에 딱 맞는 취미 모임을 찾아드립니다. 성향 테스트를 통해 나와 잘 맞는 클럽과 사람들을 만나보세요.",
  keywords: ["온기", "취미매칭", "성향테스트", "모임추천", "클럽매칭", "취미모임", "성향분석", "친구찾기", "취미생활", "소모임"],
  authors: [{ name: "온기" }],
  openGraph: {
    title: "온기 - 성향기반 취미매칭 플랫폼",
    description: "내 성향에 딱 맞는 취미 모임을 찾아드립니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="antialiased">
        <div className="flex justify-center min-h-screen bg-gray-100">
          <div className="w-full md:w-[568px] lg:w-[524px] bg-white md:shadow-xl relative">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
