import {
  Container,
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import EstimatedVolume from "../component/report/EstimatedVolume";
import Snapshot from "../component/report/Snapshot";
import BrandRanking from "../component/report/BrandRanking";
import MentionTracking from "../component/report/MentionTracking";
import LinkTracking from "../component/report/LinkTracking";
import ResultSummary from "../component/report/ResultSummary";
import BrandTracking from "../component/report/BrandTracking";
import DomainTr from "../component/report/DomainTr";
import Analysis from "../component/report/Analysis";
import CommonTitle from "../component/common/CommonTitle";
import CommonButton from "../component/common/CommonButton";
import { TbFileExport } from "react-icons/tb";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const initialRows = [
  { id: 1, prompt: "뭐시키1", volume: 11, date: "2025.01.01" },
  { id: 2, prompt: "뭐시키2", volume: 12, date: "2025.01.02" },
  { id: 3, prompt: "뭐시키3", volume: 13, date: "2025.01.03" },
  { id: 4, prompt: "뭐시키4", volume: 14, date: "2025.01.04" },
];

const initialItems = [
  { id: 1, value: 6, date: "05-06" },
  { id: 2, value: 13, date: "05-13" },
  { id: 3, value: 20, date: "05-20" },
];

const Report = () => {
  let lastValue = initialItems[initialItems.length - 1].value;
  const [date, setDate] = useState(lastValue);
  const { id } = useParams();
  const [selectedModel, setSelectedModel] = useState("ChatGPT");
  const navigate = useNavigate();

  // 로딩 및 알림 상태 추가
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  const reportId = parseInt(id, 10);

  const isValidId =
    !isNaN(reportId) && reportId > 0 && reportId <= initialRows.length;

  const currentReport = isValidId ? initialRows[reportId - 1] : initialRows[0];

  useEffect(() => {
    if (id && !isValidId) {
      navigate("/report/1");
    }
  }, [id, isValidId, navigate]);

  // PDF 내보내기 함수
  const exportReport = async () => {
    if (!isValidId) {
      setSnackbar({
        open: true,
        message: "유효한 보고서 ID가 필요합니다.",
        severity: "error",
      });
      return;
    }

    setLoading(true);

    try {
      console.log(`보고서 내보내기 요청: /reports/${reportId}/export`);

      const response = await axios.get(
        `http://localhost:8081/reports/${reportId}/export`,
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
      a.download = `domain_report_${reportId}.pdf`;
      document.body.appendChild(a);
      a.click();

      // 리소스 정리
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      // 성공 메시지 표시
      setSnackbar({
        open: true,
        message: "보고서가 성공적으로 내보내기 되었습니다.",
        severity: "success",
      });
    } catch (error) {
      console.error("보고서 내보내기 중 오류 발생:", error);

      // 더 자세한 오류 정보 로깅
      if (error.response) {
        console.error("응답 상태:", error.response.status);
        console.error("응답 헤더:", error.response.headers);
      } else if (error.request) {
        console.error("요청 정보:", error.request);
      }

      // 오류 메시지 표시
      setSnackbar({
        open: true,
        message: `보고서 내보내기 중 오류가 발생했습니다: ${
          error.message || "알 수 없는 오류"
        }`,
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  // 알림 닫기 핸들러
  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const clicktoConsulting = () => {
    navigate("/report/${id}/consulting");
  };

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ width: "1000px", height: "100%" }}
    >
      <CommonTitle>{currentReport.prompt}보고서</CommonTitle>
      <Box
        sx={{
          mb: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          rowGap: 4,
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          날짜 :
          <FormControl>
            <InputLabel
              id="demo-simple-select-label"
              sx={{
                px: 2,
              }}
            >
              선택한 날짜
            </InputLabel>
            <Select
              label="선택한 날짜"
              id="demo-simple-select"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              sx={{
                mx: 2,
                minWidth: 140,
              }}
            >
              {initialItems.map((item) => (
                <MenuItem key={item.id} value={item.value}>
                  {item.date}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            columnGap: 4,
          }}
        >
          <CommonButton
            color={selectedModel === "ChatGPT" ? "third" : "primary"}
            onClick={() => setSelectedModel("ChatGPT")}
          >
            ChatGPT
          </CommonButton>
          <CommonButton
            color={selectedModel === "Gemini" ? "third" : "primary"}
            onClick={() => setSelectedModel("Gemini")}
          >
            Gemini
          </CommonButton>
        </Box>
      </Box>

      {/* 2열 그리드 레이아웃 컨테이너 */}
      <Box sx={{ width: "1000px", mb: 4 }}>
        {/* 두 개의 열 컨테이너를 Flex로 구성 */}
        <Box sx={{ display: "flex", gap: "16px" }}>
          {/* 왼쪽 열 */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <Box>
              <EstimatedVolume />
            </Box>
            <Box>
              <BrandRanking />
            </Box>
            <Box>
              <MentionTracking />
            </Box>

            <Box>
              <LinkTracking />
            </Box>
          </Box>

          {/* 오른쪽 열 */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <Box>
              <Snapshot />
            </Box>
            <Box>
              <ResultSummary />
            </Box>
          </Box>
        </Box>

        {/* 전체 너비를 차지하는 컴포넌트들 */}
        <Box
          sx={{
            marginTop: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <Box>
            <BrandTracking />
          </Box>
          <Box>
            <DomainTr />
          </Box>
          <Box>
            <Analysis />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          width: "100%",
          mt: 2,
        }}
      >
        <CommonButton color="third" onClick={clicktoConsulting}>
          AI 컨설팅 보러가기
        </CommonButton>
        <CommonButton
          variant="outlined"
          onClick={exportReport}
          disabled={loading || !isValidId}
        >
          {loading ? (
            <CircularProgress size={24} sx={{ color: "inherit" }} />
          ) : (
            <>
              보고서 내보내기
              <TbFileExport style={{ marginLeft: "8px" }} />
            </>
          )}
        </CommonButton>
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

export default Report;
