// src/components/CustomSearch/index.js
import React, { useState } from "react";
import { useHistory } from "@docusaurus/router";
import clsx from "clsx";

export default function CustomSearch() {
  const [query, setQuery] = useState("");
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      history.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form className={clsx("navbar__item")} onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search docs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "5px", borderRadius: "4px" }}
      />
    </form>
  );
}
