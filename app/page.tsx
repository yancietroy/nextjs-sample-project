import React from "react";
import styles from "@/styles/signin.module.css";
import Logo from "@/components/Logo";
import BackButton from "@/components/BackButton";
import SignInForm from "@/components/SignInForm";

export default function SignInPage() {
  return (
    <div className={styles.container}>
      {/* Left Section: Logo & Branding */}
      <div className={styles.leftSection}>
        <div className={styles.backButtonContainer}>
          <BackButton />
        </div>
        <div className={styles.logoContainer}>
          <div className={styles.logoGroup}>
            <Logo width={25} height={60} className={styles.signInLogo} />
            <h1 className={styles.logoText}>lighthouse</h1>
          </div>
          <h5 className={styles.portalText}>admin portal</h5>
        </div>
      </div>

      {/* Right Section: Sign-In Form */}
      <div className={styles.rightSection}>
        <div className={styles.card}>
          <SignInForm />
        </div>
      </div>
    </div>
  );
}
