package com.yeogil.web.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yeogil.web.domain.AttractionDTO;
import com.yeogil.web.domain.MemschAttrDTO;
import com.yeogil.web.domain.MemschCityDTO;
import com.yeogil.web.domain.ScheduleDTO;
import com.yeogil.web.mapper.ScheduleMapper;

@Transactional
@Service
public class TransactionServiceImpl implements TransactionService {

	@Autowired ScheduleMapper schedulemapper;
	@Autowired MemschCityDTO mcdto;
	@Autowired MemschAttrDTO attr;
	@Autowired List<AttractionDTO> schList;
	@Autowired ScheduleDTO schedule;
	
	@Override
	public void txinsert(ScheduleDTO sche) throws Exception {
				
				schedulemapper.insertSchedule(sche);
				System.out.println("==tx impl==>"+sche.toString());
				
				// memsch에 db 저장 끝
				Pattern p = Pattern.compile("(^[0-9]*$)");
		        String[] aa = sche.getCity().split("");
		        String city = "";
		        String planday  = "";
		        String startDate = schedule.getStartDate();
		        
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
		                	schedulemapper.insertSchedule2(mcdto);
		                	
		                	for(int v=0;v<Integer.parseInt(ss);v++) {
		                    	schedule.setCity(mcdto.getMsCityName());
		                    	schedule.setContinetn_seq(Integer.parseInt(ss));
		                    	
		                    	schList = schedulemapper.scheList(schedule);
		                    	
		                    	//System.out.println("==schList==>"+schList.toString());
		                    	
		                    	attr = new MemschAttrDTO();
		                		attr.setMsAttrName(schList.get(v).getAttrName());
		                		attr.setMs_ctiy_seq(mcdto.getMs_ctiy_seq());
		                		schedulemapper.insertSchedule3(attr);
		                		
		                		//System.out.println("==attr==>"+attr.toString());
							
								
//								 for(int z=0;z<schList.size()+1;z++) {}
								 
		                	}
		                	day++;
		                }
		            }
		            city="";
		            planday="";
		        }
	}

}
