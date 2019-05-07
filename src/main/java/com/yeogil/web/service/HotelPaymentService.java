package com.yeogil.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;

import com.yeogil.web.domain.HotelPaymentDTO;

@Component
public interface HotelPaymentService {
	public void createCustomer(HotelPaymentDTO hpay);
	public List<HotelPaymentDTO> findAllCustomers(HashMap<String, String> hash);
	public List<HotelPaymentDTO> findSomeCustomers(HashMap<String, String> hash);
	public HotelPaymentDTO findCustomer(HotelPaymentDTO hpay);
	public int countCustomer();
	public void modifyCustomer(HotelPaymentDTO hpay);
	public void removeCustomer(HotelPaymentDTO hpay);
}
