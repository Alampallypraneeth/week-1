import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddArticle from "./components/WriteArticle";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import RootLayout from "./components/RootLayout";
import UserDashboard from "./components/UserDashboard";
import AdminDashboard from "./components/AdminDashboard";
import AuthorDashboard from "./components/AuthorDashboard";
import ArticleByID from "./components/ArticleById";  
import EditArticle from "./components/EditArticle";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/protectedRoute";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement:<ErrorBoundary></ErrorBoundary>,
      children: [
        {
           path: "",
           element: <Home />
       },
        {
           path: "/register",
            element: <Register /> },
        { path: "/login", element: <Login /> },
        { path: "/addarticle", element: <AddArticle /> },
        { path: "/userdashboard", element:<ProtectedRoute> <UserDashboard />
        </ProtectedRoute> },
        { path: "/admindashboard", element: <AdminDashboard /> },
        { path: "/authordashboard", element: <AuthorDashboard /> },
        { path: "/article-by-id/:id", element: <ArticleByID /> },  
        { path: "/edit-article/:id", element: <EditArticle /> },
      ],
    },
  ]);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={routerObj} />
    </>
  );
}

export default App;