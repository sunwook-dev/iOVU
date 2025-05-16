import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Button,
  Stack,
  Pagination,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ReportsGrid = () => {
  const [page, setPage] = useState(1);
  const [selectionModel, setSelectionModel] = useState([]);
  const [selectionModels, setSelectionModels] = useState([]);
  const [openDialog, setOpenDialog] = useState(false); // 삭제 확인 다이얼로그 상태
  const [rowsToDelete, setRowsToDelete] = useState([]); // 삭제할 항목을 임시로 저장
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true); // 데이터 로딩 상태
  const [error, setError] = useState(null); // 에러 상태

  const pageSize = 2; // 한 페이지에 표시할 행 수

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get("http://localhost:8081/reports");
        const mappedRows = mapBackendDataToRows(res.data);
        setRows(mappedRows);
      } catch (err) {
        console.error("데이터 로딩 에러:", err);
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [location.pathname]);

  const mapBackendDataToRows = (backendData) => {
    return backendData.map((item) => ({
      id: item.report_id,
      prompt: item.keyword,
      volume: item.data_volume,
      date: new Date(item.created_at)
        .toISOString()
        .slice(0, 10)
        .replace(/-/g, "."),
    }));
  };

  const columns = [
    { field: "prompt", headerName: "검색 프롬프트", width: 200 },
    { field: "volume", headerName: "데이터 볼륨", width: 130 },
    { field: "date", headerName: "날짜", width: 150 },
    {
      field: "actions",
      headerName: "",
      flex: 1,
      renderCell: (params) => (
        <Stack
          direction="row"
          spacing={1}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
          }}
        >
          <Button
            variant="contained"
            size="small"
            onClick={() =>
              navigate(`/report/${params.row.id}`, { state: params.row })
            }
          >
            보고서
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={() => navigate(`/report/${params.row.id}/consulting`)}
          >
            컨설팅
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={() =>
              navigate(`/report/${params.row.id}/dashboard`, {
                state: params.row,
              })
            }
          >
            대시보드
          </Button>
        </Stack>
      ),
      sortable: false,
      filterable: false,
    },
  ];

  const handleDelete = () => {
    if (selectionModel.length === 0) {
      alert("삭제할 항목을 선택하세요.");
      return;
    }
    const rowsToDeleteList = rows.filter((row) => {
      console.log("삭제할 항목:", row.id);
      return selectionModel.ids.has(row.id);
    });
    console.log("삭제할 항목:", rowsToDeleteList); // 삭제할 항목 로그
    setRowsToDelete(rowsToDeleteList);
    setOpenDialog(true); // 삭제 확인 다이얼로그 열기
  };

  const handleConfirmDelete = async () => {
    try {
      const idsToDelete = Array.from(selectionModel.ids); // Set을 배열로 변환

      await Promise.all(
        idsToDelete.map(async (id) => {
          console.log("삭제 시도 ID:", id);
          await axios.delete(`http://localhost:8082/reports/${id}`);
        })
      );

      // ✅ 성공적으로 삭제된 경우 state에서 제거
      setRows(
        (prevRows) => prevRows.filter((row) => !selectionModel.ids.has(row.id)) // Set의 has() 사용
      );
      setSelectionModel({ type: "include", ids: new Set() }); // 선택 초기화 (Set으로)
      setRowsToDelete([]); // 삭제 목록 초기화
      setOpenDialog(false); // 다이얼로그 닫기
      setPage(1); // 첫 페이지로 리셋
      alert("선택된 항목이 삭제되었습니다."); // 사용자에게 알림
    } catch (error) {
      console.error("삭제 실패:", error); // ✅ 에러 핸들링
      alert("삭제 중 문제가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const handleCancelDelete = () => {
    setOpenDialog(false); // 다이얼로그 닫기
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  if (loading) {
    return <div>데이터를 불러오는 중...</div>;
  }

  if (error) {
    return <div>에러 발생: {error}</div>;
  }

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <DataGrid
        rows={rows.slice((page - 1) * pageSize, page * pageSize)} // 페이지에 맞게 데이터 슬라이싱
        columns={columns}
        disableColumnMenu
        hideFooter
        checkboxSelection
        disableRowSelectionOnClick
        selectionModel={selectionModel} // 선택된 행을 관리
        onRowSelectionModelChange={(newSelection) => {
          console.log("현재 변경된 선택:", newSelection); // 현재 변경된 선택 로그
          setSelectionModel(newSelection);
        }}
        sx={{
          borderRadius: "10px",
          backgroundColor: "#f0f0f0",
          "& .MuiDataGrid-root": {
            outline: "none", // 클릭 시 나타나는 네모 border 제거
          },
          "& .MuiDataGrid-cell:focus": {
            outline: "none", // 셀 포커스 시 나타나는 네모 border 제거
          },
        }}
      />
      <Button
        variant="contained"
        color="error"
        onClick={handleDelete}
        sx={{ marginTop: 2, marginBottom: 2 }}
      >
        선택된 항목 삭제
      </Button>
      <Pagination
        count={Math.ceil(rows.length / pageSize)} // 총 페이지 수 계산
        page={page}
        onChange={handlePageChange}
        color="primary"
        sx={{ display: "flex", justifyContent: "center" }}
      />

      {/* 삭제된 항목 확인 다이얼로그 */}
      <Dialog open={openDialog} onClose={handleCancelDelete}>
        <DialogTitle>삭제 확인</DialogTitle>
        <DialogContent>
          <Typography>
            선택한 항목을 삭제하시겠습니까? 삭제된 항목은 복구할 수 없습니다.
          </Typography>
          {rowsToDelete.length > 0 && (
            <div>
              <Typography variant="subtitle2" style={{ marginTop: 10 }}>
                삭제될 항목:
              </Typography>
              <ul>
                {rowsToDelete.map((deletedRow) => (
                  <li key={deletedRow.id}>
                    {deletedRow.prompt} - {deletedRow.volume} -{" "}
                    {deletedRow.date}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete} color="primary">
            취소
          </Button>
          <Button onClick={handleConfirmDelete} color="error">
            삭제
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ReportsGrid;
