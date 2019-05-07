package com.yeogil.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.yeogil.web.domain.ArticleDTO;
import com.yeogil.web.domain.ScheduleDTO;

@Repository
public interface ScheduleMapper {
	public void insertSchedule(ScheduleDTO sch);
	public List<ArticleDTO> selectAllSchedules(HashMap<String,Object> map);
	public List<ArticleDTO> selectSomeSchedule(HashMap<String,Object> map);
	public ArticleDTO selectSchedule(ScheduleDTO sch);
	public int countSchedules();
	public void updateSchedule(ScheduleDTO sch);
	public void deleteSchedule(ScheduleDTO sch);
}
