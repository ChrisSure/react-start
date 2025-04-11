import { Outlet } from "react-router";
import { Header } from "~/layouts/main/components/header/header";
import { Footer } from "~/layouts/main/components/footer/footer";

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
