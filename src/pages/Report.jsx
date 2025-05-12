import { Container, Box } from "@mui/material";
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

const Report = () => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ width: "1000px", height: "100%" }}
    >
      <CommonTitle>${}보고서</CommonTitle>

      {/* 2열 그리드 레이아웃 컨테이너 */}
      <Box sx={{ width: "1000px" }}>
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
              <MentionTracking />
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
    </Container>
  );
};

export default Report;
