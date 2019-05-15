package com.yeogil.web.service;

import java.util.Map;

import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.yeogil.web.domain.ScheduleDTO;

@Transactional
@Component
public interface TransactionService {
	public void txinsert(ScheduleDTO sche) throws Exception;
	public void removeMemSch();
}
