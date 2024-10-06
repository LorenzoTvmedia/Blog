import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import MyPostsHome from "./pages/myposts";
import MyPosts from "./pages/myposts/MyPosts";
import AddNewPost from "./pages/myposts/AddPost";
import EditPost from "./pages/myposts/EditPost";
import PostDetails from "./pages/myposts/PostDetails";
import PostsHome from "./pages/home";
import NotFound from "./pages/404/NotFound";
import ForgotPassword from "./pages/forgotPassword";
import ResetPassword from "./pages/resetPassword";
import EmailVerification from "./pages/signup/EmailVerification";
import Founderseries from "./pages/founderseries/Founderseries";
import Aboutus from "./pages/aboutus/Aboutus";
import Blogpost from "./pages/blogpost/Blogpost";
import Profile from "./pages/profile/Profile";

// Dynamic Imports (Lazy - loading)
const Home = lazy(() => import("./pages/home/Home"));

// Error Boundary FallbackComponent: This is the function that will be called whenever the errorboundary component caught an error
const ErrorFallback = (props) => {
  return (
    <div role="alert" className="boundary__error">
      <p>Something went wrong!</p>
      <pre>{props.error.message}</pre>
      <button onClick={props.resetErrorBoundary}>Restart app</button>
    </div>
  );
};

const App = () => {
  const navigate = useNavigate();
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        navigate("/");
      }}
    >
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Navigate to="/posts" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />}>
            <Route path="verifyEmail/:token" element={<EmailVerification />} />
          </Route>
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword" element={<ResetPassword />} />

          {/* Nexted Route */}
          <Route path="/posts" element={<PostsHome />}>
            <Route path="" element={<Home />} />
            <Route path="/posts/blogpost" element={<Blogpost />} />
            <Route path=":postId" element={<PostsHome />}>
              <Route path="" element={<PostDetails />} />
              <Route path="edit" element={<EditPost />} />
            </Route>
          </Route>

          {/* Nexted Route */}
          <Route path="/myposts" element={<MyPostsHome />}>
            <Route path="" element={<MyPosts />} />
            <Route path="addpost" element={<AddNewPost />} />
            <Route path=":postId" element={<PostsHome />}>
              <Route path="" element={<PostDetails />} />
              <Route path="edit" element={<EditPost />} />
            </Route>
          </Route>

          {/* <Route path="/about" element={<Aboutus />}/> */}

          <Route path="/founderseries" element={<Founderseries/>}/>
          <Route path="/profile" element={<Profile />}/>

          {/* Routes that will be matched if none of the route(s) is matched */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};
export default App;
