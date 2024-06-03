package com.bangez.api.apartment.service;


import com.bangez.api.apartment.model.ApartmentModel;
import com.bangez.api.apartment.model.ApartmentModelDTO;
import com.bangez.api.apartment.repository.ApartmentRepository;
import lombok.RequiredArgsConstructor;
import org.eclipse.jdt.internal.compiler.env.ISourceType;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.w3c.dom.ls.LSOutput;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ApartmentServiceImpl implements ApartmentService {

    private final ApartmentRepository repository;

    @Override
    public Optional<ApartmentModelDTO> findById(Long id) {
        return repository.findById(id).map(this ::entityToDTO);
    }


    @Override
    @Transactional
    public String modify(Long id, ApartmentModelDTO dto) {
        return repository.findById(id)
                .map(existingApartment -> {
                    updateApartmentFromDto(existingApartment, dto);
                    repository.save(existingApartment);
                    return "SUCCESS";
                })
                .orElse("FAILURE: Apartment with ID " + id + " not found");
    }

    private void updateApartmentFromDto(ApartmentModel apartment, ApartmentModelDTO dto) {
        apartment.setBuildingName(dto.getBuildingName());
        apartment.setBuildingBlock(dto.getBuildingBlock());
        apartment.setTransactionType(dto.getTransactionType());
        apartment.setPrice(dto.getPrice());
        apartment.setPropertyType(dto.getPropertyType());
        apartment.setArea(dto.getArea());
        apartment.setFloorAndDirection(dto.getFloorAndDirection());
        apartment.setBuildingAge(dto.getBuildingAge());
        apartment.setExtraInfo1(dto.getExtraInfo1());
        apartment.setExtraInfo2(dto.getExtraInfo2());
        apartment.setExtraInfo3(dto.getExtraInfo3());
        apartment.setExtraInfo4(dto.getExtraInfo4());
        apartment.setConfirmationStatus(dto.getConfirmationStatus());
        apartment.setDate(dto.getDate());
        apartment.setDepositPrice(dto.getDepositPrice());
        apartment.setMonthPrice(dto.getMonthPrice());
    }

    @Override
    public boolean existsById(Long id) {
        return repository.existsById(id);
    }


    @Override
    public String create(ApartmentModelDTO dto) {
        ApartmentModel apartmentModel = ApartmentModel.builder()
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
        repository.save(apartmentModel);
        return "SUCCESS";
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }


}
