import { Outlet } from "react-router";
import React from "react";
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";

export default function MainLayout() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-8">
        <Outlet />
      </main>
      <Footer />
    </main>
  );
}
