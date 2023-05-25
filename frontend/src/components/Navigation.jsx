import Link from "next/link";
import Search from "./Search";

const links = [
  {
    label: "Inicio",
    route: "/",
  },
  {
    label: "Marvel",
    route: "/marvel",
  },
  {
    label: "Dc",
    route: "/dc",
  },
];

export function Navigation() {
  return (
    <div className="navbar bg-base-100 shadow-xl px-28 fixed z-50">
      <div className="navbar-start">
        <h1 className="text-2xl font-bold text-white">Super Heroes</h1>
      </div>
      <div className="navbar-start" >
        <ul className="menu menu-horizontal">
          {links.map(({label, route }) => (
            <li key={route}>
              <Link className="btn btn-ghost normal-case" href={route}><p className="text-xl">{label}</p></Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end" >
        <Search/>
      </div>
    </div>
  );
}
