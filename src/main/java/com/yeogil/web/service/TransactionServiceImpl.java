package com.yeogil.web.service;


import java.util.List;

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
	public void txinsert(ScheduleDTO sche) {
		schedulemapper.insertSchedules(sche);
	}

}
