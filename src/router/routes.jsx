import App from "../App";
import Dashboard from "../components/Dashboard";
import { createBrowserRouter, Navigate } from "react-router-dom";
import GlobalError from "../ErrorBoundary/GlobalError";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <App />, // This ensures App (with sidebar and header) always renders
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard/LE-010071" replace />,
      },
      {
        path: "dashboard/:userId",
        element: <Dashboard />,
        errorElement: <GlobalError />, // This will render within App's main content area
      },
      // ... other routes
    ],
  },
]);

export default routes;
