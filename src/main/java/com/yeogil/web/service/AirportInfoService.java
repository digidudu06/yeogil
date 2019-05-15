package com.yeogil.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;

import com.yeogil.web.controller.Proxy;
import com.yeogil.web.domain.AirportInfoDTO;

@Component
public interface AirportInfoService {
	public void insertAirportInfo(AirportInfoDTO aidto);
	public List<AirportInfoDTO> findAllAirportInfo(Proxy pxy);
	public List<AirportInfoDTO> findSomeAirportInfo(HashMap<String, String> hash);
	public AirportInfoDTO findAirportInfo(AirportInfoDTO aidto);
	public int countAirportInfo();
}
