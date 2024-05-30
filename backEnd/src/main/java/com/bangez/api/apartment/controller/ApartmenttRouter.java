package com.bangez.api.apartment.controller;

import com.bangez.api.apartment.repository.ApartmentRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@RequiredArgsConstructor
@Component
public class ApartmenttRouter {

    private final ApartmentRepository repository;

}
