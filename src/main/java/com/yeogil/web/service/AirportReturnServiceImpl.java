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
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public AirportReturnDTO findAirport(AirportReturnDTO ardto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int countAirport() {
		// TODO Auto-generated method stub
		return 0;
	}

}
