'use client'

import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/navigation"
import AxiosConfig from "@/app/components/common/configs/axios-config"
import { Button, Input } from "@mui/material"
import { API } from "@/app/components/common/enums/API"
import { NextPage } from "next"
import MoveButton from '@/app/atoms/button/MoveButton'
import instance from '@/app/components/common/configs/axios-config'
import { stringify } from 'querystring'

const SERVER = 'http://localhost:8080'

const Create:NextPage = () =>{

  const [inputs, setInputs] = useState({
    buildingName: " ",
    buildingBlock: " ",
    transactionType: " ",
    price: 0,
    propertyType: " ",
    area: " ",
    floorAndDirection: " ",
    buildingAge: " ",
    confirmationStatus: " ",
    depositPrice: 0,
    monthPrice: 0,
    date: new Date().toISOString().split('T')[0],
  })

  const handleChange = (e: any) => {
    setInputs({
        ...inputs,
        buildingName: e.target.value
      })
      console.log(JSON.stringify(inputs))
  }

  const handleChange2 = (e: any) => {
    setInputs({
        ...inputs,
        buildingBlock: e.target.value
      })
      console.log(JSON.stringify(inputs))
  }

  const handleChange3 = (e: any) => {
    setInputs({
        ...inputs,
        transactionType: e.target.value
      })
      console.log(JSON.stringify(inputs))
  }

  const handleChange4 = (e: any) => {
    setInputs({
        ...inputs,
        price: e.target.value
      })
      console.log(JSON.stringify(inputs))
  }

  const handleChange5 = (e: any) => {
    setInputs({
        ...inputs,
        propertyType: e.target.value
      })
      console.log(JSON.stringify(inputs))
  }

  const handleChange6 = (e: any) => {
    setInputs({
        ...inputs,
        area: e.target.value
      })
      console.log(JSON.stringify(inputs))
  }

  const handleChange7 = (e: any) => {
    setInputs({
        ...inputs,
        floorAndDirection: e.target.value
      })
      console.log(JSON.stringify(inputs))
  }

  const handleChange8 = (e: any) => {
    setInputs({
        ...inputs,
        buildingAge: e.target.value
      })
      console.log(JSON.stringify(inputs))
  }

  const handleChange9 = (e: any) => {
    setInputs({
        ...inputs,
        confirmationStatus: e.target.value
      })
      console.log(JSON.stringify(inputs))
  }

  const handleChange10 = (e: any) => {
    setInputs({
        ...inputs,
        depositPrice: e.target.value
      })
      console.log(JSON.stringify(inputs))
  }

  const handleChange11 = (e: any) => {
    setInputs({
        ...inputs,
        monthPrice: e.target.value
      })
      console.log(JSON.stringify(inputs))
  }
  
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const url = `${process.env.NEXT_PUBLIC_API_URL}/apartment/create`
    const data = inputs // data = requestbody
    console.log(data)
    instance().post(url, data)
      .then(res => {
        alert("response가 가져온 ID : " + JSON.stringify(res.data)) // response.responsebody = res.data = hashmap
        router.push("/")
      })
  }
  return (
    
    <div className="text-center">
      <div >
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
        <h1 style={{ textAlign: "center", fontSize: "1.5em" }}>매물 등록</h1>
        <hr />
        <div style={{ display: "flex", justifyContent: "center" }}>
  <div style={{ marginRight: "20px" }}>
    <br />
    <label htmlFor="buildingName"><b>건물명</b><br /></label>
    <Input onChange={handleChange} type="text" placeholder="ex) 자이 아파트" name="건물명" required /><br />
    <label htmlFor="buildingBlock"><b>동</b><br /></label>
    <Input onChange={handleChange2} type="text" placeholder="ex) 101동, 1동" name="동" required /><br />
    <label htmlFor="transactionType"><b>거래유형</b><br /></label>
    <Input onChange={handleChange3} type="text" placeholder="ex) 매매" name="거래유형" required /><br />
    <label htmlFor="price"><b>가격</b><br /></label>
    <Input onChange={handleChange4} type="text" placeholder="ex) 숫자만 입력" name="가격" required /><br />
  </div>
  <div style={{ marginRight: "20px", marginLeft: "20px" }}>
    <br />
    <label htmlFor="propertyType"><b>매물종류</b><br /></label>
    <Input onChange={handleChange5} type="text" placeholder="ex) 아파트" name="매물종류" required /><br />
    <label htmlFor="area"><b>면적 (단위 : ㎡)</b><br /></label>
    <Input onChange={handleChange6} type="text" placeholder="ex) 97/84.92㎡" name="면적" required /><br />
    <label htmlFor="floorAndDirection"><b>층수 및 방향</b><br /></label>
    <Input onChange={handleChange7} type="text" placeholder="ex) 9/19층, 남향" name="층수 및 방향" required /><br />
    <label htmlFor="buildingAge"><b>건축연한</b><br /></label>
    <Input onChange={handleChange8} type="text" placeholder="ex) 5년이상" name="건축연한" required /><br />
  </div>
  <div style={{ marginLeft: "20px" }}>
    <br />
    <label htmlFor="confirmationStatus"><b>매물 확인</b><br /></label>
    <Input onChange={handleChange9} type="text" placeholder="ex) 확인매물" name="매물 확인" required /><br />
    <label htmlFor="depositPrice"><b>보증금 (월세 매물만 입력)</b><br /></label>
    <Input onChange={handleChange10} type="text" placeholder="ex) 숫자만 입력" name="보증금" required /><br />
    <label htmlFor="monthPrice"><b>월세 (월세 매물만 입력)</b><br /></label>
    <Input onChange={handleChange11} type="text" placeholder="ex) 숫자만 입력" name="월세" required /><br />
    <label htmlFor="date"><b>날짜</b><br /></label>
    <Input value={inputs.date} readOnly type="text" name="date" /><br />
  </div>
</div>
        <div className="clearfix" style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <Button  variant="outlined" onClick={() => router.back()} type="button" sx={{ mr: 2 }}>취소</Button>
          <Button  variant="outlined" onClick={handleSubmit} type="submit" >등록 하기</Button>
        </div>
      </div>
    </div>
  );
}

export default Create;