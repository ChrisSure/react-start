import {
  type RouteConfig,
  layout,
  index,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/main/main.layout.tsx", [
    index("routes/home/home.tsx"),
    route("contacts", "./routes/contacts/contacts.tsx"),
  ]),
] satisfies RouteConfig;
