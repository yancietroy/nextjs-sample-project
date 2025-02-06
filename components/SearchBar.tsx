"use client";

import styles from "@/styles/dashboard.module.css";
import Image from "next/image";

export default function SearchBar() {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="search usernames, posts, etc."
        className={styles.searchInput}
      />
      <Image
        src="/search.svg"
        alt="Search"
        width={20}
        height={20}
        className={styles.searchIcon}
      />
    </div>
  );
}
