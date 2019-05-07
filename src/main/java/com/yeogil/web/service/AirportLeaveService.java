package com.yeogil.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;

import com.yeogil.web.domain.AirportLeaveDTO;

@Component
public interface AirportLeaveService {
	public void createCustomer(AirportLeaveDTO apldto);
	public List<AirportLeaveDTO> findAllCustomers(HashMap<String, String> hash);
	public List<AirportLeaveDTO> findSomeCustomers(HashMap<String, String> hash);
	public AirportLeaveDTO findCustomer(AirportLeaveDTO apay);
	public int countCustomer();
	public void modifyCustomer(AirportLeaveDTO apldto);
	public void removeCustomer(AirportLeaveDTO apldto);
}
