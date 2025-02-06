"use client";

import styles from "@/styles/pagination.module.css";
import Image from "next/image";

export default function Pagination() {
  return (
    <div className={styles.paginationContainer}>
      {/* Rows Per Page Selector */}
      <span className={styles.label}>Rows</span>
      <select className={styles.dropdown}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>

      {/* Page Selector */}
      <span className={styles.label}>Page</span>
      <select className={styles.dropdown}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      {/* Chevron Navigation */}
      <button className={styles.chevronButton}>
        <Image
          src="/chevron-left.svg"
          alt="Previous Page"
          width={24}
          height={24}
        />
      </button>
      <button className={`${styles.chevronButton} ${styles.rotateRight}`}>
        <Image src="/chevron-left.svg" alt="Next Page" width={24} height={24} />
      </button>
    </div>
  );
}
