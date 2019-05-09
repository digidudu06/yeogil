package com.yeogil.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.yeogil.web.domain.CityDTO;

@Component
public interface CityService {
	public void createCity(CityDTO city);
	public List<?> findAllCity(String countryName);
	public List<CityDTO> findSomeCity(HashMap<String, Object> map);
	public CityDTO findCity(CityDTO city);
	public int countCity();
	public void modifyCity(CityDTO city);
	public void removeCity(CityDTO city);
	public List<?> findCities(String countryName);
}
