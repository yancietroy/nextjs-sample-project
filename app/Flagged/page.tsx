"use client";

import styles from "@/styles/dashboard.module.css";
import SearchBar from "@/components/SearchBar";
import DataTable from "@/components/DataTable";
import Pagination from "@/components/Pagination";

export default function FlaggedPage() {
  return (
    <div className={styles.dashboardContent}>
      <h1 className={styles.pageTitle}>Flagged</h1>

      <SearchBar />

      {/* ✅ Now Flagged Table Works Correctly */}
      <DataTable isFlaggedTable={true} />

      <Pagination />
    </div>
  );
}
