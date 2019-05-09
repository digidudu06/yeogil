package com.yeogil.web.controller;

import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.yeogil.web.domain.CityDTO;
import com.yeogil.web.domain.CountryDTO;
import com.yeogil.web.domain.ScheduleDTO;
import com.yeogil.web.mapper.CityMapper;
import com.yeogil.web.service.CityService;
import com.yeogil.web.service.CountryService;

@RestController
public class JiwooController {
	@Autowired CountryService countryService;
	@Autowired CityService cityService;
	@Autowired CityMapper cityMapper;
	@Autowired Proxy pxy;
	@Autowired List<CountryDTO> list;
	@Autowired List<CityDTO> list2;
	@Autowired Map<String,Object> map;
	@Autowired ScheduleDTO sche;
	
	@SuppressWarnings("unchecked")
	@PostMapping("/cont/{continentName}")
	public Map<?,?> countrylist1(@PathVariable String continentName) {
		System.out.println("지우 컨트롤러 countrylist ::: "+continentName);
		list = (List<CountryDTO>) countryService.findCountries(continentName);
		/* System.out.println("안들어오니"); */
		map.clear();
		map.put("ls",list);
		System.out.println(list.toString());
        
		/* System.out.println(list.toString()); */
		return map;
	}
	
	@PostMapping("/cont/country/{countryName}")
	public Map<?,?> citylist(@PathVariable String countryName) {
		System.out.println("지우 컨트롤러 citylist ::::"+countryName);
		
		IFunction i = (Object o) -> cityMapper.selectAllCity(countryName);
		List<?> ls = (List<?>) i.apply(countryName);
		
		map.clear();
		map.put("ls",ls);
        
		return map;
	}
	
	@PostMapping("/myplan/schedule/{memberid}")
	public ScheduleDTO storelist(
			@PathVariable String memberid,
			@RequestBody ScheduleDTO sche
			){
		System.out.println("=======내 계획========"+sche.toString());
		Pattern p = Pattern.compile("(^[0-9]*$)");
        String[] aa = sche.getCity().split("");
        String temp = "";
        String ttt  = "";
        String tt  = "";
        int s =0;
        for(int i =0;i<aa.length-1;i++) {
            Matcher m = p.matcher(aa[i]);
            if(m.find()) {
                ttt = aa[i]+aa[i+1];
                
                for(int j=s;j<i;j++) {
                    temp += aa[j];
                    s=i+2;
                }
                tt += temp +" " + ttt +" ";
            }
            temp="";
        }
        
        String sd = sche.getStartDate();
        String ctr = sche.getCtr();
        
		return null;
		
	}
}
