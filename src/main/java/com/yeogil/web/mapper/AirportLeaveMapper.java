package com.yeogil.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.yeogil.web.domain.AirportLeaveDTO;
import com.yeogil.web.domain.AirportReturnDTO;

@Repository
public interface AirportLeaveMapper {
	public void createAirport(AirportLeaveDTO aldto);
	public List<AirportLeaveDTO> selectAllAirport();
	public List<AirportLeaveDTO> selectSomeAirport(HashMap<String, String> hash);
	public AirportLeaveDTO selectAirport(AirportLeaveDTO aldto);
	public int countAirport();
}

