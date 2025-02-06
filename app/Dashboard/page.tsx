import React from "react";
import styles from "@/styles/dashboard.module.css";
import SearchBar from "@/components/SearchBar";
import DataTable from "@/components/DataTable";
import Pagination from "@/components/Pagination";

export default function DashboardPage() {
  return (
    <div className={styles.dashboardContent}>
      <h1 className={styles.pageTitle}>dashboard</h1>

      <SearchBar />

      <DataTable />

      <Pagination />
    </div>
  );
}
