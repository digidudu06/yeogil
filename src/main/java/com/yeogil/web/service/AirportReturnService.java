package com.yeogil.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;

import com.yeogil.web.domain.AirportLeaveDTO;
import com.yeogil.web.domain.AirportReturnDTO;

@Component
public interface AirportReturnService {
	public void insertAirport(AirportReturnDTO ardto);
	public List<AirportReturnDTO> findAllAirport(HashMap<String, String> hash);
	public List<AirportReturnDTO> findSomeAirport(HashMap<String, String> hash);
	public AirportReturnDTO findAirport(AirportReturnDTO ardto);
	public int countAirport();
}
