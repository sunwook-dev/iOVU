import {
  Container,
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
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
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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

  const clicktoConsulting = () => {
    navigate(`/report/${id}/consulting`);
  };
  const clicktoExportreport = () => {
    navigate("/");
  };

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ width: "1000px", height: "100%" }}
    >
      <CommonTitle>{initialRows[id - 1].prompt}보고서</CommonTitle>
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
      <Box>
        <CommonButton onClick={clicktoConsulting}>
          AI 컨설팅 보러가기
        </CommonButton>
        <CommonButton onClick={clicktoExportreport}>
          보고서 내보내기
        </CommonButton>
      </Box>
    </Container>
  );
};

export default Report;
