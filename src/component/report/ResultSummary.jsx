import { Paper, Box, Typography } from "@mui/material";

const ResultSummary = () => {
  return (
    <Paper
      elevation={1}
      sx={{ p: 2, minWidth: "468px", minHeight: "400px", bgcolor: "#f5f5f5" }}
    >
      <Typography variant="subtitle2" color="secondary">
        Search Result for ChatGPT(최대 참고)
      </Typography>
      <Box id="summary"></Box>
    </Paper>
  );
};
export default ResultSummary;
