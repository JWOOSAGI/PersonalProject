package com.bangez.api.apartment.repository;

import com.bangez.api.apartment.model.ApartmentModel;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ApartmentJpqlRepository {


    @Query("SELECT a FROM apartment a WHERE a.transactionType = :transactionType AND a.price BETWEEN :minPrice AND :maxPrice")
    List<ApartmentModel> findApartmentByPriceRange(
            @Param("transactionType") String transactionType,
            @Param("minPrice") Long minPrice,
            @Param("maxPrice") Long maxPrice
    );

    @Query("SELECT a FROM apartment a WHERE a.depositPrice BETWEEN :minDepositPrice AND :maxDepositPrice AND a.monthPrice BETWEEN :minMonthPrice AND :maxMonthPrice")
    List<ApartmentModel> getMonthApartment(
            @Param("minDepositPrice") Long minDepositPrice,
            @Param("maxDepositPrice") Long maxDepositPrice,
            @Param("minMonthPrice") Long minMonthPrice,
            @Param("maxMonthPrice") Long maxMonthPrice);

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO apartment (building_name, building_block, transaction_type," +
            " price, property_type, area, floor_and_direction, building_age, extrainfo1," +
            " extrainfo2, extrainfo3, extrainfo4, confirmation_status, date, deposit_price, month_price) " +
            "VALUES (:buildingName, :buildingBlock, :transactionType, :price, " +
            ":propertyType, :area, :floorAndDirection, :buildingAge, :extraInfo1, " +
            ":extraInfo2, :extraInfo3, :extraInfo4, :confirmationStatus, :date, :depositPrice, :monthPrice)",
            nativeQuery = true)
    void insertApart(@Param("buildingName") String buildingName,
                    @Param("buildingBlock") String buildingBlock,
                    @Param("transactionType") String transactionType,
                    @Param("price") Long price,
                    @Param("propertyType") String propertyType,
                    @Param("area") String area,
                    @Param("floorAndDirection") String floorAndDirection,
                    @Param("buildingAge") String buildingAge,
                    @Param("extraInfo1") String extraInfo1,
                    @Param("extraInfo2") String extraInfo2,
                    @Param("extraInfo3") String extraInfo3,
                    @Param("extraInfo4") String extraInfo4,
                    @Param("confirmationStatus") String confirmationStatus,
                    @Param("date") LocalDate date,
                    @Param("depositPrice") Long depositPrice,
                    @Param("monthPrice") Long monthPrice);
}
