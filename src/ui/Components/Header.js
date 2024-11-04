// components/Header.js
export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>Logo</div>
      <div style={styles.icon}>🔍</div>{" "}
      {/* 아이콘은 원하는 이모지나 아이콘으로 변경 가능 */}
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#f0f0f0",
    borderBottom: "1px solid #ccc",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  icon: {
    fontSize: "20px",
    cursor: "pointer",
  },
};
