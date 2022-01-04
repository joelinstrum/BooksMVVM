import { Routes, Route } from "react-router-dom";

import { BooksListPage, BookDetailsPage, AuthorsListPage } from "./Views";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route element={<BooksListPage />} path="/" />
      <Route element={<BookDetailsPage />} path="/book" />
      <Route element={<AuthorsListPage />} path="/authors" />
    </Routes>
  );
};

export default CustomRoutes;
