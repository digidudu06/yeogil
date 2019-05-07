package com.yeogil.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.yeogil.web.domain.AirportReturnDTO;

@Repository
public interface AirportReturnMapper {
	public void insertCustomer(AirportReturnDTO aprdto);
	public List<AirportReturnDTO> selectAllCustomers(HashMap<String, String> hash);
	public List<AirportReturnDTO> selectSomeCustomers(HashMap<String, String> hash);
	public AirportReturnDTO selectCustomer(AirportReturnDTO aprdto);
	public int countCustomer();
	public void updateCustomer(AirportReturnDTO aprdto);
	public void deleteCustomer(AirportReturnDTO aprdto);
}

