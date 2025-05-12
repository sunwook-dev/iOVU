import { Paper, Box, Typography, Grid } from "@mui/material";

const MentionTracking = () => {
  return (
    <Paper
      elevation={1}
      sx={{ p: 2, minWidth: "468px", height: "180px", bgcolor: "#f5f5f5" }}
    >
      <Typography variant="subtitle2" color="secondary">
        주간 인터넷 언급량 트렌드
      </Typography>
      <Box sx={{ height: "130px", mt: 1 }}>
        히트맵 자리
        {/* <ApexChart /> */}
        {/* <Grid container sx={{ height: "100%" }}>
          {Array.from({ length: 30 }).map((_, idx) => (
            <Grid item xs={2} key={idx}>
              <Box
                sx={{
                  height: "20px",
                  m: 0.2,
                  bgcolor: `rgba(0, 136, 255, ${Math.random()})`,
                  borderRadius: "2px",
                }}
              />
            </Grid>
          ))} 
        </Grid>*/}
      </Box>
    </Paper>
  );
};
export default MentionTracking;
