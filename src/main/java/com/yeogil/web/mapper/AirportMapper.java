package com.yeogil.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.yeogil.web.domain.AirportDTO;

@Repository
public interface AirportMapper {
	public void insertCustomer(AirportDTO air);
	public List<AirportDTO> selectAllCustomers(HashMap<String, String> hash);
	public List<AirportDTO> selectSomeCustomers(HashMap<String, String> hash);
	public AirportDTO selectCustomer(AirportDTO air);
	public int countCustomer();
	public void updateCustomer(AirportDTO air);
	public void deleteCustomer(AirportDTO air);
}

