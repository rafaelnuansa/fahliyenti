//import component Navbar

import NavbarComponent from "./NavbarComponent";

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
        <NavbarComponent/>
    </>
  )
}