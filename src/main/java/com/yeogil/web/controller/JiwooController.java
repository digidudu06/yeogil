package com.yeogil.web.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yeogil.web.domain.CountryDTO;
import com.yeogil.web.service.CityService;
import com.yeogil.web.service.CountryService;

@RestController
public class JiwooController {
	@Autowired CountryService countryService;
	@Autowired CityService cityService;
	@Autowired List<CountryDTO> list;
	@Autowired Map<String,Object> map;
	
	@SuppressWarnings("unchecked")
	@GetMapping("/ccc/{continentName}")
	public Map<?,?> countrylist(@PathVariable String continentName) {
		System.out.println("지우 컨트롤러 countrylist");
		list = (List<CountryDTO>) countryService.findCountries(continentName);
		map.clear();
		map.put("ls",list);
		return map;
	}
	
	@SuppressWarnings("unchecked")
	@PostMapping("/cont/{continentName}")
	public Map<?,?> countrylist1(@PathVariable String continentName) {
		System.out.println("지우 컨트롤러 countrylist11111111111111111111");
		list = (List<CountryDTO>) countryService.findCountries(continentName);
		map.clear();
		map.put("ls",list);
		return map;
	}
	
	@SuppressWarnings("unchecked")
	@GetMapping("/cont/country/{countryName}")
	public Map<?,?> citylist(@PathVariable String countryName) {
		System.out.println("지우 컨트롤러 countrylist");
		list = (List<CountryDTO>) cityService.findCites(countryName);
		map.clear();
		map.put("ls",list);
		System.out.println(list.toString());
		return map;
	}
	
	

}
