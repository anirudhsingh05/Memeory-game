import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Winning from "./pages/WinngPage";
import IntroTwo from "./pages/IntroTwo";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/",
      element: <Intro />,
    },
    {
      path: "/intro",
      element: <IntroTwo />,
    },
    {
      path: "winning",
      element: <Winning />,
    },
  ]);

  return (
    <div>
      <img
        className="fixed -z-10 aspect-video"
        src="/img/Background.png"
        alt="background"
      />
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
