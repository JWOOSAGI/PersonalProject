'use client'

import * as React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NextPage } from "next";
import { findAllApartments } from "./components/apartment/service/apartment-service";
import { Box } from '@mui/material';
import ApartmentColumns from './components/apartment/module/apartment-columns';
import { getAllApartments } from './components/apartment/service/apartment-slice';
import { DataGrid } from '@mui/x-data-grid';
import MoveButton from './atoms/button/MoveButton';
import { PG } from './components/common/enums/PG';

const ApartmentsPage: NextPage = () => {
  const [pageSize, setPageSize] = useState(5);
  const dispatch = useDispatch();
  const allApartments: [] = useSelector(getAllApartments) 



  useEffect(() => { 
    dispatch(findAllApartments(1));
  }, []);

  return (
    <>
      <header
      onClick={() => window.location.href = "http://localhost:3000"}
        style={{
          backgroundColor: "#f8f9fa",
          padding: "25px 0",
          textAlign: "center",
          borderBottom: "1px solid #dee2e6",
          fontSize: "2em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer" 
        }}>
        <img src="/SmallBangEz.png" alt="BangEZ" style={{ marginRight: "10px" }} />
        BangEZ
      </header>
      <h1 style={{ textAlign: "center", fontSize: "1.5em" }}>아파트 부동산 목록</h1>
      <Box  sx={{ height: 400, width: '80%', mx: '10%' }}>
      {allApartments && <DataGrid
        rows={allApartments}
        columns={ApartmentColumns()}
        initialState={{
          pagination: { 
            paginationModel: {
              pageSize: 5,  
            },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
        
      />}
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, mr: '84%' }}>
        <MoveButton text={'매물 등록'} path={`${PG.APARTMENT}/create`} />
      </Box>
    </>);
};

export default ApartmentsPage;