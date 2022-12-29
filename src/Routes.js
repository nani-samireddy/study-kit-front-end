
import Performance from "./Pages/Performance/Performance";
import Profile from "./Pages/Profile/Profile";
import ExamPage from "./Pages/Exampage/ExamPage";
import Homepage from "./Pages/Hompage/Homepage";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage/Errorpage";
import AppLayout from "./App/AppLayout";
import { exampageLoader } from "./Utils/Loaders";
const routes = createBrowserRouter(
    [
        {
            path: "/",
            element: <AppLayout />,
            errorElement: ErrorPage,
            children: [
                {
                    path: "/",
                    index: true,
                    element: <Homepage />,
                    errorElement: ErrorPage,
                },
                {
                    path: "/Performance",
                    element: <Performance />,
                    errorElement: ErrorPage,
                },
                {
                    path: "/Profile",
                    element: <Profile />,
                    errorElement: ErrorPage,
                },

                {
                    path: "/*",
                    element: <ErrorPage />,

                }
            ],
        },
        {
            path: "/ExamPage/:examName",
            element: <ExamPage />,
            loader: exampageLoader,
            errorElement: ErrorPage,
        },
        {
            path: "*",
            element: <ErrorPage />,

        }
    ]


);

export default routes;