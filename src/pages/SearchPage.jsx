import React from "react";
import CommonTitle from "../component/common/CommonTitle";
import {TextField, InputAdornment, Container, Box } from "@mui/material";
import CommonButton from "../component/common/CommonButton";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
   const navigate = useNavigate();
   
    const handleSearch = () => {
      console.log("검색 실행");
    };
  return (
    <Container sx={{
      width: "1000px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}> 
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "10vh",
          gap: 2,
        }}
      >      
        <img        
          src="/image/searchBanner.png"
          alt="검색 배너"
          style={{                        
            width: 500, 
            height: 300,
            marginBottom: 20,
          }}        
        />
      
       <TextField
          placeholder="키워드 검색"
          variant="outlined"
          size="medium"          
          sx={{ width: 500}}
        InputProps={{
          sx: {
              '& input': {
                paddingLeft: 25, 
                textAlign: 'left', 
              },
              height: 40,
              borderRadius: 5,
              backgroundColor: "#F5F5F5",
            },
            endAdornment: (
              <InputAdornment position="end" >
                <CommonButton onClick={handleSearch}
                  sx={{
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                    "&:hover img": {
                      transform: "scale(1.2)",    // 확대 효과
                      filter: "brightness(1.3)",  // 더 밝게
                    },
                  }}
                >
                  <img
                    src="/image/search.png" 
                    alt="검색"
                    style={{
                      width: 20,
                      height: 20,
                      transition: "all 0.3s ease",
                    }}                    
                  />
                </CommonButton>
              </InputAdornment>
            ),
          }}
        /> 
      </Box>    
    </Container>
  );
};
export default SearchPage;
