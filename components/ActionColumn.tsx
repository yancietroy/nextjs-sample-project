"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/table.module.css";

export default function ActionColumn() {
  const [verified, setVerified] = useState(false);

  const handleVerifyClick = () => {
    setVerified(!verified);
  };

  return (
    <td className={styles.actionColumn}>
      <button
        className={`${styles.verifyButton} ${verified ? "verified" : ""}`}
        onClick={handleVerifyClick}
      >
        <Image
          src={verified ? "/circle-check-filled.svg" : "/circle-check.svg"}
          alt={verified ? "Approved" : "Approve"}
          width={24}
          height={24}
        />
      </button>
      <Image
        src="/red-flag.svg"
        alt="Flag"
        width={24}
        height={24}
        className={styles.flagIcon}
      />
    </td>
  );
}