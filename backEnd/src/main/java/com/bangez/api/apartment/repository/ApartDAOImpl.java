package com.bangez.api.apartment.repository;

import com.bangez.api.apartment.model.ApartmentModelDTO;
import com.bangez.api.apartment.model.QApartmentModel;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ApartDAOImpl implements ApartDAO {

    private final JPAQueryFactory factory;
    QApartmentModel apartmentModel = QApartmentModel.apartmentModel;

    @Override
    public List<ApartmentModelDTO> getAllApartment() {
        return factory.select(
                        apartmentModel.id,
                        apartmentModel.buildingName,
                        apartmentModel.buildingBlock,
                        apartmentModel.transactionType,
                        apartmentModel.price,
                        apartmentModel.propertyType,
                        apartmentModel.area,
                        apartmentModel.floorAndDirection,
                        apartmentModel.buildingAge,
                        apartmentModel.extraInfo1,
                        apartmentModel.extraInfo2,
                        apartmentModel.extraInfo3,
                        apartmentModel.extraInfo4,
                        apartmentModel.confirmationStatus,
                        apartmentModel.date,
                        apartmentModel.depositPrice,
                        apartmentModel.monthPrice
                ).from(apartmentModel)
                .fetch()
                .stream().map(tuple -> ApartmentModelDTO.builder()
                        .id(tuple.get(QApartmentModel.apartmentModel.id))
                        .buildingName(tuple.get(QApartmentModel.apartmentModel.buildingName))
                        .buildingBlock(tuple.get(QApartmentModel.apartmentModel.buildingBlock))
                        .transactionType(tuple.get(QApartmentModel.apartmentModel.transactionType))
                        .price(tuple.get(QApartmentModel.apartmentModel.price))
                        .propertyType(tuple.get(QApartmentModel.apartmentModel.propertyType))
                        .area(tuple.get(QApartmentModel.apartmentModel.area))
                        .floorAndDirection(tuple.get(QApartmentModel.apartmentModel.floorAndDirection))
                        .buildingAge(tuple.get(QApartmentModel.apartmentModel.buildingAge))
                        .extraInfo1(tuple.get(QApartmentModel.apartmentModel.extraInfo1))
                        .extraInfo2(tuple.get(QApartmentModel.apartmentModel.extraInfo2))
                        .extraInfo3(tuple.get(QApartmentModel.apartmentModel.extraInfo3))
                        .extraInfo4(tuple.get(QApartmentModel.apartmentModel.extraInfo4))
                        .confirmationStatus(tuple.get(QApartmentModel.apartmentModel.confirmationStatus))
                        .date(tuple.get(QApartmentModel.apartmentModel.date))
                        .depositPrice(tuple.get(QApartmentModel.apartmentModel.depositPrice))
                        .monthPrice(tuple.get(QApartmentModel.apartmentModel.monthPrice))
                        .build()).toList();
    }
}