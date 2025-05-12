import { Paper, Box, Typography } from "@mui/material";

const Snapshot = () => {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        minWidth: "468px",
        height: "200px",
        bgcolor: "#f5f5f5",
      }}
    >
      <Typography variant="subtitle2" color="secondary">
        Snapshot
      </Typography>
      <Box></Box>
    </Paper>
  );
};
export default Snapshot;
