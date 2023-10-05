package com.brocode.shreethic.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.brocode.shreethic.model.Flavour;
@Repository
public interface FlavourRepository extends JpaRepository<Flavour, Long> {
    // You can add custom query methods here if needed.
}
