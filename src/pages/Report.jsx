import { Container, Grid, Box } from "@mui/material";
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
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridGap: "16px",
          width: "1000px",
        }}
      >
        {/* <Grid container spacing={2}> */}
        {/* 첫 번째 행 */}
        <Box
          // item xs={12} md={6}

          sx={{ height: "auto" }}
        >
          <EstimatedVolume />
        </Box>
        <Box
        // item xs={12} md={6}
        >
          <Snapshot />
        </Box>

        {/* 두 번째 행 */}
        <Box
        // item xs={12} md={6}
        >
          <BrandRanking />
        </Box>
        <Box
        // item xs={12} md={6}
        >
          <MentionTracking />
        </Box>

        {/* 세 번째 행 */}
        <Box
        // item xs={12} md={6}
        >
          <LinkTracking />
        </Box>
        <Box
        // item xs={12} md={6}
        >
          <ResultSummary />
        </Box>

        {/* 네 번째 행 */}
        <Box
          // item xs={12}
          gridColumn="span2"
        >
          <BrandTracking />
        </Box>

        {/* 다섯 번째 행 */}
        <Box
          // item xs={12}
          gridColumn="span2"
        >
          <DomainTr />
        </Box>

        {/* 여섯 번째 행 */}
        <Box
          // item xs={12}
          gridColumn="span2"
          sx={{ height: "auto" }}
        >
          <Analysis />
        </Box>
        {/* </Grid> */}
      </Box>
    </Container>
  );
};
export default Report;
