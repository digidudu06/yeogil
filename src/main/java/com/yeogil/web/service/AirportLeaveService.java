package com.yeogil.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;

import com.yeogil.web.domain.AirportLeaveDTO;
import com.yeogil.web.domain.AirportReturnDTO;

@Component
public interface AirportLeaveService {
	public void insertAirport(AirportLeaveDTO aldto);
	public List<AirportLeaveDTO> findAllAirport(HashMap<String, String> hash);
	public List<AirportLeaveDTO> findSomeAirport(HashMap<String, String> hash);
	public AirportLeaveDTO findAirport(AirportLeaveDTO aldto);
	public int countAirport();
}
