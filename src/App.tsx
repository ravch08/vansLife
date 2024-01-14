import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {
  About,
  ErrorPage,
  Home,
  Host,
  HostDashBoard,
  HostIncome,
  HostReviews,
  HostVanInfo,
  HostVanPhotos,
  HostVanPrice,
  HostVans,
  HostVansDetail,
  Layout,
  Login,
  Page404,
  Register,
  VanDetails,
  Vans,
} from "./components/utils/helper";

import { loader as vanDetailLoader } from "./components/pages/VanDetails";
import { loader as vansLoader } from "./components/pages/Vans";
import { loader as hostVansLoader } from "./components/sections/HostVans.tsx";
import { loader as hostVanDetailLoader } from "./components/sections/HostVansDetail.tsx";

import "./server";
import "./styles/app.css";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
    },
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<ErrorPage />}
      />
      <Route
        path="vans/:id"
        element={<VanDetails />}
        loader={vanDetailLoader}
        errorElement={<ErrorPage />}
      />
      <Route path="host" element={<Host />}>
        <Route index element={<HostDashBoard />} />
        <Route path="income" element={<HostIncome />} />
        <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
        <Route
          path="vans/:id"
          element={<HostVansDetail />}
          loader={hostVanDetailLoader}
        >
          <Route index element={<HostVanInfo />} />
          <Route path="price" element={<HostVanPrice />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
        <Route path="reviews" element={<HostReviews />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<Page404 />} />
    </Route>,
  ),
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools position="bottom" initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
