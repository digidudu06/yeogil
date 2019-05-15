package com.yeogil.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yeogil.web.domain.AttractionDTO;
import com.yeogil.web.domain.MemschAttrDTO;
import com.yeogil.web.domain.MemschCityDTO;
import com.yeogil.web.domain.ScheduleDTO;
import com.yeogil.web.mapper.ScheduleMapper;

@Service
public class TransactionServiceImpl implements TransactionService {

	@Autowired ScheduleMapper schedulemapper;
	
	@Override
	public void txinsert(ScheduleDTO sch) {
		schedulemapper.insertSchedule(sch);
	}

	@Override
	public void txinsert2(MemschCityDTO mem) {
		schedulemapper.insertSchedule2(mem);
	}

	@Override
	public List<AttractionDTO> scheList(ScheduleDTO sch) {
		return schedulemapper.scheList(sch);
	}

	@Override
	public void txinsert3(MemschAttrDTO mem) {
		schedulemapper.insertSchedule3(mem);
		
	}

	@Override
	public void removeMemSch() {
		
	}

}
