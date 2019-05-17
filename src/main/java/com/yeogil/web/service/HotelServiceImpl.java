package com.yeogil.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yeogil.web.domain.HotelDTO;
import com.yeogil.web.mapper.HotelMapper;

@Service
public class HotelServiceImpl implements HotelService{
	@Autowired HotelMapper htmap;
	@Override
	public void createHotel(HotelDTO htdto) {
		htmap.insertHotel(htdto);
		
	}

	@Override
	public List<HotelDTO> findAllCustomers() {
		return htmap.selectAllCustomers();
	}

	@Override
	public List<HotelDTO> findSomeCustomers(HashMap<String, String> hash) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public HotelDTO findCustomer(HotelDTO hotel) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int countCustomer() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void modifyCustomer(HotelDTO hotel) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void removeCustomer(HotelDTO hotel) {
		// TODO Auto-generated method stub
		
	}

}
