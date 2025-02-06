import styles from "@/styles/table.module.css";
import Image from "next/image";
import ActionColumn from "@/components/ActionColumn";

export default function DataTable() {
  const tableData = [
    {
      date: "January 20, 2025",
      time: "11:30am",
      fullName: "David Zaleski",
      id: "######",
      post: (
        <Image src="/image 1.png" alt="Post Image" width={40} height={40} />
      ),
      type: "Image",
    },
    {
      date: "January 20, 2025",
      time: "10:40am",
      fullName: "David Zaleski",
      id: "######",
      post: "I can't believe October is already over, the trees in my backyard are all three colors! 🍁",
      type: "Text",
    },
    {
      date: "January 20, 2025",
      time: "10:15am",
      fullName: "Ann Tubato",
      id: "######",
      post: "I've recently moved from New York to Chicago, I don't know many people. Looking to find someone to hangout with or go for a run. I recently broke up with my girlfriend of 5 years.",
      type: "Text",
    },
    {
      date: "January 20, 2025",
      time: "08:40am",
      fullName: "Solomon Monotilla",
      id: "######",
      post: (
        <Image src="/image 2.png" alt="Post Image" width={40} height={40} />
      ),
      type: "Image",
    },
  ];

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        {/* Table Header */}
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Full Name</th>
            <th>ID</th>
            <th>Post</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.time}</td>
              <td>
                <strong>{row.fullName}</strong>
              </td>
              <td>
                <strong>{row.id}</strong>
              </td>
              <td
                className={styles.truncatedText}
                title={typeof row.post === "string" ? row.post : ""}
              >
                {typeof row.post === "string" ? row.post : row.post}
              </td>
              <td>
                <strong>{row.type}</strong>
              </td>
              <ActionColumn />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
