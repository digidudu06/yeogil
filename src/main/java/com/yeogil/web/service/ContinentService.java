package com.yeogil.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;

import com.yeogil.web.domain.ContinentDTO;

@Component
public interface ContinentService {
	public void createContinent(ContinentDTO con);
	public List<ContinentDTO> findAllContinent(HashMap<String, Object> map);
	public List<ContinentDTO> findSomeContinent(HashMap<String, Object> map);
	public ContinentDTO findContinent(ContinentDTO con);
	public int countContinent();
	public void modifyContinent(ContinentDTO con);
	public void removeContinent(ContinentDTO con);
}
