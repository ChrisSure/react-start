import { NavLink } from "react-router";

export function Header() {
  return (
    <header className="bg-blue-400 h-10 px-8 py-2 text-white flex gap-4">
      <div>Header</div>
      <div className="text-blue-800">
        <NavLink to="/contacts">Contacts</NavLink>
      </div>
    </header>
  );
}
