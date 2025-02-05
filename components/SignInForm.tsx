import styles from "@/styles/signin.module.css";
import Image from "next/image";

export default function SignInForm() {
  return (
    <form className={styles.signInCard}>
      <h2 className={styles.signInTitle}>sign in</h2>

      <div className={styles.passwordLinks}>
        <span>forgot password?</span>
        <a href="#">reset password</a>
      </div>

      {/* Email Input */}
      <div className={styles.inputGroup}>
        <label>email address</label>
        <input type="email"  />
      </div>

      {/* Password Input with Eye Icon (Static) */}
      <div className={styles.inputGroup}>
        <label>password</label>
        <div className={styles.passwordField}>
          <input type="password"  />
          <Image 
            src="/eye-open.svg" 
            alt="Eye Icon" 
            width={20} 
            height={20} 
            className={styles.eyeIcon} 
          />
        </div>
      </div>


      <button type="button" className={styles.signInButton} >
        sign in
      </button>
    </form>
  );
}
