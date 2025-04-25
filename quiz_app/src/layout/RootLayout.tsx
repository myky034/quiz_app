import { Outlet } from "react-router";
import MainNavigation from "../components/MainNavigation";

export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className='flex flex-1 flex-col pb-2 lg:px-2'>
        <div className='grow p-6 lg:rounded-lg lg:bg-white lg:p-10 lg:ring-1 lg:shadow-xs lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10'>
          <Outlet />
        </div>
      </main>
    </>
  );
}
