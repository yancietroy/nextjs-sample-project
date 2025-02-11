"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/table.module.css";


interface ActionColumnProps {
  onFlag: () => void;
}

export default function ActionColumn({ onFlag }: ActionColumnProps) {
  const [verified, setVerified] = useState(false);

  const handleVerifyClick = () => {
    setVerified(!verified);
  };

  return (
    <td className={styles.actionColumn}>
      {/* Verify Button */}
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

      {/* Flag Button */}
      <button onClick={onFlag} className={styles.flagButton}>
        <Image src="/red-flag.svg" alt="Flag" width={24} height={24} />
      </button>
    </td>
  );
}
