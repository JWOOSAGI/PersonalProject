package com.bangez.api.apartment.repository;


import com.bangez.api.apartment.model.ApartmentModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApartmentRepository extends JpaRepository<ApartmentModel, Long>, ApartmentJpqlRepository, ApartDAO{
}
