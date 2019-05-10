package com.yeogil.web.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.yeogil.web.domain.CityDTO;
import com.yeogil.web.domain.CountryDTO;
import com.yeogil.web.domain.MemschCityDTO;
import com.yeogil.web.domain.ScheduleDTO;
import com.yeogil.web.mapper.CityMapper;
import com.yeogil.web.mapper.ScheduleMapper;
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
	@Autowired ScheduleDTO schedule;
	@Autowired ScheduleMapper schedulemapper;
	@Autowired MemschCityDTO mcdto;
	
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
	
	@Transactional
	@PostMapping("/myplan/schedule/{memberid}")
	public ScheduleDTO storelist(
			@PathVariable String memberid,
			@RequestBody ScheduleDTO sche
			) throws Exception{
		System.out.println("=======내 계획========"+sche.toString());
		String ctr = sche.getCtr();
        String planTitle = sche.getPlanTitle();
        
        schedule.setCtr(ctr);
        schedule.setPlanTitle(planTitle);
        schedule.setMember_id(memberid);
		IConsumer ic = (Object o) -> schedulemapper.insertSchedule(schedule);
		ic.accept(schedule);
		
        ISupplier is = () -> schedulemapper.lastsche();
        int lastsch = (int) is.get();
		// memsch에 db 저장 끝
		Pattern p = Pattern.compile("(^[0-9]*$)");
        String[] aa = sche.getCity().split("");
        String city = "";
        String planday  = "";
        String startDate = sche.getStartDate();
        
        //String msseq = ;
        
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
                cal.add(Calendar.DATE, Integer.parseInt(ss));
                System.out.println(city);
                System.out.println(format.format(cal.getTime()));

                for(int a=0;a<Integer.parseInt(ss);a++) {
                	mcdto = new MemschCityDTO();
                    mcdto.setMsCityName(city);
                    mcdto.setMsDate(format.format(cal.getTime()));
                    mcdto.setMsSeq(lastsch);
                	mcdto.setMsDay("Day"+day);
                	ic = (Object o) -> schedulemapper.insertSchedule2(mcdto);
                	ic.accept(mcdto);
                	day++;
                }
               
            }
            city="";
            planday="";
        }
		return sche;
		
	}
}
