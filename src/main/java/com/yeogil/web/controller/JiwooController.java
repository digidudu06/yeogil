package com.yeogil.web.controller;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

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
		  IFunction i = (Object o) -> attractionmapper.selectOneCityAttractions(cityName);
		  List<?> ls = (List<?>) i.apply(cityName);
		  
		  map.clear(); 
		  map.put("ls",ls);
		 
		return map;
	}
	
	@PostMapping("/cont/country/attr/{memberid}")
	public void attrstore(@PathVariable String memberid,
			@RequestBody List<AttractionDTO> attr) {
		
		for(int i=0;i<attr.size();i++) {
			ScheduleDTO sch = new ScheduleDTO();
			sch.setAttrName(attr.get(i).getAttrName());
			sch.setMember_id(memberid);
			schedulemapper.insertSchedules(sch);
		}
	}
	
	@PostMapping("/myplan/schedule/{memberid}")
	public Map<?,?> storelist(
			@PathVariable String memberid,
			@RequestBody Object m
			) throws Exception{
		
		@SuppressWarnings("unchecked")
		List<Object> li = (List<Object>) m;
		
		@SuppressWarnings("unchecked")
		HashMap<String, Object> t = (HashMap<String, Object>) li.get(0);
		String cities = (String) t.get("city");
		String[] aaaaa = cities.split(" ");
		String city = "";
		
		Pattern p = Pattern.compile("(^[0-9]*$)");
		String[] aa = aaaaa[0].split("");
		for(int i =0;i<aa.length-1;i++) {
			Matcher mm = p.matcher(aa[i]);
			if(mm.find()) {
				for(int j=0;j<i;j++) {
					city += aa[j];
				}
			}
		}
		
		@SuppressWarnings("unchecked")
		HashMap<String, Object> t2 = (HashMap<String, Object>) li.get(1);
		List<?> list = (List<?>) t2.get("attr");
		String[] attrName = new String[list.size()];
		String startDate = ((String) t.get("startDate")).replaceAll("-", "");
		
		SimpleDateFormat format = new SimpleDateFormat("yyyyMMdd");
		Calendar cal = Calendar.getInstance();
		Date date = format.parse(startDate);
		cal.setTime(date);
		
		for(int i=0;i<list.size();i++) {
			ScheduleDTO sche = new ScheduleDTO();
	        sche.setMember_id(memberid);
			
			@SuppressWarnings("unchecked")
			HashMap<String, Object> t3 = (HashMap<String, Object>) list.get(i);
			sche.setAttrName((String) t3.get("attrName"));
			
			sche.setPlanTitle((String) t.get("planTitle"));
			String temp = attractionmapper.selectCityName(sche.getAttrName());
			if(!city.equals(temp)) {
				cal.add(Calendar.DATE, 1);
				city=temp;
			}
			sche.setStartDate(format.format(cal.getTime()));
			transactionservice.txinsert(sche);
		}
		return map;
	}
}
