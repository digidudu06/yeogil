package com.yeogil.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.yeogil.web.domain.ShoppingDTO;

@Component
public interface ShoppingService {
	public void createShopping(ShoppingDTO shop);
	public List<ShoppingDTO> findAllShopping(HashMap<String, Object> map);
	public List<ShoppingDTO> findSomeShopping(HashMap<String, Object> map);
	public ShoppingDTO findShopping(ShoppingDTO shop);
	public int countShopping();
	public void modifyShopping(ShoppingDTO shop);
	public void removeShopping(ShoppingDTO shop);
}
