package com.yeogil.web.mapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.yeogil.web.controller.Proxy;
import com.yeogil.web.domain.ArticleDTO;
import com.yeogil.web.domain.MemschCityDTO;
import com.yeogil.web.domain.ScheduleDTO;

@Repository
public interface ScheduleMapper {
	public void insertSchedule(ScheduleDTO sch);
	public void insertSchedule2(MemschCityDTO sch);
	public List<ScheduleDTO> selectAllSchedules(String id);
	public List<ScheduleDTO> selectSomeSchedule(HashMap<String,Object> map);
	public List<ScheduleDTO> selectMemAllSchedules(String id);
	public List<ScheduleDTO> selectMemOneSchedule(Proxy pxy);
	public List<ScheduleDTO> selectMemOneScheAttr(Proxy pxy);
	public ScheduleDTO selectSchedule(ScheduleDTO sch);
	public int countSchedules();
	public int lastsche();
	public void updateSchedule(ScheduleDTO sch);
	public void deleteSchedule(ScheduleDTO sch);
}
