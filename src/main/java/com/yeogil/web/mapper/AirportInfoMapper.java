package com.yeogil.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.yeogil.web.controller.Proxy;
import com.yeogil.web.domain.AirportInfoDTO;

@Repository
public interface AirportInfoMapper {
	public void createAirportInfo(AirportInfoDTO aidto);
	public List<AirportInfoDTO> selectAllAirportInfo(Proxy pxy);
	/*
	 * public List<AirportInfoDTO> selectSomeAirportInfo(HashMap<String, String>
	 * hash); public AirportInfoDTO selectAirportInfo(AirportInfoDTO aidto); public
	 * int countAirportInfo();
	 */
}

