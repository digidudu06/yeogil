package com.yeogil.web.controller;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
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
	
	
	@PostMapping("/myplan/schedule/{memberid}")
	public Map<?,?> storelist(
			@PathVariable String memberid,
			@RequestBody ScheduleDTO sche
			) throws Exception{
		String ctr = sche.getCtr();
        String planTitle = sche.getPlanTitle();
        
        schedule.setCtr(ctr);
        schedule.setPlanTitle(planTitle);
        schedule.setMember_id(memberid);
        transactionservice.txinsert(schedule);
        
		// memsch에 db 저장 끝
		Pattern p = Pattern.compile("(^[0-9]*$)");
        String[] aa = sche.getCity().split("");
        String city = "";
        String planday  = "";
        String startDate = sche.getStartDate();
        
        
        // 날짜 계산
        SimpleDateFormat format = new SimpleDateFormat("yyyyMMdd");
        startDate = startDate.replaceAll("-", "");
        Calendar cal = Calendar.getInstance();
        Date date = format.parse(startDate);
        cal.setTime(date);
        
        int s =0;
        int day = 1;
         
        for(int i =0;i<aa.length-1;i++) {
            Matcher m = p.matcher(aa[i]);
            if(m.find()) {
            	planday = aa[i]+aa[i+1];
                for(int j=s;j<i;j++) {
                    city += aa[j];
                    s=i+2;
                }      

                String ss = planday.replaceAll("일","");
                for(int a=0;a<Integer.parseInt(ss);a++) {
                	mcdto = new MemschCityDTO();
                    mcdto.setMsCityName(city);
                    mcdto.setMsDate(format.format(cal.getTime()));
                    cal.add(Calendar.DATE, 1);
                    mcdto.setMs_seq(schedule.getMs_seq());
                	mcdto.setMsDay("Day"+day);
                	transactionservice.txinsert2(mcdto);
                	for(int v=0;v<Integer.parseInt(ss);v++) {
                    	schedule.setCity(mcdto.getMsCityName());
                    	schedule.setContinetn_seq(Integer.parseInt(ss));
                    	
                    	schList = transactionservice.scheList(schedule);
                    	
                    	attr = new MemschAttrDTO();
                		attr.setMsAttrName(schList.get(v).getAttrName());
                		attr.setMs_ctiy_seq(mcdto.getMs_ctiy_seq());
                		transactionservice.txinsert3(attr);
						/*
						 * for(int z=0;z<schList.size();z++) { }
						 */
                	}
                	day++;
                	//attr=null;
                }
            }
            city="";
            planday="";
        }

		return map;
	}
}
