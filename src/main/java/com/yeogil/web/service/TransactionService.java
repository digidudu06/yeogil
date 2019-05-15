package com.yeogil.web.service;

import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.yeogil.web.domain.AttractionDTO;
import com.yeogil.web.domain.MemschAttrDTO;
import com.yeogil.web.domain.MemschCityDTO;
import com.yeogil.web.domain.ScheduleDTO;

@Transactional
@Component
public interface TransactionService {
	public void txinsert(ScheduleDTO sch);
	public void txinsert2(MemschCityDTO mem);
	public void txinsert3(MemschAttrDTO attr);
	public List<AttractionDTO> scheList(ScheduleDTO sch);
	
	public void removeMemSch();

}
