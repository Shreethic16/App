package com.brocode.shreethic.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="_flavour")
public class Flavour {
	@Id
	@GeneratedValue
	private Integer id;
	private String flavourname;
	private String desc;
	private Integer price;
	private Integer stock;
}