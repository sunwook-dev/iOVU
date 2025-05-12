import { Paper, Box, Typography } from "@mui/material";

const BrandTracking = () => {
  return (
    <Paper
      elevation={1}
      sx={{ p: 2, minWidth: "468px", height: "150px", bgcolor: "#f5f5f5" }}
    >
      <Typography variant="subtitle2" color="secondary">
        주간 브랜드 트렌드
      </Typography>
      <Box
        sx={{ height: "100px", mt: 2, display: "flex", alignItems: "center" }}
      >
        선 그래프
        {/* <svg
          width="100%"
          height="100%"
          viewBox="0 0 400 100"
          preserveAspectRatio="none"
        >
          <polyline
            points="0,80 100,40 200,60 300,20"
            fill="none"
            stroke="#0088ff"
            strokeWidth="2"
          />
          {[0, 100, 200, 300].map((x, idx) => (
            <circle
              key={idx}
              cx={x}
              cy={idx === 0 ? 80 : idx === 1 ? 40 : idx === 2 ? 60 : 20}
              r="4"
              fill="#0088ff"
            />
          ))}
        </svg> */}
      </Box>
    </Paper>
  );
};
export default BrandTracking;
