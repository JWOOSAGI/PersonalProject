"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { Box, Button, Input } from "@mui/material";
import AxiosConfig from "@/app/components/common/configs/axios-config";
import { API } from "@/app/components/common/enums/API";
import { useSelector, useDispatch } from "react-redux";
import { NextPage } from "next";
import { findAllUsers } from "@/app/components/user/service/user-service";
import { getAlluser } from "@/app/components/user/service/user-slice";
import UserColumns from "@/app/components/user/module/user-columns";
// import React from "react";

// interface IArticle {
//     id: number,
//     title: string,
//     content: string,
//     writer: string,
//     registerDate: string
// }

const UsersPage: NextPage = () => {
const [pageSize, setPageSize] = useState(5); //pageSize라는 상태를 5로 초기화합니다. 이는 한 페이지에 표시될 사용자의 수를 의미합니다.
const dispatch = useDispatch(); //Redux 액션을 디스패치하기 위해 사용되는 훅입니다.

const allUsers: [] = useSelector(getAlluser); //Redux 스토어에서 사용자 데이터를 선택하여 allUsers에 저장합니다. getAlluser는 사용자의 데이터를 반환하는 셀렉터 함수입니다.

if (allUsers !== undefined) {
    console.log("allUser is not undefined");

    console.log("length is " + allUsers.length);
    for (let i = 0; i < allUsers.length; i++) {
    console.log(JSON.stringify(allUsers[i]));
    }
} else {
    console.log("allUser is undefined");
}

useEffect(() => {
    dispatch(findAllUsers(1));
}, []);

return (
    <>
    <h2>사용자 목록</h2>
    <div style={{ height: 400, width: "100%" }}>
        {allUsers && (
          <DataGrid // 🔥 4
            rows={allUsers}
            columns={UserColumns()}
            pageSizeOptions={[5, 10, 20]} // 4-1
            checkboxSelection
        />
        )}
    </div>
    </>
);
};

export default UsersPage;