import { useState } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import AppBarIn from "./components/AppBar/AppBarIn";
import AppBarOut from "./components/AppBar/AppBarOut";
import isUserLogged from "./utils/IsUserLogged";
import PrivateRoutes from "./utils/PrivateRoutes";
import PublicRoutes from "./utils/PublicRoutes";
import HomePrivate from "./pages-private/HomePrivate";
import Footer from "./components/Footer/Footer"
import SuppliersPage from "./pages-private/SuppliersPage";
import ClientRegistration from "./pages-private/ClientRegistration";
import SupplierRegistration from "./pages-private/SupplierRegistration";
import ServiceRequestRegistration from "./pages-private/ServiceRequestRegistration";
import AppServiceRegistration from "./pages-private/AppServiceRegistration";
function App() {
  return (
    <HashRouter>
      <div>
        {isUserLogged() ? <AppBarIn /> : <AppBarOut />}
        <div>
          <Routes>
            <Route element={<PublicRoutes />}>
              <Route path="/home" element={<HomePrivate />} />
            </Route>
            <Route element={<PrivateRoutes />}>
              <Route path="/home-in" element={<HomePrivate />} />
               <Route path="/suppliers" element={<SuppliersPage />} />
               <Route path="/client-registration" element={<ClientRegistration />} />
               <Route path="/supplier-registration" element={<SupplierRegistration />} />
               <Route path="/service-request-form" element={<ServiceRequestRegistration />} />
               <Route path="/app-service-form" element={<AppServiceRegistration />} />
              {/*<Route path="/supplier-register" element={<SupplierRegister />} />
              <Route path="/expense" element={<ViewExpensesPage />} />
              <Route path="/dashboard" element={<DashboardPage />} /> */}
            </Route>
            <Route path="*" element={<HomePrivate />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </HashRouter>
  );
}

export default App;
