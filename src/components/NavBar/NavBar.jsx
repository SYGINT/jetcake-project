import React from "react";

import { Nav, Title, Link } from "./styles";

export default function NavBar() {
  return (
    <Nav>
      <Title>JetCake Demo</Title>
      <Link href="/sign-in">Sign In</Link>
    </Nav>
  );
}
