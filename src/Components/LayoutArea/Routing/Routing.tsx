import { Home } from "../../Pages/Home/Home";
import { Page404 } from "../../Pages/Page404/Page404"; // Adjust the import path as necessary
import "./Routing.css";
import { Navigate, Route, Routes } from "react-router-dom";



export function Routing(): JSX.Element {
  return (
    <div className="Routing">
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* Catch-all route for 404 */}
        <Route path="*" element={<Page404 />} /> {/* Add the Page404 component here */}
         {/* Default Route: */}
         <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
}
