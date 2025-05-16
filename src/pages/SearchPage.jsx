import {
  Box,
  Container,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import CommonButton from "../component/common/CommonButton";
import CommonTitle from "../component/common/CommonTitle";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchPage = () => {
  const [keyword, setKeyword] = React.useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    if (!keyword.trim()) return;

    navigate("/reports");
    axios
      .post("http://localhost:8081/reports", {
        keyword: keyword,
        status: "READY",
        data_volume: 1234,
        created_at: "2025-05-13T10:00:00",
        updated_at: "2025-05-13T10:00:00",
        dashboard: {
          result_summary: 87,
          brand_rate1: 4.5,
          brand_rate2: 88,
          brand_rank: 3,
          domain_rate1: 3.7,
          domain_rate2: 76,
          brand_mention: 210,
        },
        report_details: [
          {
            ai_type: "chatgpt",
            created_at: "2025-05-13T10:05:00",
            json_data: '{"summary": "AI 요약 데이터입니다."}',
            consulting: {
              result: "매우 긍정적",
              consulting: "AI 활용을 적극 추천합니다.",
            },
            domain_link: {
              domain_name: "example.com",
              rate: 4.2,
              chatgpt: 1,
              gemini: 0,
              category: "IT",
              link_list: [
                {
                  link: "https://example.com/article1",
                },
                {
                  link: "https://example.com/article2",
                },
              ],
            },
          },
          {
            ai_type: "gemini",
            created_at: "2025-05-13T10:10:00",
            json_data: '{"summary": "Gemini 분석 결과입니다."}',
            consulting: {
              result: "보통",
              consulting: "보완이 필요합니다.",
            },
            domain_link: {
              domain_name: "anotherexample.com",
              rate: 3.9,
              chatgpt: 0,
              gemini: 1,
              category: "마케팅",
              link_list: [
                {
                  link: "https://anotherexample.com/news1",
                },
              ],
            },
          },
        ],
      })
      .then((res) => {
        console.log("성공:", res.data);
        navigate("/reports");
      })
      .catch((err) => {
        console.error("에러:", err);
      });
  };

  return (
    <Container
      sx={{
        width: "1000px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "1vh",
          position: "relative",
          // gap: 2,
        }}
      >
        <img
          src="/image/searchBanner2.png"
          alt="검색 배너"
          style={{
            width: 500,
            height: 400,
            marginBottom: 0,
            marginTop: 0,
          }}
        />

        <TextField
          placeholder="키워드 검색"
          variant="outlined"
          size="medium"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          sx={{ width: 600, position: "absolute", top: "350px" }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          InputProps={{
            sx: {
              "& input": {
                paddingLeft: 33,
                textAlign: "left",
              },
              height: 40,
              borderRadius: 5,
              backgroundColor: "#F5F5F5",
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleSearch}
                  sx={{
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                    "&:hover img": {
                      transform: "scale(1.2)", // 확대 효과
                      filter: "brightness(1.3)", // 더 밝게
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
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Container>
  );
};
export default SearchPage;
