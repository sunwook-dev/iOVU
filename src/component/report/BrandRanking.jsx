import { Paper, Box, Typography } from "@mui/material";

const BrandRanking = () => {
  return (
    <Paper
      elevation={1}
      sx={{ p: 2, minWidth: "468px", height: "180px", bgcolor: "#f5f5f5" }}
    >
      <Typography variant="subtitle2" color="secondary">
        Brand Ranking
      </Typography>
      <Box sx={{ height: "130px", mt: 1 }}>
        {/* 막대 그래프 자리 */}
        <Box sx={{ display: "flex", height: "100%", alignItems: "flex-end" }}>
          막대 그래프 자리
        </Box>
      </Box>
    </Paper>
  );
};
export default BrandRanking;
