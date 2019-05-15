package com.yeogil.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yeogil.web.controller.Proxy;
import com.yeogil.web.domain.AirportInfoDTO;
import com.yeogil.web.mapper.AirportInfoMapper;

@Service
public class AirportInfoServiceImpl implements AirportInfoService{
	@Autowired AirportInfoMapper aimap;
	@Override
	public void insertAirportInfo(AirportInfoDTO aidto) {
		aimap.createAirportInfo(aidto);
	}

	@Override
	public List<AirportInfoDTO> findAllAirportInfo(Proxy pxy) {
		/* List<AirportInfoDTO> list = aimap.selectAllAirportInfo(pxy); */
		return null;
	}

	@Override
	public List<AirportInfoDTO> findSomeAirportInfo(HashMap<String, String> hash) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public AirportInfoDTO findAirportInfo(AirportInfoDTO aidto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int countAirportInfo() {
		// TODO Auto-generated method stub
		return 0;
	}

}
