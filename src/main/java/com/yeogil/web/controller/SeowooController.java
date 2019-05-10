package com.yeogil.web.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.yeogil.web.domain.AirportLeaveDTO;
import com.yeogil.web.domain.AirportReturnDTO;
import com.yeogil.web.domain.HotelDTO;
import com.yeogil.web.service.AirportLeaveServiceImpl;
import com.yeogil.web.service.AirportReturnServiceImpl;
import com.yeogil.web.service.HotelServiceImpl;


@RestController
public class SeowooController {
	@Autowired Map<String, Object> map;
	@Autowired List<AirportLeaveDTO> allist;
	@Autowired List<AirportReturnDTO > arlist;
	@Autowired AirportLeaveServiceImpl airportLeaveService;
	@Autowired AirportReturnServiceImpl airportReturnService;
	@Autowired HotelServiceImpl hotelService;
	
	@GetMapping("/airlist/{page}")
	public Map<?, ?> airpass(
			@PathVariable String page)throws Exception{
		System.out.println("==========seowooC airportList===========");
		map.clear();
		allist = new ArrayList<AirportLeaveDTO>();
		allist = airportLeaveService.findAllAirport();
		map.put("al", allist);
		
		arlist = new ArrayList<AirportReturnDTO>();
		arlist = airportReturnService.findAllAirport();
		map.put("ar", arlist);
		
		return map;
	}
	
	@PostMapping("/sw/htsave/{memberid}")
	public Map<?, ?> htsave(
			@PathVariable String memberid,
			@RequestBody HotelDTO hdto){
	System.out.println("==========seowooC 호텔 고객선택데이터저장===========");
	hdto.getHotelName();
	hdto.getRoomType();
	hdto.getNotice();
	hdto.getPrice();
	
	hdto.setHotelName(hdto.getHotelName());
	hdto.setRoomType(hdto.getRoomType());
	hdto.setNotice(hdto.getNotice());
	hdto.setPrice(hdto.getPrice());
	hotelService.createHotel(hdto);
	return map; 
	}
	//aa
	@PostMapping("/sw/airsave/{memberid}")
	public Map<?, ?> airsave(
			@PathVariable String memberid,
			@RequestBody Map<?, ?> map){
	System.out.println("==========seowooC 항공 고객선택데이터저장===========");
		/* hotelService.createHotel(hdto); */
	return map; 
	}
	 
}
