package com.yeogil.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.yeogil.web.domain.HotelPaymentDTO;

@Repository
public interface HotelPaymentMapper {
	public void insertCustomer(HotelPaymentDTO hpay);
	public List<HotelPaymentDTO> selectAllCustomers(HashMap<String, String> hash);
	public List<HotelPaymentDTO> selectSomeCustomers(HashMap<String, String> hash);
	public HotelPaymentDTO selectCustomer(HotelPaymentDTO hpay);
	public int countCustomer();
	public void updateCustomer(HotelPaymentDTO hpay);
	public void deleteCustomer(HotelPaymentDTO hpay);
}
