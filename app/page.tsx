import Link from "next/link";

export default function Home() {
  return (
    <main style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome</h1>
      <p>This is the homepage. Click below to sign in.</p>
      <Link href="/signin">
        <button style={{ padding: "10px 20px", fontSize: "16px" }}>Go to Sign In</button>
      </Link>
    </main>
  );
}
