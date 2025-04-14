import {
  type RouteConfig,
  layout,
  index,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/main/MainLayout.tsx", [
    index("routes/home/Home.tsx"),
    route("contacts", "./routes/contacts/Contacts.tsx"),
  ]),
] satisfies RouteConfig;
