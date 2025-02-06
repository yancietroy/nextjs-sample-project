"use client";

import styles from "@/styles/dashboard.module.css";
import Logo from "@/components/Logo";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();
  return (
    <aside className={styles.sidebar}>
      {/* Sidebar Logo */}
      <div className={styles.logo}>
        <Logo width={16} height={40} />
      </div>

      <nav className={styles.menu}>
        <Image src="/Home.svg" alt="Home" width={24} height={24} />
        <button
          className={styles.checkButton}
          onClick={() => router.push("/verified")}
        >
          <Image src="/Verified.svg" alt="Check" width={24} height={24} />
        </button>
        <Image src="/flag.svg" alt="Flag" width={24} height={24} />
      </nav>

      <div className={styles.bottomMenu}>
        <Image src="/gear.svg" alt="Settings" width={24} height={24} />
        <button
          className={styles.logoutButton}
          onClick={() => router.push("/")}
        >
          <Image src="/logout.svg" alt="Logout" width={24} height={24} />
        </button>
      </div>
    </aside>
  );
}
