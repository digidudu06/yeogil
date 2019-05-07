package com.yeogil.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.yeogil.web.domain.ShoppingDTO;

@Repository
public interface ShoppingMapper {
	public void insertShopping(ShoppingDTO shop);
	public List<ShoppingDTO> selectAllShopping(HashMap<String, Object> map);
	public List<ShoppingDTO> selectSomeShopping(HashMap<String, Object> map);
	public ShoppingDTO selectCustomer(ShoppingDTO shop);
	public int countShopping();
	public void updateShopping(ShoppingDTO shop);
	public void deleteShopping(ShoppingDTO shop);
}
