"use client";

import { IApartment } from "@/app/components/apartment/model/apartment";
import { findApartmentById } from "@/app/components/apartment/service/apartment-service";
import { getApartmentById } from "@/app/components/apartment/service/apartment-slice";
import instance from "@/app/components/common/configs/axios-config";
import { Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

export default function ApartmentDetailPage(props: any) {
  const dispatch = useDispatch();
  const router = useRouter();
  const apartment: IApartment = useSelector(getApartmentById);

  useEffect(() => {
    dispatch(findApartmentById(props.params.id));
  }, []);

  const handleDeleteClick = () => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/apartment/delete/${props.params.id}`;
    console.log("url" + url);
    instance()
      .delete(url)
      .then((res) => {
        alert(JSON.stringify(res.data)); // response.responsebody = res.data = hashmap
        router.push("/");
      });
  };
  const handleEditClick = () => {
    router.push(`/pages/apartment/update/${props.params.id}`);
  };

  return (
    <>
      <header
        onClick={() => (window.location.href = "http://localhost:3000")}
        style={{
          backgroundColor: "#f8f9fa",
          padding: "25px 0",
          textAlign: "center",
          borderBottom: "1px solid #dee2e6",
          fontSize: "2em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <img
          src="/SmallBangEz.png"
          alt="BangEZ"
          style={{ marginRight: "10px" }}
        />
        BangEZ
      </header>
      <h1 style={{ textAlign: "center", fontSize: "1.5em" }}>
        {props.params.id}번 매물 상세정보
      </h1>
      <hr
        style={{
          width: "100%",
          margin: "0px auto",
          border: "none",
          borderTop: "1px solid #dee2e6",
        }}
      />
      <div style={{ textAlign: "center" }}>
        {apartment && (
          <>
            <br />
            <div>
              <span>매물명 :</span>{" "}
              <Typography
                component="span"
                sx={{ fontSize: "1rem", display: "inline-block" }}
              >
                {apartment.buildingName}
              </Typography>
            </div>
            <br />
            <div>
              <span>동 :</span>{" "}
              <Typography
                component="span"
                sx={{ fontSize: "1rem", display: "inline-block" }}
              >
                {apartment.buildingBlock}
              </Typography>
            </div>
            <br />
            <div>
              <span>거래유형 :</span>{" "}
              <Typography
                component="span"
                sx={{ fontSize: "1rem", display: "inline-block" }}
              >
                {apartment.transactionType}
              </Typography>
            </div>
            <br />
            <div>
              <span>가격 (단위 : 억) :</span>{" "}
              <Typography
                component="span"
                sx={{ fontSize: "1rem", display: "inline-block" }}
              >
                {apartment.price}
              </Typography>
            </div>
            <br />
            <div>
              <span>면적 :</span>{" "}
              <Typography
                component="span"
                sx={{ fontSize: "1rem", display: "inline-block" }}
              >
                {apartment.area}
              </Typography>
            </div>
            <br />
            <div>
              <span>층수 및 방향 :</span>{" "}
              <Typography
                component="span"
                sx={{ fontSize: "1rem", display: "inline-block" }}
              >
                {apartment.floorAndDirection}
              </Typography>
            </div>
            <br />
            <div>
              <span>건축연한 :</span>{" "}
              <Typography
                component="span"
                sx={{ fontSize: "1rem", display: "inline-block" }}
              >
                {apartment.buildingAge}
              </Typography>
            </div>
            <br />
            <div>
              <span>매물 확인 상태 :</span>{" "}
              <Typography
                component="span"
                sx={{ fontSize: "1rem", display: "inline-block" }}
              >
                {apartment.confirmationStatus}
              </Typography>
            </div>
            <br />
            <div>
              <span>보증금 (월세 매물) :</span>{" "}
              <Typography
                component="span"
                sx={{ fontSize: "1rem", display: "inline-block" }}
              >
                {apartment.depositPrice}
              </Typography>
            </div>
            <br />
            <div>
              <span>월세 (월세 매물) :</span>{" "}
              <Typography
                component="span"
                sx={{ fontSize: "1rem", display: "inline-block" }}
              >
                {apartment.monthPrice}
              </Typography>
            </div>
            <br />
            <div>
              <span>등록일 :</span>{" "}
              <Typography
                component="span"
                sx={{ fontSize: "1rem", display: "inline-block" }}
              >
                {apartment.date}
              </Typography>
            </div>
            <br />
          </>
        )}
        <hr
          style={{
            width: "100%",
            margin: "0px auto",
            border: "none",
            borderTop: "1px solid #dee2e6",
          }}
        />
        <br />
        <Button
          variant="outlined"
          className="cancelbtn"
          onClick={() => router.back()}
          sx={{ mr: 2 }}
        >
          뒤로 가기
        </Button>
        <Button variant="outlined" onClick={handleEditClick} sx={{ mr: 2 }}>
          수정
        </Button>
        <Button variant="outlined" onClick={handleDeleteClick}>
          삭제
        </Button>
      </div>
    </>
  );
}
