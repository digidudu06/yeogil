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

import com.yeogil.web.domain.AirportInfoDTO;
import com.yeogil.web.domain.AirportLeaveDTO;
import com.yeogil.web.domain.AirportReturnDTO;
import com.yeogil.web.domain.HotelDTO;
import com.yeogil.web.service.AirportInfoServiceImpl;
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
	@Autowired AirportInfoServiceImpl airportInfoService;
	
	@GetMapping("/airlist/{page}")
	public Map<?, ?> airpass(
			@PathVariable String page)throws Exception{
		System.out.println("==========seowoo C/list===========");
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
	System.out.println("==========seowoo C/호텔저장===========");
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
	
	@PostMapping("/sw/airsave/{memberid}")
	public Map<?, ?> airsave(
			@PathVariable String memberid,
			@RequestBody Map<String, Object> map){
	System.out.println("==========seowoo C/항공저장===========");
	String as1 = (String) map.get("airportName");
	String as2 = (String) map.get("departureTime");
	String as3 = (String) map.get("airportNameR");
	String as4 = (String) map.get("departureTimeR");
	
	AirportInfoDTO aidto = new AirportInfoDTO();
	String[] ass1 = as1.split(" ");
	aidto.setSAirportName(ass1[0]);
	aidto.setSDepartureTime(ass1[1]);
	aidto.setSArrivalTime(ass1[3]);
	aidto.setSDepartAirport(ass1[4]);
	aidto.setSArrivalAirport(ass1[6]);
	String[] aas1 = as2.split(" ");
	aidto.setSDepartDate(aas1[0]);
	aidto.setSArrivalDate(aas1[2]);
	
	String[] ass2 = as3.split(" ");
	aidto.setSAirportNamer(ass2[0]);
	aidto.setSDepartureTimer(ass2[1]);
	aidto.setSArrivalTimer(ass2[3]);
	aidto.setSDepartAirportr(ass2[4]);
	aidto.setSArrivalAirportr(ass2[6]);
	String[] aas3 = as4.split(" ");
	aidto.setSDepartDater(aas3[0]);
	aidto.setSArrivalDater(aas3[2]);
	aidto.setSPricer(aas3[4]);
	airportInfoService.insertAirportInfo(aidto);
	return map; 
	}
	
}
