package com.yeogil.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yeogil.web.domain.AirportLeaveDTO;
import com.yeogil.web.mapper.AirportLeaveMapper;

@Service
public class AirportLeaveServiceImpl implements AirportLeaveService{
	@Autowired AirportLeaveMapper almap;
	@Override
	public void insertAirport(AirportLeaveDTO aldto) {
		almap.createAirport(aldto);
	}

	@Override
	public List<AirportLeaveDTO> findAllAirport() {
		return almap.selectAllAirport();
	}

	@Override
	public List<AirportLeaveDTO> findSomeAirport(HashMap<String, String> hash) {
		List<AirportLeaveDTO> allist = almap.selectSomeAirport(hash);
		return allist;
	}

	@Override
	public AirportLeaveDTO findAirport(AirportLeaveDTO aldto) {
		AirportLeaveDTO apldto = almap.selectAirport(aldto);
		return apldto;
	}

	@Override
	public int countAirport() {
		almap.countAirport();
		return 0;
	}

}
