package com.yeogil.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.yeogil.web.domain.AirportLeaveDTO;

@Repository
public interface AirportLeaveMapper {
	public void insertCustomer(AirportLeaveDTO apldto);
	public List<AirportLeaveDTO> selectAllCustomers(HashMap<String, String> hash);
	public List<AirportLeaveDTO> selectSomeCustomers(HashMap<String, String> hash);
	public AirportLeaveDTO selectCustomer(AirportLeaveDTO apldto);
	public int countCustomer();
	public void updateCustomer(AirportLeaveDTO apldto);
	public void deleteCustomer(AirportLeaveDTO apldto);
}
