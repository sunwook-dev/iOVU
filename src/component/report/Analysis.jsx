import { Paper, Box, Typography } from "@mui/material";

const Analysis = () => {
  return (
    <Paper
      elevation={1}
      sx={{ p: 2, minWidth: "468px", height: "150px", bgcolor: "#f5f5f5" }}
    >
      <Typography variant="subtitle2" color="secondary">
        키워드 감정평가 분석
      </Typography>
      <Box sx={{}}></Box>
    </Paper>
  );
};
export default Analysis;
