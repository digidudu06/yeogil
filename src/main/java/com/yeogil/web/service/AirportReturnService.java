package com.yeogil.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;

import com.yeogil.web.domain.AirportReturnDTO;

@Component
public interface AirportReturnService {
	public void createCustomer(AirportReturnDTO aprdto);
	public List<AirportReturnDTO> findAllCustomers(HashMap<String, String> hash);
	public List<AirportReturnDTO> findSomeCustomers(HashMap<String, String> hash);
	public AirportReturnDTO findCustomer(AirportReturnDTO apay);
	public int countCustomer();
	public void modifyCustomer(AirportReturnDTO aprdto);
	public void removeCustomer(AirportReturnDTO aprdto);
}
