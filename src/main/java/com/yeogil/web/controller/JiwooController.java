package com.yeogil.web.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yeogil.web.domain.CityDTO;
import com.yeogil.web.domain.CountryDTO;
import com.yeogil.web.service.CityService;
import com.yeogil.web.service.CountryService;

@RestController
public class JiwooController {
	@Autowired CountryService countryService;
	@Autowired CityService cityService;
	@Autowired List<CountryDTO> list;
	@Autowired List<CityDTO> list2;
	@Autowired Map<String,Object> map;
	
	@SuppressWarnings("unchecked")
	@PostMapping("/cont/{continentName}")
	public Map<?,?> countrylist1(@PathVariable String continentName) {
		System.out.println("지우 컨트롤러 countrylist ::: "+continentName);
		list = (List<CountryDTO>) countryService.findCountries(continentName);
		/* System.out.println("안들어오니"); */
		map.clear();
		map.put("ls",list);
		/* System.out.println(list.toString()); */
		return map;
	}
	
	@SuppressWarnings("unchecked")
	@PostMapping("/cont/country/{countryName}")
	public Map<?,?> citylist(@PathVariable String countryName) {
		System.out.println("지우 컨트롤러 citylist ::::"+countryName);
		list2 = (List<CityDTO>) cityService.findCities(countryName);
		
		map.clear();
		map.put("ls",list2);
		System.out.println(list2.toString()); 
		return map;
	}
	
	

}
