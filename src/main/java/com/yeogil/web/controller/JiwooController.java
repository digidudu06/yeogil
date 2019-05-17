package com.yeogil.web.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.yeogil.web.domain.AttractionDTO;
import com.yeogil.web.domain.CityDTO;
import com.yeogil.web.domain.CountryDTO;
import com.yeogil.web.domain.MemschAttrDTO;
import com.yeogil.web.domain.MemschCityDTO;
import com.yeogil.web.domain.ScheduleDTO;
import com.yeogil.web.mapper.AttractionMapper;
import com.yeogil.web.mapper.CityMapper;
import com.yeogil.web.mapper.ScheduleMapper;
import com.yeogil.web.service.CityService;
import com.yeogil.web.service.CountryService;
import com.yeogil.web.service.TransactionService;

@RestController
public class JiwooController {
	@Autowired CountryService countryService;
	@Autowired CityService cityService;
	@Autowired CityMapper cityMapper;
	@Autowired Proxy pxy;
	@Autowired List<CountryDTO> list;
	@Autowired List<CityDTO> list2;
	@Autowired List<AttractionDTO> schList;
	@Autowired Map<String,Object> map;
	@Autowired ScheduleDTO schedule;
	@Autowired MemschAttrDTO attr;
	@Autowired AttractionMapper attractionmapper;
	@Autowired ScheduleMapper schedulemapper;
	@Autowired MemschCityDTO mcdto;
	@Autowired TransactionService transactionservice;
	
	@SuppressWarnings("unchecked")
	@PostMapping("/cont/{continentName}")
	public Map<?,?> countrylist1(@PathVariable String continentName) {
		map.clear();
		map.put("srch", continentName);
		map.put("page_size", "5");
		map.put("block_size", "5");
		map.put("row_count", 5);
		pxy.carryOut(map);
		list = (List<CountryDTO>) countryService.findCountries(pxy);
		map.clear();
		map.put("ls",list);
		return map;
	}
	
	@PostMapping("/cont/country/{countryName}")
	public Map<?,?> citylist(@PathVariable String countryName) {
		
		IFunction i = (Object o) -> cityMapper.selectAllCity(countryName);
		List<?> ls = (List<?>) i.apply(countryName);
		
		map.clear();
		map.put("ls",ls);
        
		return map;
	}
	
	@PostMapping("/cont/country/city/{cityName}")
	public Map<?,?> attrlist(@PathVariable String cityName) {
		System.out.println("===jiwoo cotr attr list==="+cityName);
		
		  IFunction i = (Object o) -> attractionmapper.selectOneCityAttractions(cityName);
		  List<?> ls = (List<?>) i.apply(cityName);
		  
		  	System.out.println(ls.toString());
		
		
		  map.clear(); 
		  map.put("ls",ls);
		 
		return map;
	}
	
	@PostMapping("/cont/country/city/cityName/{attrName}")
	public Map<?,?> attrstore(@PathVariable String attrName) {
		System.out.println("===jiwoo cotr attr store==="+attrName);
		
		/*
		 * IFunction i = (Object o) ->
		 * attractionmapper.selectOneCityAttractions(cityName); List<?> ls = (List<?>)
		 * i.apply(cityName);
		 * 
		 * System.out.println(ls.toString());
		 * 
		 * 
		 * map.clear(); map.put("ls",ls);
		 */
		 
		return map;
	}
	
	@PostMapping("/myplan/schedule/{memberid}")
	public Map<?,?> storelist(
			@PathVariable String memberid,
			@RequestBody ScheduleDTO sche
			) throws Exception{
		String ctr = sche.getCtr();
        String planTitle = sche.getPlanTitle();
        String startDate = sche.getStartDate();
        String city = sche.getCity();
        
        schedule.setCtr(ctr);
        schedule.setPlanTitle(planTitle);
        schedule.setMember_id(memberid);
        schedule.setStartDate(startDate);
        schedule.setCity(city);
        System.out.println("==jiwoo cotrl==>"+schedule.toString());
        transactionservice.txinsert(schedule);
		

		return map;
	}
}
