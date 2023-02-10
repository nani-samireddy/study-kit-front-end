import Performance from "../Pages/Performance/Performance";
import Profile from "../Pages/Profile/Profile";
import ExamPage from "../Pages/Exampage/ExamPage";
import Homepage from "../Pages/Hompage/Homepage";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/Errorpage";
import AppLayout from "../App/AppLayout";
import { exampageLoader, examStreamPageLoader, previousPaperTestPreviewLoader, subjectsRandomTestPreviewLoader } from "../Utils/Loaders";
import StreamPage from "../Pages/Exampage/StreamPage/StreamPage";
import TestPreview from "../Pages/Exampage/Test/TestPreview";
import SignUp from "../Pages/Auth/SignUp/singup";
import SingIn from "../Pages/Auth/SignIn/signin";
import AuthProtectionWrapper from "./AuthProtectionWrapper";
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
                    element: <AuthProtectionWrapper ><Homepage /></AuthProtectionWrapper>,
                    errorElement: ErrorPage,


                },
                {
                    path: "/signup",
                    element: <SignUp />,
                    errorElement: ErrorPage,


                },
                {
                    path: "/signin",
                    element: <SingIn />,
                    errorElement: ErrorPage,
                    action: () => {
                        console.log("signin");
                    }
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
            path: "/ExamPage/:examId",
            element: <StreamPage />,
            loader: examStreamPageLoader,
            errorElement: ErrorPage,
            action: () => {
                console.log("ExamPage");
            }


        },
        {
            path: '/ExamPage/:examId/:streamId',
            element: <ExamPage />,
            loader: exampageLoader,
            errorElement: ErrorPage,




        },
        {
            path: '/tp/ppt/:previousPaperId',
            element: <TestPreview />,
            loader: previousPaperTestPreviewLoader,
            errorElement: ErrorPage,
        },
        {
            path: '/tp/:testId',
            element: <TestPreview />,
            errorElement: ErrorPage,

        },
        {
            path: '/tp/srt/:examId/streamId/:subjects',
            element: <TestPreview />,
            loader: subjectsRandomTestPreviewLoader,
            errorElement: ErrorPage,
        },
        {
            path: "*",
            element: <ErrorPage />,

        }
    ]


);

export default routes;