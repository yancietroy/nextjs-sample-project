import styles from "@/styles/verificationTable.module.css";
import Image from "next/image";

export default function VerificationTable() {
  // Table Data
  const tableData = [
    {
      date: "January 20, 2025",
      time: "11:30am",
      fullName: "David Zaleski",
      idNumber: "######",
      profilePhoto: "/image 139.png",
      verificationPhoto: "/image 139-1.png",
    },
    {
      date: "January 20, 2025",
      time: "11:30am",
      fullName: "David Zaleski",
      idNumber: "######",
      profilePhoto: "/image 139.png",
      verificationPhoto: "/image 139-1.png",
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
            <th>ID Number</th>
            <th>Profile Photo</th>
            <th>Verification Photo</th>
            <th>Action</th>
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
                <strong>{row.idNumber}</strong>
              </td>
              <td>
                <Image
                  src={row.profilePhoto}
                  alt="Profile"
                  width={240}
                  height={400}
                  className={styles.profileImage}
                />
              </td>
              <td>
                <Image
                  src={row.verificationPhoto}
                  alt="Verification"
                  width={240}
                  height={400}
                  className={styles.verificationImage}
                />
              </td>
              <td className={styles.actionColumn}>
                <button className={styles.verifyButton}>Verify</button>
                <button className={styles.rejectButton}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
