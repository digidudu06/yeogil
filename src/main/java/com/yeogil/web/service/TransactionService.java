package com.yeogil.web.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.yeogil.web.domain.CityDTO;
import com.yeogil.web.domain.ScheduleDTO;

@Component
public interface TransactionService {
	public void txinsert(ScheduleDTO sche);
}
