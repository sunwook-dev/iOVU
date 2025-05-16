import BrandColumn from "./BrandColumn";
import CommonButton from "../../component/common/CommonButton";
import { Box, Container, Snackbar, Alert } from "@mui/material";
import CommonTitle from "../../component/common/CommonTitle";
import BrandTracking from "../BrandTracking";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const DashBoard = ({ reportId }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [dashboardData, setDashboardData] = useState(null);
  const [error, setError] = useState(null);
  // 알림 상태 추가
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "info", // "error", "warning", "info", "success"
  });

  useEffect(() => {
    console.log("현재 report_detail_id:", id);

    // ID가 유효한지 확인
    if (!id) {
      console.warn(
        "ID가 없습니다. 기본값을 사용하거나 사용자에게 알림을 표시하세요."
      );
    }

    // 샘플 대시보드 데이터를 가져오는 함수를 여기에 추가할 수 있습니다
    // fetchDashboardData();
  }, [id]);

  const fetchDashboardData = async () => {
    if (!id) return;

    setLoading(true);
    setError(null);

    try {
      // API 엔드포인트 설정 (아직 구현되지 않은 경우 주석 처리)
      const response = await axios.get(
        `http://localhost:8081/report/${id}/dashboard`
      );

      console.log("대시보드 데이터 응답:", response.data);
      setDashboardData(response.data);

      // 성공 메시지
      setSnackbar({
        open: true,
        message: "대시보드 데이터를 성공적으로 불러왔습니다.",
        severity: "success",
      });
    } catch (err) {
      console.error("대시보드 데이터 가져오기 오류:", err);
      setError(err.message || "데이터를 불러오는 중 오류가 발생했습니다.");

      // 오류 메시지
      setSnackbar({
        open: true,
        message: "데이터를 불러오는 중 오류가 발생했습니다.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const stats1 = [
    { label: "요약 결과", value: "1" },
    { label: "브랜드 가시성", value: "10% (10)" },
    { label: "브랜드 평균 순위", value: "#4" },
    { label: "도메인 인용 비율", value: "10% (10)" },
    { label: "브랜드 언급 수", value: "23" },
  ];
  const stats2 = [
    { label: "요약 결과", value: "2" },
    { label: "브랜드 가시성", value: "10% (10)" },
    { label: "브랜드 평균 순위", value: "#3" },
    { label: "도메인 인용 비율", value: "10% (10)" },
    { label: "브랜드 언급 수", value: "23" },
  ];
  const stats3 = [
    { label: "요약 결과", value: "3" },
    { label: "브랜드 가시성", value: "10% (10)" },
    { label: "브랜드 평균 순위", value: "#3" },
    { label: "도메인 인용 비율", value: "10% (10)" },
    { label: "브랜드 언급 수", value: "23" },
  ];

  // 대시보드 PDF 내보내기 함수
  const exportDashboard = async () => {
    if (!id) {
      setSnackbar({
        open: true,
        message: "보고서 ID가 없습니다.",
        severity: "error",
      });
      return;
    }
    setLoading(true);
    try {
      // 로딩 상태 표시 등의 UI 처리를 추가할 수 있습니다
      const response = await axios.get(
        `http://localhost:8081/dashboard/${id}/export/all`,
        {
          responseType: "blob", // 중요: 바이너리 데이터를 위한 responseType 설정
        }
      );
      console.log("PDF 응답 받음:", response);
      console.log("PDF 크기:", response.data.size, "바이트");
      // Blob URL 생성 및 다운로드
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `dashboard_all_${id}.pdf`;
      document.body.appendChild(a);
      a.click();

      // 리소스 정리
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      // 성공 메시지 표시
      setSnackbar({
        open: true,
        message: "대시보드가 성공적으로 내보내기 되었습니다.",
        severity: "success",
      });
    } catch (error) {
      console.error("대시보드 내보내기 중 오류 발생:", error);

      // 오류 메시지 표시
      setSnackbar({
        open: true,
        message: "대시보드 내보내기 중 오류가 발생했습니다.",
        severity: "error",
      });
    }
  };

  // 알림 닫기 핸들러
  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Container
      sx={{
        width: "1000px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginBottom: "20px",
      }}
    >
      <CommonTitle>Dash Board</CommonTitle>
      <Box
        sx={{ display: "flex", flexDirection: "column", p: 2, width: "100%" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "20px",
          }}
        >
          <CommonButton variant="outlined" onClick={exportDashboard}>
            내보내기 📩
          </CommonButton>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <BrandColumn brandName="ChatGPT" stats={stats1} />
          <BrandColumn brandName="Gemini" stats={stats2} />
          <BrandColumn brandName="Claude" stats={stats3} />
        </div>
      </Box>

      {/* 알림 표시 */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default DashBoard;
