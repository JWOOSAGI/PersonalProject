package com.bangez.api.apartment.model;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@NoArgsConstructor
@Builder
@Data
@Component
public class ApartmentModelDTO {

    private Long id;
    private String buildingName;
    private String buildingBlock;
    private String transactionType;
    private Long price;
    private String propertyType;
    private String area;
    private String floorAndDirection;
    private String buildingAge;
    private String extraInfo1;
    private String extraInfo2;
    private String extraInfo3;
    private String extraInfo4;
    private String confirmationStatus;
    private LocalDate date;
    private Long depositPrice;
    private Long monthPrice;

    @QueryProjection
    public ApartmentModelDTO(Long id, String buildingName, String buildingBlock,
                             String transactionType, Long price, String propertyType,
                             String area, String floorAndDirection, String buildingAge,
                             String extraInfo1, String extraInfo2, String extraInfo3, String extraInfo4,
                             String confirmationStatus, LocalDate date, Long depositPrice, Long monthPrice)
    {
        this.id = id;
        this.buildingName = buildingName;
        this.buildingBlock = buildingBlock;
        this.transactionType = transactionType;
        this.price = price;
        this.propertyType = propertyType;
        this.area = area;
        this.floorAndDirection = floorAndDirection;
        this.buildingAge = buildingAge;
        this.extraInfo1 = extraInfo1;
        this.extraInfo2 = extraInfo2;
        this.extraInfo3 = extraInfo3;
        this.extraInfo4 = extraInfo4;
        this.confirmationStatus = confirmationStatus;
        this.date = date;
        this.depositPrice = depositPrice;
        this.monthPrice = monthPrice;
    }
}