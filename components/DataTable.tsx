"use client";

import styles from "@/styles/table.module.css";
import Image from "next/image";
import ActionColumn from "@/components/ActionColumn";
import { useState, useEffect } from "react";

// ✅ Define TableRow Interface
interface TableRow {
  id: number;
  date: string;
  time: string;
  fullName: string;
  post: string;
  type: string;
}

export default function DataTable({ isFlaggedTable = false }) {
  const [tableData, setTableData] = useState<TableRow[]>([]);

  useEffect(() => {
    if (isFlaggedTable) {
      // ✅ Load flagged items from localStorage for Flagged Table
      const storedFlagged = JSON.parse(
        localStorage.getItem("flaggedItems") || "[]"
      );
      setTableData(storedFlagged);
    } else {
      // ✅ Load default hardcoded data for Dashboard
      setTableData([
        {
          id: 1,
          date: "January 20, 2025",
          time: "11:30am",
          fullName: "David Zaleski",
          post: "/image 1.png",
          type: "Image",
        },
        {
          id: 2,
          date: "January 20, 2025",
          time: "10:40am",
          fullName: "David Zaleski",
          post: "I can't believe October is already over, the trees in my backyard are all three colors! 🍁",
          type: "Text",
        },
        {
          id: 3,
          date: "January 20, 2025",
          time: "10:15am",
          fullName: "Ann Tubato",
          post: "I've recently moved from New York to Chicago, I don't know many people. Looking to find someone to hang out with or go for a run. I recently broke up with my girlfriend of 5 years.",
          type: "Text",
        },
        {
          id: 4,
          date: "January 20, 2025",
          time: "08:40am",
          fullName: "Solomon Monotilla",
          post: "/image 2.png",
          type: "Image",
        },
      ]);
    }
  }, [isFlaggedTable]);

  // ✅ Fix: Explicitly Type `id` as `number`
  const handleFlagRow = (id: number) => {
    if (!isFlaggedTable) {
      const flaggedItem = tableData.find((row) => row.id === id);
      if (flaggedItem) {
        // ✅ Ensure proper storage of text and images
        const cleanedItem = {
          ...flaggedItem,
          id: Date.now(), // Ensure unique ID
          post: flaggedItem.type === "Image" ? flaggedItem.post : flaggedItem.post, // Store image path correctly
        };

        const existingFlagged = JSON.parse(
          localStorage.getItem("flaggedItems") || "[]"
        );

        const updatedFlagged = [...existingFlagged, cleanedItem].filter(
          (item, index, self) =>
            index === self.findIndex((t) => t.id === item.id)
        );

        localStorage.setItem("flaggedItems", JSON.stringify(updatedFlagged));

        setTableData((prevData) => prevData.filter((row) => row.id !== id));
      }
    }
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Full Name</th>
            <th>Post</th>
            <th>Type</th>
            {!isFlaggedTable && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              <td>{row.date}</td>
              <td>{row.time}</td>
              <td>
                <strong>{row.fullName}</strong>
              </td>
              <td
                className={styles.truncatedText}
                title={typeof row.post === "string" ? row.post : ""}
              >
                {row.type === "Image" ? (
                  <Image
                    src={row.post}
                    alt="Flagged Image"
                    width={40}
                    height={40}
                    unoptimized
                  />
                ) : (
                  row.post
                )}
              </td>

              <td>
                <strong>{row.type}</strong>
              </td>
              {!isFlaggedTable && (
                <ActionColumn onFlag={() => handleFlagRow(row.id)} />
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
