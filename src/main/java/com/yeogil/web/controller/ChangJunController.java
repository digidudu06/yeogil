package com.yeogil.web.controller;

import java.util.List;
import java.util.Map;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.yeogil.web.domain.AirportReturnDTO;
import com.yeogil.web.domain.CountryDTO;
import com.yeogil.web.domain.ImageDTO;
import com.yeogil.web.mapper.AttractionMapper;
import com.yeogil.web.mapper.CityMapper;
import com.yeogil.web.mapper.CountryMapper;
import com.yeogil.web.mapper.MemberMapper;
import com.yeogil.web.mapper.MemschMapper;
import com.yeogil.web.mapper.ScheduleMapper;
import com.yeogil.web.service.CountryService;

@RestController
public class ChangJunController {
	@Autowired CountryService countryService;
	@Autowired CityMapper cityMapper;
	@Autowired AttractionMapper attractionMapper;
	@Autowired MemberMapper memberMapper;
	@Autowired MemschMapper memschMapper;
	@Autowired CountryMapper countryMapper;
	@Autowired ScheduleMapper scheduleMapper;
	@Autowired List<CountryDTO> list;
	@Autowired Map<String, Object> map;
	@Autowired AirportReturnDTO ar;
	@Autowired Proxy pxy;
	
	@SuppressWarnings("unchecked")
	@GetMapping("/country/list")
	public Map<?,?> countty() {
		list = (List<CountryDTO>) countryService.findAllCountry();
		map.clear();
		map.put("ls",list);
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
	
	@GetMapping("/attraction/{countryName}/{page}")
	public Map<?,?> attractionlist(
			@PathVariable String countryName,
			@PathVariable String page) {
		map.clear();
		map.put("srch", countryName);
		map.put("page_num", page);
		map.put("page_size", "5");
		map.put("block_size", "5");
		ISupplier is = () -> attractionMapper.countAttraction(countryName);
		map.put("row_count", is.get());
		pxy.carryOut(map);
		
		IFunction i = (Object o) -> attractionMapper.selectAllAttractions(pxy);
		List<?> ls = (List<?>) i.apply(pxy);
		map.clear();
		map.put("ls", ls);
		map.put("pxy", pxy);
		return map;
	}
	
	@GetMapping("/member/memcount")
	public Map<?,?> memcount() {
		ISupplier is = () -> memberMapper.countMember();
		map.clear();
		map.put("memcount", is.get());
		is = () -> scheduleMapper.countMemschs();
		map.put("schecount", is.get());
		
		is = () -> scheduleMapper.topCountry();
		map.put("top", is.get());
		
		is = () -> scheduleMapper.countryList();
		map.put("clist", is.get());
		return map;
	}
	
	@GetMapping("/map/chart")
	public Map<?,?> mapchart() {
		map.clear();
		ISupplier is = () -> scheduleMapper.countMemsch();
		map.put("data", is.get());
		return map;
	}
	
	@GetMapping("/attraction/some/{cityName}")
	public Map<?,?> attractionSome(@PathVariable String cityName) {
		map.clear();
		map.put("srch", cityName);
		map.put("page_num", "1");
		map.put("page_size", "5");
		map.put("block_size", "5");
		map.put("row_count", 3);
		pxy.carryOut(map);
		map.clear();
		IFunction i = (Object o) -> attractionMapper.selectCityAttractions(pxy);
		List<?> ls = (List<?>) i.apply(pxy);
		map.put("img", ls);
		return map;
	}
	
}
