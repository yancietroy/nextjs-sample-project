
import React from "react";
import styles from "@/styles/signin.module.css";

interface InputFieldProps {
  label: string;
  type?: "text" | "password" | "email";
  name: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type = "text", name }) => (
  <div className={styles.inputField}>
    <label htmlFor={name}>{label}</label>
    <input id={name} name={name} type={type} />
  </div>
);

export default InputField;
