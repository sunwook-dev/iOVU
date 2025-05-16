// src/pages/ReportLinkDomainPage/ReportLinkDomainPage.jsx
import CommonTitle from "../component/common/CommonTitle";
import {
  Container,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  CircularProgress,
  Typography,
  useTheme,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ReportLinkDomainPage = () => {
  const [domains, setDomains] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const theme = useTheme();

  const [apiMethod, setApiMethod] = useState("combined"); // 'combined', 'separate', 'domains'

  // API 메서드 변경 핸들러
  const handleApiMethodChange = (event, newValue) => {
    setApiMethod(newValue);
  };

  // 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let fetchedDomains = [];

        if (apiMethod === "combined") {
          // 방법 1: 링크를 포함한 도메인 정보 요청
          const response = await axios.get(
            `http://localhost:8081/reports/${id}/links`
          );
          console.log("링크를 포함한 도메인 데이터:", response.data);

          if (Array.isArray(response.data)) {
            fetchedDomains = response.data;
          }
        } else if (apiMethod === "separate") {
          // 방법 2: 도메인 정보와 링크 정보 별도 요청
          const domainsResponse = await axios.get(
            `http://localhost:8081/reports/${id}/domains/export`
          );

          if (Array.isArray(domainsResponse.data)) {
            const domains = domainsResponse.data;

            fetchedDomains = await Promise.all(
              domains.map(async (domain) => {
                try {
                  // 각 도메인별 링크 요청
                  const linksResponse = await axios.get(
                    `http://localhost:8081/reports/${id}/domains/${domain.domain_link_id}/links`
                  );

                  return {
                    ...domain,
                    link_list: Array.isArray(linksResponse.data)
                      ? linksResponse.data
                      : [],
                  };
                } catch (err) {
                  console.error(
                    `도메인 ${domain.domain_name}의 링크 가져오기 실패:`,
                    err
                  );
                  return {
                    ...domain,
                    link_list: [],
                  };
                }
              })
            );
          }
        } else if (apiMethod === "domains") {
          // 방법 3: 도메인 정보만 요청 (테스트용)
          const response = await axios.get(
            `http://localhost:8081/reports/${id}/domains/export`
          );
          console.log("도메인 데이터 (링크 없음):", response.data);

          if (Array.isArray(response.data)) {
            fetchedDomains = response.data.map((domain) => ({
              ...domain,
              link_list: [], // 빈 링크 리스트 추가
            }));
          }
        }

        setDomains(fetchedDomains);

        // 도메인과 링크를 모두 포함하는 테이블 데이터 생성
        const combinedData = [];

        fetchedDomains.forEach((domain, index) => {
          // 도메인 행 추가
          combinedData.push({
            id: `domain-${domain.domain_link_id}`,
            index: index + 1,
            domain: domain.domain_name,
            link: "", // 도메인 행에는 링크 정보 없음
            percentage: domain.rate || 0,
            total: (domain.chatgpt || 0) + (domain.gemini || 0),
            google: domain.gemini || 0,
            chatgpt: domain.chatgpt || 0,
            category: domain.category || "미분류",
            isDomain: true,
          });

          // 링크 행 추가
          if (domain.link_list && Array.isArray(domain.link_list)) {
            domain.link_list.forEach((link, linkIndex) => {
              combinedData.push({
                id: `link-${
                  link.link_id || `${domain.domain_link_id}-${linkIndex}`
                }`,
                index: `${index + 1}-${linkIndex + 1}`,
                domain: "", // 링크 행에는 도메인 비움
                link: link.link,
                percentage: null,
                total: null,
                google: null,
                chatgpt: null,
                category: "",
                isDomain: false,
              });
            });
          }
        });

        setTableData(combinedData);
        setError(null);
      } catch (err) {
        console.error("데이터 가져오기 오류:", err);
        if (err.response) {
          console.error("응답 상태:", err.response.status);
          console.error("응답 데이터:", err.response.data);
        }
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id, apiMethod]);

  // PDF 내보내기 함수
  const exportDomainsAsPdf = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8081/reports/${id}/domains/export/pdf`,
        {
          responseType: "blob",
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement("a");
      a.href = url;
      a.download = `domains_${id}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      console.error("Error exporting PDF:", err);
      setError("PDF 내보내기 중 오류가 발생했습니다.");
    }
  };

  const exportLinksAsPdf = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8081/reports/${id}/links/export/pdf`,
        {
          responseType: "blob",
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement("a");
      a.href = url;
      a.download = `links_${id}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      console.error("Error exporting PDF:", err);
      setError("PDF 내보내기 중 오류가 발생했습니다.");
    }
  };

  return (
    <Container sx={{ py: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <CommonTitle sx={{ py: 0, px: 0 }}> 도메인 및 링크분석</CommonTitle>
        <Box>
          <Button variant="contained" onClick={exportLinksAsPdf}>
            링크 다운로드
          </Button>
          <Button
            variant="contained"
            onClick={exportDomainsAsPdf}
            sx={{ ml: 2 }}
          >
            도메인 다운로드
          </Button>
        </Box>
      </Box>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error" sx={{ textAlign: "center", py: 2 }}>
          {error}
        </Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="도메인 및 링크 분석 테이블">
            <TableHead>
              <TableRow sx={{ backgroundColor: "action.hover" }}>
                <TableCell
                  sx={{
                    width: "60px",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                  }}
                >
                  번호
                </TableCell>
                <TableCell>도메인</TableCell>
                <TableCell>링크</TableCell>
                <TableCell align="right" sx={{ whiteSpace: "nowrap" }}>
                  전체에서%
                </TableCell>
                <TableCell align="center">총</TableCell>
                <TableCell align="center">구글</TableCell>
                <TableCell align="center">챗 gpt</TableCell>
                <TableCell align="center">분류</TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ pl: 0 }}>
              {tableData.length > 0 ? (
                tableData.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{
                      pl: 0,
                      "&:last-child td, &:last-child th": { border: 0 },
                      "&:hover": { backgroundColor: "action.selected" },
                      // 도메인 행과 링크 행의 스타일 구분
                      ...(row.isDomain
                        ? { backgroundColor: "#f5f5f5" }
                        : { "& td": { paddingLeft: "2rem" } }),
                    }}
                  >
                    <TableCell sx={{ textAlign: "center", pl: 0 }}>
                      {row.index}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <a
                        href={row.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="fourth"
                        style={{
                          textDecoration: "none",
                          color: theme.palette.secondary.main,
                          "&:visited": {
                            color: "primary.main",
                          },
                        }}
                      >
                        {row.domain}
                      </a>
                    </TableCell>
                    <TableCell>
                      {row.link !== "" ? (
                        <a
                          href={row.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            textDecoration: "none",
                            color: theme.palette.third.main,
                            "&:visited": {
                              color: "#EAD8B1",
                            },
                          }}
                        >
                          {row.link}
                        </a>
                      ) : (
                        row.link
                      )}
                    </TableCell>
                    <TableCell align="right">
                      {row.percentage !== null ? `${row.percentage}%` : ""}
                    </TableCell>
                    <TableCell align="center">
                      {row.total !== null ? row.total : ""}
                    </TableCell>
                    <TableCell align="center">
                      {row.google !== null ? row.google : ""}
                    </TableCell>
                    <TableCell align="center">
                      {row.chatgpt !== null ? row.chatgpt : ""}
                    </TableCell>
                    <TableCell align="center">{row.category}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8} align="center">
                    표시할 데이터가 없습니다.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default ReportLinkDomainPage;
