package com.bangez.api.apartment.controller;

import com.bangez.api.apartment.model.ApartmentModel;
import com.bangez.api.apartment.model.ApartmentModelDTO;
import com.bangez.api.apartment.repository.ApartDAOImpl;
import com.bangez.api.apartment.service.ApartmentService;
import com.bangez.api.apartment.repository.ApartmentRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Slf4j
@CrossOrigin("*")
@RestController
@RequestMapping("/api/apartment")
@RequiredArgsConstructor
public class ApartmentController {


    private final ApartmentService service;
    private final ApartmentRepository repository;
    private final ApartDAOImpl dao;

    @PostMapping("/create")
    public String create(@RequestBody ApartmentModelDTO dto) {
        return service.create(dto);
    }


//    @GetMapping("/search")
//    public ResponseEntity<ApartDTO> findById(@RequestParam Long id) {
//        return ResponseEntity.ok(service.findById(id));
//    }

    @DeleteMapping("/delete/{id}")
    public String deleteById(@PathVariable Long id) {
        if (!service.existsById(id)) {
            return "삭제 실패";
        }
        service.deleteById(id);
        return (service.findById(id).isPresent()) ? "삭제 실패" : "삭제 되었습니다.";
    }

    @PutMapping("/update/{id}")
    public String modify(@PathVariable Long id, @RequestBody ApartmentModelDTO dto) {
        return service.modify(id, dto);
    }

    @GetMapping(path = "/detail")
    public ResponseEntity<Optional<ApartmentModelDTO>> findById(@RequestParam Long id) {
        log.info("입력받은 정보 : {}", id );
        return ResponseEntity.ok(service.findById(id));
    }

    @GetMapping("/read")
    public List<ApartmentModel> getApartmentByPriceRange(@RequestParam Long minPrice, @RequestParam Long maxPrice, @RequestParam String transaction_Type) {
        return repository.findApartmentByPriceRange(transaction_Type,  minPrice, maxPrice);
    }
    @GetMapping("/readmonth")
    public List<ApartmentModel> getMonthApartment(@RequestParam Long minDepositPrice, @RequestParam Long MaxDepositPrice,
                                      @RequestParam Long minMonthPrice, @RequestParam Long maxMonthPrice){
        return repository.getMonthApartment(minDepositPrice,MaxDepositPrice, minMonthPrice, maxMonthPrice);
    }
    @GetMapping("/readall")
    public List<ApartmentModelDTO> getAllApartment() {
        return dao.getAllApartment();
    }



}