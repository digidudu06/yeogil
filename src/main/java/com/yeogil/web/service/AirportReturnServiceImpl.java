package com.yeogil.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yeogil.web.domain.AirportReturnDTO;
import com.yeogil.web.mapper.AirportReturnMapper;

@Service
public class AirportReturnServiceImpl implements AirportReturnService{
	@Autowired AirportReturnMapper armap;
	@Override
	public void insertAirport(AirportReturnDTO ardto) {
		armap.createAirport(ardto);
	}

	@Override
	public List<AirportReturnDTO> findAllAirport() {
		return armap.selectAllAirport();
	}

	@Override
	public List<AirportReturnDTO> findSomeAirport(HashMap<String, String> hash) {
		List<AirportReturnDTO> ardto = armap.selectSomeAirport(hash);
		return ardto;
	}

	@Override
	public AirportReturnDTO findAirport(AirportReturnDTO ardto) {
		AirportReturnDTO aprdto = armap.selectAirport(ardto);
		return aprdto;
	}

	@Override
	public int countAirport() {
		armap.countAirport();
		return 0;
	}

}
