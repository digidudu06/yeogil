package com.yeogil.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.yeogil.web.domain.ContinentDTO;

@Repository
public interface ContinentMapper {
	public void insertContinent(ContinentDTO con);
	public List<ContinentDTO> selectAllContinent(HashMap<String, Object> map);
	public List<ContinentDTO> selectSomeContinent(HashMap<String, Object> map);
	public ContinentDTO selectCustomer(ContinentDTO con);
	public int countContinent();
	public void updateContinent(ContinentDTO con);
	public void deleteContinent(ContinentDTO con);
}
