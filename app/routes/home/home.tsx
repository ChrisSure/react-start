import { Welcome } from "~/routes/home/components/welcome/welcome";
import type { Route } from "../../../.react-router/types/app/+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home Page" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
