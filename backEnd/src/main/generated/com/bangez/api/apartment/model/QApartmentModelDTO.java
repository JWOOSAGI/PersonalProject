package com.bangez.api.apartment.model;

import com.querydsl.core.types.ConstructorExpression;
import javax.annotation.processing.Generated;

/**
 * com.example.backend.apartment.model.QApartmentModelDTO is a Querydsl Projection type for ApartmentModelDTO
 */
@Generated("com.querydsl.codegen.DefaultProjectionSerializer")
public class QApartmentModelDTO extends ConstructorExpression<ApartmentModelDTO> {

    private static final long serialVersionUID = 1698823516L;

    public QApartmentModelDTO(com.querydsl.core.types.Expression<Long> id, com.querydsl.core.types.Expression<String> building_name, com.querydsl.core.types.Expression<String> building_block, com.querydsl.core.types.Expression<String> transaction_type, com.querydsl.core.types.Expression<Long> price, com.querydsl.core.types.Expression<String> property_type, com.querydsl.core.types.Expression<String> area, com.querydsl.core.types.Expression<String> floor_and_direction, com.querydsl.core.types.Expression<String> building_age, com.querydsl.core.types.Expression<String> extrainfo1, com.querydsl.core.types.Expression<String> extrainfo2, com.querydsl.core.types.Expression<String> extrainfo3, com.querydsl.core.types.Expression<String> extrainfo4, com.querydsl.core.types.Expression<String> confirmation_status, com.querydsl.core.types.Expression<java.time.LocalDate> date, com.querydsl.core.types.Expression<Long> deposit_price, com.querydsl.core.types.Expression<Long> month_price) {
        super(ApartmentModelDTO.class, new Class<?>[]{long.class, String.class, String.class, String.class, long.class, String.class, String.class, String.class, String.class, String.class, String.class, String.class, String.class, String.class, java.time.LocalDate.class, long.class, long.class}, id, building_name, building_block, transaction_type, price, property_type, area, floor_and_direction, building_age, extrainfo1, extrainfo2, extrainfo3, extrainfo4, confirmation_status, date, deposit_price, month_price);
    }

}

