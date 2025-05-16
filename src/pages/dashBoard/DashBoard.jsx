import BrandColumn from "./BrandColumn";
import CommonButton from "../../component/common/CommonButton";
import { Box, Container } from "@mui/material";
import CommonTitle from "../../component/common/CommonTitle";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const DashBoard = () => {
  const { id: reportId } = useParams();
  const [stats1, setStats1] = useState([]);
  const [stats2, setStats2] = useState([]);
  const [stats3, setStats3] = useState([
    { label: "요약 결과", value: "5" },
    { label: "브랜드 가시성", value: "10% (10)" },
    { label: "브랜드 평균 순위", value: "#4" },
    { label: "도메인 인용 비율", value: "10% (10)" },
    { label: "브랜드 언급 수", value: "2" },
  ]);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const apiUrl = `http://localhost:8081/reports/${reportId}/dashboard`;
        const response = await axios.get(apiUrl);
        const dataList = Array.isArray(response.data) ? response.data : [response.data];
        console.log("대시보드 데이터:", dataList);

        // 초기화
        setStats1([]);
        setStats2([]);

        // reportId가 1인 경우에만 GPT / GOOGLE 분리 처리
        if (reportId === "1") {
          dataList.forEach((data) => {
            const formattedStats = [
              { label: "요약 결과", value: data.result_summary?.toString() ?? "-" },
              { label: "브랜드 가시성", value: `${(data.brand_rate1 * 10).toFixed(0)}% (${data.brand_rate2})` },
              { label: "브랜드 평균 순위", value: `#${data.brand_rank}` },
              { label: "도메인 인용 비율", value: `${(data.domain_rate1 * 10).toFixed(0)}% (${data.domain_rate2})` },
              { label: "브랜드 언급 수", value: data.brand_mention?.toString() ?? "0" },
            ];

            if (data.ai_type === "GPT") {
              setStats1(formattedStats);
            } else if (data.ai_type === "GOOGLE") {
              setStats2(formattedStats);
            }
          });
        }

      } catch (error) {
        console.error("대시보드 데이터 불러오기 실패:", error);
      }
    };

    fetchDashboard();
  }, [reportId]);

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
      <CommonTitle>Dash Board</CommonTitle>
      <Box
        sx={{ display: "flex", flexDirection: "column", p: 2, width: "100%" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "20px",
          }}
        >
          <CommonButton>내보내기 📩</CommonButton>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <BrandColumn brandName="ChatGPT" stats={stats1} />
          <BrandColumn brandName="Gemini" stats={stats2} />
          <BrandColumn brandName="Perplexity" stats={stats3} />
        </div>
      </Box>
    </Container>
  );
};

export default DashBoard;
