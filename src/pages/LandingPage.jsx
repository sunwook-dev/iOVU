import { Box, Container } from "@mui/material";
import CommonButton from "../component/common/CommonButton";
import CommonTitle from "../component/common/CommonTitle";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const clickBtn = () => {
    navigate("/login");
  };

  // return (
  //   <Box
  //     sx={{
  //       width: "100%",
  //       height: "68vh",
  //       backgroundImage: "url('/image/landing.png')",
  //       backgroundSize: "cover",
  //       backgroundRepeat: "no-repeat",
  //       backgroundPosition: "center",
  //       display: "flex",
  //       justifyContent: "center",
  //       alignItems: "center",
  //     }}
  //   >
  //     <Container
  //       sx={{
  //         width: "1000px",          
  //         display: "flex",
  //         flexDirection: "column",
  //         alignItems: "center",
  //         padding: 0, // 불필요한 여백 제거
  //         margin: 0,
  //       }}
  //     >
  //       <motion.div
  //         initial={{ opacity: 0, y: -30 }}
  //         animate={{ opacity: 1, y: 0 }}
  //         transition={{ duration: 0.8 }}
  //       >
  //         <CommonTitle
  //           sx={{
  //             fontSize: 36,
  //             pt: "5vh",
  //           }}
  //         >
  //           AI로 검색을 혁신하세요
  //         </CommonTitle>
  //         <CommonTitle sx={{ fontSize: 30 }}>
  //           키워드 분석부터 트렌드까지, 당신의 마케팅을 더 똑똑하게
  //         </CommonTitle>
  //         <CommonButton
  //           onClick={clickBtn}
  //           sx={{
  //             mt: 5,
  //           }}
  //         >
  //           Go to Login
  //         </CommonButton>
  //       </motion.div>
  //     </Container>
  //   </Box>
  // );
    return (
    <Container
    maxWidth={false}
    disableGutters
    sx={{
      width: "100%",
      height: "68vh",
      minWidth: 0,
      minHeight: 0,
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      overflowX: "hidden",
    }}
    >
      <Box
        sx={{
          width: "100%",
          height: "68vh",
          backgroundImage: "url('/image/landing.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 0,
          m: 0,
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ marginTop: '-40px' }}
        >
          <CommonTitle sx={{ fontSize: 36, textAlign: "center"}}>
            AI로 검색을 혁신하세요
          </CommonTitle>
          <CommonTitle sx={{ fontSize: 30, textAlign: "center" }}>
            키워드 분석부터 트렌드까지, 당신의 마케팅을 더 똑똑하게
          </CommonTitle>
          <CommonButton onClick={clickBtn} sx={{ mt: 5 }}>
            Go to Login
          </CommonButton>
        </motion.div>
      </Box>
    </Container>
  );
};

export default LandingPage;
