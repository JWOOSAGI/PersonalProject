import { Link, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { ApartmentColumn } from "../model/apartment-column";

interface CellType {
  row: ApartmentColumn;
}

export default function ApartmentColumns(): GridColDef[] {
  return [
    {
      flex: 0.04,
      minWidth: 30,
      sortable: false,
      field: "id",
      headerName: "No.",
      headerAlign: "center",
      renderCell: ({ row }: CellType) => (
        <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
          {" "}
          {row.id}
        </Typography>
      )
    },
    {
      flex: 0.04,
      minWidth: 30,
      sortable: false,
      filterable: true,
      field: "buildingName",
      headerName: "아파트 이름",
      headerAlign: "center",
      renderCell: ({ row }: CellType) => (
        <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
          {" "}
          {row.buildingName}
        </Typography>
      )
    },
    {
      flex: 0.04,
      minWidth: 30,
      sortable: false,
      filterable: true,
      field: "propertyType",
      headerName: "건물 유형",
      headerAlign: "center",
      renderCell: ({ row }: CellType) => (
        <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
          {" "}
          {row.propertyType}
        </Typography>
      )
    },
    {
      flex: 0.04,
      minWidth: 30,
      sortable: false,
      filterable: true,
      field: "transactionType",
      headerName: "거래 유형",
      headerAlign: "center",
      renderCell: ({ row }: CellType) => (
        <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
          {" "}
          {row.transactionType}
        </Typography>
      )
    },
    
    {
      flex: 0.04,
      minWidth: 30,
      sortable: false,
      filterable: true,
      field: "confirmationStatus",
      headerName: "매물 확인",
      headerAlign: "center",
      renderCell: ({ row }: CellType) => (
        <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
          {" "}
          {row.confirmationStatus}
        </Typography>
      )
    },
    {
      flex: 0.04,
      minWidth: 30,
      sortable: false,
      filterable: true,
      field: "date",
      headerName: "등록일",
      headerAlign: "center",
      renderCell: ({ row }: CellType) => (
        <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
          {" "}
          {row.date}
        </Typography>
      )
    }
  ];
}
