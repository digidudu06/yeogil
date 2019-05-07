package com.yeogil.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;

import com.yeogil.web.domain.AirportDTO;

@Component
public interface AirportService {
	public void createCustomer(AirportDTO air);
	public List<AirportDTO> findAllCustomers(HashMap<String, String> hash);
	public List<AirportDTO> findSomeCustomers(HashMap<String, String> hash);
	public AirportDTO findCustomer(AirportDTO air);
	public int countCustomer();
	public void modifyCustomer(AirportDTO air);
	public void removeCustomer(AirportDTO air);
}
