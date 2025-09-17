import React from "react";
import NavbarItem from "@theme/NavbarItem";
import { useNavbarItems } from "@docusaurus/theme-common/internal";
import clsx from "clsx";
import CustomSearch from "@site/src/components/CustomSearch";

export default function NavbarContent({ className }) {
  const items = useNavbarItems();

  return (
    <div className={clsx("navbar__items", className)}>
      {items.map((item, i) => (
        <NavbarItem {...item} key={i} />
      ))}
      <CustomSearch />
    </div>
  );
}
