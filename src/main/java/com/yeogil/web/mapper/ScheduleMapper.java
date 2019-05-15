package com.yeogil.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.yeogil.web.controller.Proxy;
import com.yeogil.web.domain.AttractionDTO;
import com.yeogil.web.domain.CountryDTO;
import com.yeogil.web.domain.MemschAttrDTO;
import com.yeogil.web.domain.MemschCityDTO;
import com.yeogil.web.domain.MemschDTO;
import com.yeogil.web.domain.ScheduleDTO;

@Repository
public interface ScheduleMapper {
	public void insertSchedule(ScheduleDTO sch);
	public void insertSchedule2(MemschCityDTO mem);
	public void insertSchedule3(MemschAttrDTO mem);
	
	public List<AttractionDTO> scheList(ScheduleDTO attr);
	public List<ScheduleDTO> selectAllSchedules(String id);
	public List<ScheduleDTO> selectSomeSchedule(HashMap<String,Object> map);
	
	public List<ScheduleDTO> selectMemAllSchedules(String id);
	public List<ScheduleDTO> selectMemOneSchedule(Proxy pxy);
	public List<ScheduleDTO> selectMemOneScheAttr(Proxy pxy);
	public String selectMemSeq(String citySeq);
	
	
	public ScheduleDTO selectSchedule(ScheduleDTO sch);
	public List<MemschDTO> countMemsch();
	public List<CountryDTO> countryList();
	public CountryDTO topCountry();
	
	public int countSchedules();
	public int lastsche();
	public int countMemschs();
	
	public void updateSchedule(ScheduleDTO sch);
	
	public void deleteScheAttrs(String citySeq);
	public void deleteScheCities(String citySeq);
	public void deleteSche(String memSeq);
	
}
