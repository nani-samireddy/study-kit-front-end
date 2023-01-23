import Performance from "./Pages/Performance/Performance";
import Profile from "./Pages/Profile/Profile";
import ExamPage from "./Pages/Exampage/ExamPage";
import Homepage from "./Pages/Hompage/Homepage";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage/Errorpage";
import AppLayout from "./App/AppLayout";
import { exampageLoader, examStreamPageLoader, previousPaperTestPreviewLoader, fullRandomTestPreviewLoader, subjectsRandomTestPreviewLoader } from "./Utils/Loaders";
import StreamPage from "./Pages/Exampage/StreamPage/StreamPage";
import TestPreview from "./Pages/Exampage/Test/TestPreview";
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
            path: "/ExamPage/:examId",
            element: <StreamPage />,
            loader: examStreamPageLoader,
            errorElement: ErrorPage,

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
            path: '/tp/frt/:examId/:streamId',
            element: <TestPreview />,
            loader: fullRandomTestPreviewLoader,
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