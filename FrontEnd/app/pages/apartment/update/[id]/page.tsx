"use client";

import { IApartment } from "@/app/components/apartment/model/apartment";
import { findApartmentById } from "@/app/components/apartment/service/apartment-service";
import { getApartmentById } from "@/app/components/apartment/service/apartment-slice";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import instance from '@/app/components/common/configs/axios-config';

export default function ApartmentEditPage(props: any) {
  const dispatch = useDispatch();
  const router = useRouter();
  const apartment: IApartment = useSelector(getApartmentById);
  const [editData, setEditData] = useState<Partial<IApartment>>({});

  useEffect(() => {
    dispatch(findApartmentById(props.params.id));
  }, [dispatch, props.params.id]);

  useEffect(() => {
    if (apartment) {
      setEditData(apartment);
    }
  }, [apartment]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateClick = () => {
    instance().put(`${process.env.NEXT_PUBLIC_API_URL}/apartment/update/${props.params.id}`, editData)
      .then(response => {
        alert("수정이 완료되었습니다.");
        router.push("/"); 
      })
  };

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
      <h1 style={{ textAlign: "center", fontSize: "1.5em" }}>
        {props.params.id}번 매물 수정
      </h1>
      <hr style={{ width: '100%', margin: '0px auto', border: 'none', borderTop: '1px solid #dee2e6' }} />
      <div style={{ textAlign: "center" }}>
        {apartment && (
          <>
            <br />
            <div style={{ textAlign: "center" }}>
  {apartment && (
    <>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={4}>
          <div>
            <span style={{ fontSize: '2rem' }}>매물명 :</span>{" "}
            <TextField
              name="buildingName"
              value={editData.buildingName || ''}
              onChange={handleChange}
              sx={{ fontSize: "2rem", display: 'inline-block' }}
            />
          </div><br />
          <div>
            <span style={{ fontSize: '2rem' }}>동 :</span>{" "}
            <TextField
              name="buildingBlock"
              value={editData.buildingBlock || ''}
              onChange={handleChange}
              sx={{ fontSize: "2rem", display: 'inline-block' }}
            />
          </div><br />
          <div>
            <span style={{ fontSize: '2rem' }}>거래유형 :</span>{" "}
            <TextField
              name="transactionType"
              value={editData.transactionType || ''}
              onChange={handleChange}
              sx={{ fontSize: "2rem", display: 'inline-block' }}
            />
          </div><br />
          <div>
  <span style={{ fontSize: '2rem' }}>건축연한 :</span>{" "}
  <TextField
    name="buildingAge"
    value={editData.buildingAge || ''}
    onChange={handleChange}
    sx={{ fontSize: "2rem", display: 'inline-block' }}
  />
</div><br />
<div>
  <span style={{ fontSize: '2rem' }}>보증금 (월세 매물만 입력) :</span>{" "}
  <TextField
    name="depositPrice"
    value={editData.depositPrice || ''}
    onChange={handleChange}
    sx={{ fontSize: "2rem", display: 'inline-block' }}
  />
</div><br />
        </Grid>
        <Grid item xs={4}>
          <div>
            <span style={{ fontSize: '2rem' }}>가격 (단위 : 억) :</span>{" "}
            <TextField
              name="price"
              value={editData.price || ''}
              onChange={handleChange}
              sx={{ fontSize: "2rem", display: 'inline-block' }}
            />
          </div><br />
          <div>
            <span style={{ fontSize: '2rem' }}>면적 :</span>{" "}
            <TextField
              name="area"
              value={editData.area || ''}
              onChange={handleChange}
              sx={{ fontSize: "2rem", display: 'inline-block' }}
            />
          </div><br />
          <div>
            <span style={{ fontSize: '2rem' }}>층수 및 방향 :</span>{" "}
            <TextField
              name="floorAndDirection"
              value={editData.floorAndDirection || ''}
              onChange={handleChange}
              sx={{ fontSize: "2rem", display: 'inline-block' }}
            />
          </div><br />
          
<div>
  <span style={{ fontSize: '2rem' }}>매물 확인 상태 :</span>{" "}
  <TextField
    name="confirmationStatus"
    value={editData.confirmationStatus || ''}
    onChange={handleChange}
    sx={{ fontSize: "2rem", display: 'inline-block' }}
  />
</div><br />
<div>
  <span style={{ fontSize: '2rem' }}>월세 (월세 매물만 입력) :</span>{" "}
  <TextField
    name="monthPrice"
    value={editData.monthPrice || ''}
    onChange={handleChange}
    sx={{ fontSize: "2rem", display: 'inline-block' }}
  />
</div><br />
        </Grid>
      </Grid>
    </>
  )}
</div>
<div>
  <span style={{ fontSize: '2rem' }}>등록일 :</span>{" "}
  <TextField
    name="date"
    value={editData.date || ''}
    onChange={handleChange}
    sx={{ fontSize: "2rem", display: 'inline-block' }}
  />
</div><br />

          </>
        )}
        <hr style={{ width: '100%', margin: '0px auto', border: 'none', borderTop: '1px solid #dee2e6' }} />
        <br />
        <Button variant="outlined" onClick={() => router.back()} sx={{ mr: 2 }}>뒤로가기</Button>
        <Button variant='outlined' onClick={handleUpdateClick}>수정 완료</Button>
      </div>
    </>
  );
}
