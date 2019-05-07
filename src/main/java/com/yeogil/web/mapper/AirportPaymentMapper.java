package com.yeogil.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.yeogil.web.domain.AirportPaymentDTO;

@Repository
public interface AirportPaymentMapper {
	public void insertCustomer(AirportPaymentDTO apay);
	public List<AirportPaymentDTO> selectAllCustomers(HashMap<String, String> hash);
	public List<AirportPaymentDTO> selectSomeCustomers(HashMap<String, String> hash);
	public AirportPaymentDTO selectCustomer(AirportPaymentDTO apay);
	public int countCustomer();
	public void updateCustomer(AirportPaymentDTO apay);
	public void deleteCustomer(AirportPaymentDTO apay);
}
