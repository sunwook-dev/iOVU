import { Container, Grid } from "@mui/material";
// import EstimatedVolume from "../component/report/EstimatedVolume";
// import Snapshot from "../component/report/Snapshot";
import BrandRanking from "../component/report/BrandRanking";
// import MentionTracking from "../component/report/MentionTracking";
// import LinkTracking from "../component/report/LinkTracking";
// import ResultSummary from "../component/report/ResultSummary";
// import BrandTracking from "../component/report/BrandTracking";
// import DomainTr from "../component/report/DomainTr";
// import Analysis from "../component/report/Analysis";
import CommonTitle from "../component/common/CommonTitle";

const Report = () => {
  return (
    <Container sx={{ width: "1000px" }}>
      <CommonTitle>${}보고서</CommonTitle>
      <Grid container spacing={2}>
             

        {/* 두 번째 행 */}
        <Grid item xs={12} md={6}>
          <BrandRanking />
        </Grid>
       
      </Grid>
    </Container>
  );
};
export default Report;
