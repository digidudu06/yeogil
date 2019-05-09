package com.yeogil.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.yeogil.web.domain.AirportLeaveDTO;
import com.yeogil.web.domain.AirportReturnDTO;

@Repository
public interface AirportReturnMapper {
	public void createAirport(AirportReturnDTO ardto);
	public List<AirportReturnDTO> selectAllAirport();
	public List<AirportReturnDTO> selectSomeAirport(HashMap<String, String> hash);
	public AirportReturnDTO selectAirport(AirportReturnDTO ardto);
	public int countAirport();
}

