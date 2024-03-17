import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./pages/Error";
import Main from "./pages/Main";

const SignIn = React.lazy(() => import("./pages/SignIn"));
const SignUp = React.lazy(() => import("./pages/SignUp"));

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <Error />,
    },
    {
      path: "/signup",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <SignUp />
        </Suspense>
      ),
      errorElement: <Error />,
    },
    {
      path: "/signin",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <SignIn />
        </Suspense>
      ),
      errorElement: <Error />,
    },
    {
      path: "/error",
      element: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
