package com.yeogil.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;

import com.yeogil.web.domain.AttractionDTO;

@Component
public interface AttractionService {
	public void createAttraction(AttractionDTO att);
	public List<AttractionDTO> findAllAttractions(HashMap<String, Object> map);
	public List<AttractionDTO> findSomeAttractions(HashMap<String, Object> map);
	public AttractionDTO findCustomer(AttractionDTO att);
	public int countAttraction();
	public void modifyAttraction(AttractionDTO att);
	public void removeAttraction(AttractionDTO att);
}
