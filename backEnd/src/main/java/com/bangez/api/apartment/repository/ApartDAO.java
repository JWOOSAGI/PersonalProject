package com.bangez.api.apartment.repository;

import com.bangez.api.apartment.model.ApartmentModelDTO;

import java.util.List;

public interface ApartDAO {
    List<ApartmentModelDTO> getAllApartment();
}
