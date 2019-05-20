package com.yeogil.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;

import com.yeogil.web.domain.HotelDTO;

@Component
public interface HotelService {
	public void createHotel(HotelDTO hotel);
	public List<HotelDTO> findAllCustomers();
	public List<HotelDTO> findSomeCustomers(HashMap<String, String> hash);
	public HotelDTO findCustomer(HotelDTO hotel);
	public int countCustomer();
	public void modifyCustomer(HotelDTO hotel);
	public void removeCustomer(HotelDTO hotel);
}
