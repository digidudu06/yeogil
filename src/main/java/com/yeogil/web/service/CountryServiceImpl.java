package com.yeogil.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yeogil.web.domain.CountryDTO;
import com.yeogil.web.mapper.CountryMapper;

@Service
public class CountryServiceImpl implements CountryService{
	@Autowired CountryMapper countryMapper;
	
	@Override
	public void createCountry(CountryDTO count) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<?> findAllCountry() {
		
		return countryMapper.selectAllCountry();
	}

	@Override
	public List<CountryDTO> findSomeCountry(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public CountryDTO findCountry(CountryDTO count) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int countCountry() {
		return countryMapper.countCountry();
	}

	@Override
	public void modifyCountry(CountryDTO count) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void removeCountry(CountryDTO count) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<?> findCountries(String continentEname) {
		return countryMapper.selectCountries(continentEname);
	}

}
