package com.yeogil.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;

import com.yeogil.web.domain.AirportPaymentDTO;

@Component
public interface AirportPaymentService {
	public void createCustomer(AirportPaymentDTO apay);
	public List<AirportPaymentDTO> findAllCustomers(HashMap<String, String> hash);
	public List<AirportPaymentDTO> findSomeCustomers(HashMap<String, String> hash);
	public AirportPaymentDTO findCustomer(AirportPaymentDTO apay);
	public int countCustomer();
	public void modifyCustomer(AirportPaymentDTO apay);
	public void removeCustomer(AirportPaymentDTO apay);
}
