package com.yeogil.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yeogil.web.domain.CityDTO;
import com.yeogil.web.mapper.CityMapper;

@Service
public class CityServiceImpl implements CityService{
	@Autowired CityMapper cityMapper;
	@Override
	public void createCity(CityDTO city) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<CityDTO> findAllCity(String countryName) {
		return cityMapper.selectAllCity(countryName);
	}

	@Override
	public List<CityDTO> findSomeCity(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public CityDTO findCity(CityDTO city) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int countCity() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void modifyCity(CityDTO city) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void removeCity(CityDTO city) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<?> findCities(String countryName) {
		return cityMapper.selectCities(countryName);
	}

}
