import { Paper, Box, Typography } from "@mui/material";

const EstimatedVolume = () => {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        m: 0,
        minWidth: "468px",
        minHeight: "100px",
        bgcolor: "#f5f5f5",
      }}
    >
      <Typography variant="subtitle2" color="secondary">
        Estimated Intent Volume
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
        <Typography variant="h5" fontWeight="bold">
          134 %
        </Typography>
        <Typography variant="body2" color="text.secondary" ml={1}>
          +0.3%
        </Typography>
      </Box>
    </Paper>
  );
};
export default EstimatedVolume;
