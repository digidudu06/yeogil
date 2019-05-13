package com.yeogil.web.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

}
