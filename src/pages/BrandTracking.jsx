import BrandTrackingChart from "../component/charts/BrandTrackingChart";
const BrandTracking = () => {
  return (
    <div
      style={{
        backgroundColor: "#d9d9d9", // 연한 회색 배경
        borderRadius: "10px",
        padding: "16px",
        width: "100%",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "flex-start",
        fontSize: "12px",
        fontWeight: "bold",
      }}
    >
      <BrandTrackingChart />
    </div>
  );
};

export default BrandTracking;
