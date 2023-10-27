import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "./components/common/error-element";
import { Student, Admin } from "./App";
import { Instructor } from "./App";
import DashHome from "./components/pages/student-dash/dash-home";



const LazyStudentDash = lazy(
  () => import("./components/pages/student-dash/user-dashboard")
);


const LazyStudentProfile = lazy(
  () => import("./components/pages/student-dash/my-profile")
);

const LazyStudentCourses = lazy(
  () => import("./components/pages/student-dash/my-courses")
);

const LazyStudentHomePage = lazy(
  () => import("./components/pages/students/student-home-page")
);

const LazyStudentLogin = lazy(
  () => import("./components/pages/students/student-login-page")
);
const LazyStudentRegister = lazy(
  () => import("./components/pages/students/student-registration-page")
);
const LazyInstructorLogin = lazy(
  () => import("./components/pages/instructors/instructor-login-page")
);
const LazyInstructorRegister = lazy(
  () => import("./components/pages/instructors/instructor-register-page")
);


const LazyAboutUs = lazy(() => import("./components/pages/about/about-us"));

const LazyContactPage = lazy(
  () => import("./components/pages/contact/contact-us")
);

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Student />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyStudentHomePage />
          </Suspense>  
        ),
      },
      {
        path: "/courses",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyListCourse />
          </Suspense>
        ),
      },
      {
        path: "/courses/:courseId",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyViewCourse />
          </Suspense> 
        ),
      },
      {
        path: "/courses/:courseId/watch-lessons/:lessonId",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyWatchLesson />
          </Suspense>
        ),
      },
      {
        path: "/tutors", 
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyInstructorsListing />
          </Suspense>
        ),
      },
      {
        path: "/tutors/:tutorId",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyViewInstructor />
          </Suspense>
        ),
      },
      {
        path: "/community",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCommunity />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyAboutUs />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyContactPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyStudentDash />
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: <DashHome />,
      },
      {
        path: "my-courses",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyStudentCourses />
          </Suspense>
        ),
      },
      {
        path: "my-profile",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyStudentProfile />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "courses/:courseId/payment",
    element: <StripeContainer />,
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyStudentLogin />
      </Suspense>
    ),
  },
  {
    path: "/register",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyStudentRegister />
      </Suspense>
    ),
  },
  {
    path: "/instructors/login",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyInstructorLogin />
      </Suspense>
    ),
  },
  {
    path: "/instructors/register",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyInstructorRegister />
      </Suspense>
    ),
  },
  {
    path: "admin",
    element: <Admin />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<div>loading...</div>}>
            <LazyAdminHome />
          </Suspense>
        ),
      },
      {
        path: "instructors",
        element: (
          <Suspense fallback={<div>loading...</div>}>
            <LazyInstructorIndex />
          </Suspense>
        ),
        children: [
          {
            path: "requests",
            element: (
              <Suspense fallback={<div>loading...</div>}>
                <LazyInstructorRequests />
              </Suspense>
            ),
          },
          {
            path: "requests/:id",
            element: (
              <Suspense fallback={<div>loading...</div>}>
                <LazyViewMoreInstructorRequest />
              </Suspense>
            ),
          },
          {
            path: "blocked",
            element: (
              <Suspense fallback={<div>loading...</div>}>
                <LazyViewBlockedInstructors />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "students",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyStudents />
          </Suspense>
        ),
      },
      {
        path: "categories",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCategories />
          </Suspense>
        ),
        children: [
          {
            path: "",
            element: <ListCategories />,
          },
          {
            path: "add-category",
            element: <AddCategory />,
          },
          {
            path: "edit-category/:categoryId",
            element: <EditCategory />,
          },
        ],
      },
    ],
  },
  {
    path: "instructors",
    element: <Instructor />,
    // errorElement: <ErrorElement />,
    children: [
      {
        path: "/instructors",
        element: <InstructorDashboard />,
      },
      {
        path: "add-course",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyAddCourse />
          </Suspense>
        ),
      },
      {
        path: "view-course",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyListCourseInstructors />
          </Suspense>
        ),
      },
      {
        path: "edit-course/:courseId",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyEditCourse />
          </Suspense>
        ),
      },
      {
        path: "view-lessons/:courseId",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyViewLesson />
          </Suspense>
        ),
      },
      {
        path: "view-lessons/:courseId/edit-lesson/:lessonId",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyEditLesson />
          </Suspense>
        ),
      },
      {
        path: "view-students",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyMyStudents />
          </Suspense>
        ),
      },
      {
        path: "view-profile",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyInstructorProfile />
          </Suspense>
        ),
      },
      {
        path: "view-channels",
        element: <InstructorChannels />,
      },
    ],
  },
]);
export default AppRouter;
