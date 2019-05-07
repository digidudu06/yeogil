package com.yeogil.web.mapper;

import java.util.HashMap;
import java.util.List;

import com.yeogil.web.domain.HotelRoomDTO;

public interface HotelRoomMapper {
	public void insertCustomer(HotelRoomDTO hroom);
	public List<HotelRoomDTO> selectAllCustomers(HashMap<String, String> hash);
	public List<HotelRoomDTO> selectSomeCustomers(HashMap<String, String> hash);
	public HotelRoomDTO selectCustomer(HotelRoomDTO hroom);
	public int countCustomer();
	public void updateCustomer(HotelRoomDTO hroom);
	public void deleteCustomer(HotelRoomDTO hroom);
}
