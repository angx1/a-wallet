import { ProductMenuBar } from "@/app/components/product-menu-bar";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col justify gap-[32px] row-start-2 items-center sm:items-start w-full">
        <div className="flex flex-row gap-5 mx-auto">
          <div className="border border-grey rounded-xl w-[300px] h-[400px] text-white"></div>
          <div className="border border-grey rounded-xl w-[300px] h-[400px] text-white"></div>
        </div>
        <ProductMenuBar />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center font-mono text-center text-xs text-gray-600">
        <p>
          created by <span className="underline underline-offset-2">ahrm</span>,
          with love
        </p>
      </footer>
    </div>
  );
}
