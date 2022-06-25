import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import { Hom } from "./Hom";
import { Profile } from "./Profile";
import ProtectedRoute from "./protectedRoute/ProtectedRoute";

export const Fasak = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hom />} />
        <Route path="/profile" element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
};
