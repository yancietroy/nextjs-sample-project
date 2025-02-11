import React from "react";
import styles from "@/styles/dashboard.module.css";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />

      <div className={styles.mainContent}>{children}</div>
    </div>
  );
}
