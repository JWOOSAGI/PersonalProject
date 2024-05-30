package com.bangez.api.apartment.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@ToString(exclude = "id")
@Entity(name = "apartment")
public class ApartmentModel {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String buildingName;                //건물명
    private String buildingBlock;               //동
    private String transactionType;             //거래유형
    private Long price;                          //가격
    private String propertyType;                //매물종류
    private String area;                         //면적
    private String floorAndDirection;          //층수 및 방향
    private String buildingAge;                 //건축연한
    private String extraInfo1;                   //기타 사항1
    private String extraInfo2;                   //기타 사항2
    private String extraInfo3;                   //기타 사항3
    private String extraInfo4;                   //기타 사항4
    private String confirmationStatus;          //매물 확인
    private LocalDate date;                      //날짜
    private Long depositPrice;                   //보증금
    private Long monthPrice;                     //월세

}