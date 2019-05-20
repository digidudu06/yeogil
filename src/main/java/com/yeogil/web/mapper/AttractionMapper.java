package com.yeogil.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.yeogil.web.controller.Proxy;
import com.yeogil.web.domain.AttractionDTO;

@Repository
public interface AttractionMapper {
	public void insertAttraction(AttractionDTO att);
	public List<AttractionDTO> selectAllAttractions(Proxy pxy);
	public List<AttractionDTO> selectCityAttractions(Proxy pxy);
	public List<AttractionDTO> selectOneCityAttractions(String att);
	public AttractionDTO selectCustomer(AttractionDTO att);
	public String selectCityName(String attrName);
	public int selectAttrSeq(String att);
	public int countAttraction(String countryName);
	public void updateAttraction(AttractionDTO att);
	public void deleteAttraction(AttractionDTO att);
}
