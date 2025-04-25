import { createBrowserRouter, RouterProvider } from "react-router";

import HomePage from "./pages/Home";
import RootLayout from "./layout/RootLayout";
import Events from "./pages/Events";
import About from "./pages/About";
import Setting from "./pages/Setting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/events", element: <Events /> },
      { path: "/about", element: <About /> },
      { path: "/setting", element: <Setting /> },
    ],
  },
]);

function App() {
  return (
    <>
      <div className='relative isolate flex min-h-svh w-full flex-col bg-white lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950'>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
