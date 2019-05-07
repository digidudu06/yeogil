package com.yeogil.web.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.yeogil.web.domain.AirportDTO;
import com.yeogil.web.domain.CityDTO;
import com.yeogil.web.domain.CountryDTO;
import com.yeogil.web.mapper.CityMapper;
import com.yeogil.web.service.CountryService;

@RestController
public class ChangJunController {
	
	@Autowired CountryService countryService;
	@Autowired CityMapper cityMapper;
	@Autowired List<CountryDTO> list;
	@Autowired Map<String, Object> map;
	@Autowired AirportDTO ar;
	@Autowired Proxy pxy;
	
	@SuppressWarnings("unchecked")
	@GetMapping("/country/list")
	public Map<?,?> countty() {
		list = (List<CountryDTO>) countryService.findAllCountry();
		map.clear();
		map.put("ls",list);
		ar = new AirportDTO();
		ar.setAirportName("");
		
		AirportDTO aaa = new AirportDTO();
		aaa.setAirportName("");
		return map;
	}
	
	@GetMapping("/city/{countryName}/{page}")
	public Map<?,?> citylist(
			@PathVariable String countryName,
			@PathVariable String page) {
		map.clear();
		map.put("srch", countryName);
		map.put("page_num", page);
		map.put("page_size", "5");
		map.put("block_size", "5");
		ISupplier is = () -> cityMapper.countCity();
		map.put("row_count", is.get());
		pxy.carryOut(map);
		
		IFunction i = (Object o) -> cityMapper.cjSelectAllCity(pxy);
		List<?> ls = (List<?>) i.apply(pxy);
		map.clear();
		map.put("ls", ls);
		map.put("pxy", pxy);
		return map;
	}
}
