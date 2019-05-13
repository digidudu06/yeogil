package com.yeogil.web.service;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yeogil.web.domain.MemschCityDTO;
import com.yeogil.web.domain.ScheduleDTO;

@Transactional
@Component
public interface TransactionService {
	public void txinsert(ScheduleDTO sch);
	public void txinsert2(MemschCityDTO mem);
}
