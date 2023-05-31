import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import MainPage from "/src/components/pages/main-page/main-page";
import Order from "/src/components/pages/order/order";
import features from "/src/mocks/features";
import products from "/src/mocks/products";
import { GlobalStyle } from "./styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "/src/const";
import ScrollToTop from "/src/components/ui/scroll-top/scroll-top";

//корневой компонент всего приложения
export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage features={features} />} />
            <Route
              path={AppRoute.ORDER.replace(AppRoute.MAIN, "")}
              element={<Order products={products} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
