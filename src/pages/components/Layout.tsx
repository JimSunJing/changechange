import Image from "next/image";
import type { PropsWithChildren } from "react";

export const PageLayout = (props: PropsWithChildren) => {
  return (
    <main className="flex h-screen justify-center ">
      <div className="h-full w-full border-x-2 border-slate-300 md:max-w-2xl">
        <Logo />
        {props.children}
      </div>
    </main>
  );
};

const Logo = () => {
  return (
    <div className="flex items-center justify-center border-b border-slate-400 bg-amber-200">
      <Image
        height={96}
        width={96}
        src="/changechangeLOGO.png"
        alt="changechangeLOGO"
      />
    </div>
  );
};
