import { Paper, Box, Typography } from "@mui/material";
import CommonButton from "../common/CommonButton";

const LinkTracking = () => {
  return (
    <Paper
      elevation={1}
      sx={{ p: 2, minWidth: "468px", minHeight: "220px", bgcolor: "#f5f5f5" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="subtitle2" color="secondary">
          Link Tracking
        </Typography>
        <CommonButton
          size="small"
          color="fourth"
          sx={{
            // bgcolor: "#0088ff",
            // color: "white",
            // px: 1,
            // py: 0.5,
            // borderRadius: 1,
            fontSize: "12px",
          }}
        >
          자세히 보기
        </CommonButton>
      </Box>
      <Box sx={{ mt: 2 }}>
        {/* 링크 목록 */}
        {Array.from({ length: 10 }).map((_, idx) => (
          <Box
            key={idx}
            sx={{ display: "flex", justifyContent: "space-between", py: 0.8 }}
          >
            <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
              {idx + 1}위 인터넷 언급량 순위
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
              점유 비율(%)
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};
export default LinkTracking;
