package com.yeogil.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;

import com.yeogil.web.controller.Proxy;
import com.yeogil.web.domain.CountryDTO;

@Component
public interface CountryService {
	public void createCountry(CountryDTO count);
	public List<?> findAllCountry();
	public List<?> findCountries(Proxy pxy);
	public List<CountryDTO> findSomeCountry(HashMap<String, Object> map);
	public CountryDTO findCountry(CountryDTO count);
	public int countCountry();
	public void modifyCountry(CountryDTO count);
	public void removeCountry(CountryDTO count);
}
