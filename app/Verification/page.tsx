import React from "react";
import styles from "@/styles/dashboard.module.css";
import SearchBar from "@/components/SearchBar";
import Pagination from "@/components/Pagination";
import VerificationTable from "@/components/VerificationTable";

export default function DashboardPage() {
  return (
    <div className={styles.dashboardContent}>
      <h1 className={styles.pageTitle}>dashboard</h1>

      <SearchBar />

      <VerificationTable />

      <Pagination />
    </div>
  );
}
