import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom'

import SearchContainer from "./SearchContainer/SearchContainer";
import New from "./New/New";
import Details from "./Details/Details";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<SearchContainer />} />
        <Route path='/new' element={<New />} />
        <Route path='/pokemon/:id' element={<Details />} />
      </Routes>
    </main>
  );
};

export default Main;
