package com.yeogil.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.yeogil.web.controller.Proxy;
import com.yeogil.web.domain.CityDTO;

@Repository
public interface CityMapper {
	public void insertCity(CityDTO city);
	public List<CityDTO> selectAllCity(String countryName);
	public List<CityDTO> cjSelectAllCity(Proxy pxy);
	public List<CityDTO> selectSomeCity(String countryName);
	public List<?> selectCities(String countryName);
	public CityDTO selectCustomer(CityDTO city);
	public int countCity();
	public void updateCity(CityDTO city);
	public void deleteCity(CityDTO city);
}
