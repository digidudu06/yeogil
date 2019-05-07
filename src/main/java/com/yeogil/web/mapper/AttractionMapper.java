package com.yeogil.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.yeogil.web.domain.AttractionDTO;

@Repository
public interface AttractionMapper {
	public void insertAttraction(AttractionDTO att);
	public List<AttractionDTO> selectAllAttractions(HashMap<String, Object> map);
	public List<AttractionDTO> selectSomeAttractions(HashMap<String, Object> map);
	public AttractionDTO selectCustomer(AttractionDTO att);
	public int countAttraction();
	public void updateAttraction(AttractionDTO att);
	public void deleteAttraction(AttractionDTO att);
}
