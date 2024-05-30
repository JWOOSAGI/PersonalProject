'use client'

import CardButton from "@/app/atoms/button/CardButton"
import { IApartment } from '@/app/components/apartment/model/apartment'
import { IBoard } from "@/app/components/board/model/board"
import { findAllBoards } from "@/app/components/board/service/board-service"
import { getAllBoards } from "@/app/components/board/service/board-slice"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"


export default function BoardCards() {
    const dispatch = useDispatch()
    const allBoards = useSelector(getAllBoards)

    useEffect(() => {
        dispatch(findAllBoards(1))
    }, [dispatch])

    return (<>
    <h1>게시판 목록 들어옴</h1>
        {allBoards.map((apartment: IApartment)=>(<CardButton key={apartment.id} id={apartment.id} buildingName={apartment.buildingName}/>))}
    </>
)
}