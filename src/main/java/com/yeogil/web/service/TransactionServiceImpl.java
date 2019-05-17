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
import com.yeogil.web.domain.CityDTO;
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
		schedulemapper.insertSchedules(sche);
	}

	@Override
	public void removeMemSch(List<CityDTO> aa) {
		System.out.println(aa.toString());
		String memSeq = schedulemapper.selectMemSeq(aa.get(0).getCitySeq());
		System.out.println(memSeq);
		int i = 0;
		for(i=0;i<aa.size();i++) {
			System.out.println(aa.get(i).getCitySeq());
			schedulemapper.deleteScheAttrs(aa.get(i).getCitySeq());
			schedulemapper.deleteScheCities(aa.get(i).getCitySeq());
		}
		schedulemapper.deleteSche(memSeq);
		
	}


}
