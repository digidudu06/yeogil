package com.yeogil.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;

import com.yeogil.web.domain.HotelRoomDTO;

@Component
public interface HotelRoomService {
	public void createCustomer(HotelRoomDTO hroom);
	public List<HotelRoomDTO> findAllCustomers(HashMap<String, String> hash);
	public List<HotelRoomDTO> findSomeCustomers(HashMap<String, String> hash);
	public HotelRoomDTO findCustomer(HotelRoomDTO hroom);
	public int countCustomer();
	public void modifyCustomer(HotelRoomDTO hroom);
	public void removeCustomer(HotelRoomDTO hroom);
}
