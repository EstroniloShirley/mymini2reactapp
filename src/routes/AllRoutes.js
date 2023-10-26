import { Routes, Route, Form } from 'react-router-dom';
import {
  Categories,
  FlashSale,
  Home,
  JustForYou,
  MostPopular,
  Search,
} from '../pages';
export const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path=""
        element={<Home />}
      />
    </Routes>
  );
};
