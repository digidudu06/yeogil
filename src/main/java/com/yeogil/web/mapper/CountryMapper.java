package com.yeogil.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.yeogil.web.domain.CountryDTO;

@Repository
public interface CountryMapper {
	public void insertCountry(CountryDTO count);
	public List<?> selectAllCountry();
	public List<?> selectCountries(String continentEname);
	public List<CountryDTO> selectSomeCountry(HashMap<String, Object> map);
	public CountryDTO selectCustomer(CountryDTO count);
	public int countCountry();
	public void updateCountry(CountryDTO count);
	public void deleteCountry(CountryDTO count);
}
