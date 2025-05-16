import { Paper, Box, Typography } from "@mui/material";
import CommonSubtitle from "../common/CommonSubtitle";
const Snapshot = () => {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        minWidth: "468px",
        height: "500px",
        bgcolor: "#f5f5f5",
      }}
    >
      <CommonSubtitle>Snapshot</CommonSubtitle>
      <Box>
        <img src="../../../public/image/snapshot_sample.png" alt="snapshot" />
      </Box>
    </Paper>
  );
};
export default Snapshot;
