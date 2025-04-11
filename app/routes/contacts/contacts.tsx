import { Welcome } from "~/routes/contacts/components/welcome/welcome";
import type { Route } from "../../../.react-router/types/app/+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contacts Page" },
    { name: "description", content: "Welcome to Contacts!" },
  ];
}

export default function Contacts() {
  return <Welcome />;
}
