package com.bangez.api.apartment.service;

import com.bangez.api.apartment.model.ApartmentModel;
import com.bangez.api.apartment.model.ApartmentModelDTO;

import java.util.Optional;

public interface ApartmentService {

    String create(ApartmentModelDTO dto);

    void deleteById(Long id);

    Optional<ApartmentModelDTO> findById(Long id);

    String modify(Long id, ApartmentModelDTO dto);

    default ApartmentModelDTO entityToDTO(ApartmentModel apartmentModel) {
        return ApartmentModelDTO.builder()
                .buildingName(apartmentModel.getBuildingName())
                .buildingBlock(apartmentModel.getBuildingBlock())
                .transactionType(apartmentModel.getTransactionType())
                .price(apartmentModel.getPrice())
                .propertyType(apartmentModel.getPropertyType())
                .area(apartmentModel.getArea())
                .floorAndDirection(apartmentModel.getFloorAndDirection())
                .buildingAge(apartmentModel.getBuildingAge())
                .extraInfo1(apartmentModel.getExtraInfo1())
                .extraInfo2(apartmentModel.getExtraInfo2())
                .extraInfo3(apartmentModel.getExtraInfo3())
                .extraInfo4(apartmentModel.getExtraInfo4())
                .confirmationStatus(apartmentModel.getConfirmationStatus())
                .date(apartmentModel.getDate())
                .depositPrice(apartmentModel.getDepositPrice())
                .monthPrice(apartmentModel.getMonthPrice())
                .build();
    }

    default ApartmentModel dtoToEntity(ApartmentModelDTO dto) {
        return ApartmentModel.builder()
                .buildingName(dto.getBuildingName())
                .buildingBlock(dto.getBuildingBlock())
                .transactionType(dto.getTransactionType())
                .price(dto.getPrice())
                .propertyType(dto.getPropertyType())
                .area(dto.getArea())
                .floorAndDirection(dto.getFloorAndDirection())
                .buildingAge(dto.getBuildingAge())
                .extraInfo1(dto.getExtraInfo1())
                .extraInfo2(dto.getExtraInfo2())
                .extraInfo3(dto.getExtraInfo3())
                .extraInfo4(dto.getExtraInfo4())
                .confirmationStatus(dto.getConfirmationStatus())
                .date(dto.getDate())
                .depositPrice(dto.getDepositPrice())
                .monthPrice(dto.getMonthPrice())
                .build();
    }

    boolean existsById(Long id);
}