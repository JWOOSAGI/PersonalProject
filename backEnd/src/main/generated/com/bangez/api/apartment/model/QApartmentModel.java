package com.bangez.api.apartment.model;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QApartmentModel is a Querydsl query type for ApartmentModel
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QApartmentModel extends EntityPathBase<ApartmentModel> {

    private static final long serialVersionUID = -1538524797L;

    public static final QApartmentModel apartmentModel = new QApartmentModel("apartmentModel");

    public final StringPath area = createString("area");

    public final StringPath buildingAge = createString("buildingAge");

    public final StringPath buildingBlock = createString("buildingBlock");

    public final StringPath buildingName = createString("buildingName");

    public final StringPath confirmationStatus = createString("confirmationStatus");

    public final DatePath<java.time.LocalDate> date = createDate("date", java.time.LocalDate.class);

    public final NumberPath<Long> depositPrice = createNumber("depositPrice", Long.class);

    public final StringPath extraInfo1 = createString("extraInfo1");

    public final StringPath extraInfo2 = createString("extraInfo2");

    public final StringPath extraInfo3 = createString("extraInfo3");

    public final StringPath extraInfo4 = createString("extraInfo4");

    public final StringPath floorAndDirection = createString("floorAndDirection");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final NumberPath<Long> monthPrice = createNumber("monthPrice", Long.class);

    public final NumberPath<Long> price = createNumber("price", Long.class);

    public final StringPath propertyType = createString("propertyType");

    public final StringPath transactionType = createString("transactionType");

    public QApartmentModel(String variable) {
        super(ApartmentModel.class, forVariable(variable));
    }

    public QApartmentModel(Path<? extends ApartmentModel> path) {
        super(path.getType(), path.getMetadata());
    }

    public QApartmentModel(PathMetadata metadata) {
        super(ApartmentModel.class, metadata);
    }

}

