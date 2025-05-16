import { Container, Typography, Box, Paper } from "@mui/material";
import CommonTitle from "../component/common/CommonTitle";
import CommonSubtitle from "../component/common/CommonSubtitle";

const Consulting = () => {
  return (
    <Container
      sx={{
        width: "1000px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginBottom: "20px",
      }}
    >
      <CommonTitle>AI 컨설팅</CommonTitle>
      <Box
        sx={{
          width: "1000px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: "20px",
          rowGap: 3,
        }}
      >
        <Paper
          elevation={2}
          sx={{
            p: 2,
            width: "100%",
            height: "150px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            rowGap: 1.5,
          }}
        >
          <CommonSubtitle>결과요약</CommonSubtitle>
          <Typography>
            chatgpt와 Gemini로 검색한 결과를 요약하면 다음과 같습니다.
          </Typography>
        </Paper>
        <Paper
          elevation={2}
          sx={{
            p: 2,
            width: "100%",
            height: "150px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            rowGap: 1.5,
          }}
        >
          <CommonSubtitle>컨설팅</CommonSubtitle>

          <Typography>
            그러므로 브랜드 노출 전략은 이렇게 하는것을 추천드립니다.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Consulting;
