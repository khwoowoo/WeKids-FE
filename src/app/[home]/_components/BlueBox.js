// components/BlueBox.js
export default function BlueBox() {
  return (
    <div style={styles.box}>
      <div style={styles.accountNumber}>1234-5678-9012-3456</div>
      {/* 원하는 콘텐츠를 여기에 추가하세요 */}
    </div>
  );
}

const styles = {
  box: {
    backgroundColor: "blue",
    width: "100px",
    height: "100px",
    borderRadius: "10px",
  },
};
