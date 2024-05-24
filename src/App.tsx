import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/404/PageNotFound";
import Home from "./pages/explore/Explore";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import ForgetPassword from "./pages/auth/ForgetPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import Jobs from "./pages/jobs/Jobs";
import ScrollToTop from "./shared/ScrollToTop";
import PostJob from "./pages/post_job/PostJob";
import GoogleTagManager from "./shared/GoogleTag";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import JobDetails from "./pages/jobs/JobDetails";
import FullProfile from "./pages/profile/FullProfile";
import ContactUs from "./pages/contact_us/ContactUs";
import Faq from "./pages/faqs/Faq";
import PrivacyPolicy from "./pages/privacy_policy/PrivacyPolicy";
import CategoriesJob from "./pages/explore/components/CategoriesJob";
import ProRegister from "./pages/auth/ProRegister";
import Index from "./pages/proDashboard/Index";
import ProLogin from "./pages/auth/ProLogin";
import ApplyJob from "./pages/apply_job/ApplyJob";
import { ChatSupport } from "./pages/chat/ChatSupport";
import AboutUs from "./pages/about_us/AboutUs";
import Construction from "./pages/404/Construction";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Directwayz</title>
        <meta
          name="DirectWayz GH"
          content="With DirectWayz GH, you can explore all current vacancies with
          ease, from Top Employers in Ghana, to Internship
          Opportunities. What are you waiting for? Jump on the Wagon and
          lets get you earning a living!"
        />
        <link rel="canonical" href="https://directwayzgh.com/" />
      </Helmet>
      <div className="App">
{/*         <Construction/> */}
        <GoogleTagManager />
        <ScrollToTop />
        <Toaster />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/categories-jobs" element={<CategoriesJob />} />
            <Route path="/job-details/:id" element={<JobDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/post-job" element={<PostJob />} />
            <Route path="/profile" element={<FullProfile />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/faqs" element={<Faq />} />
            <Route path="/chats" element={<ChatSupport />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/apply-job" element={<ApplyJob />} />
            <Route path="/pro/register" element={<ProRegister />} />
            <Route path="/pro/login" element={<ProLogin />} />
            <Route path="/pro/dashboard" element={<Index />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </div>
    </HelmetProvider>
  );
}

export default App;
