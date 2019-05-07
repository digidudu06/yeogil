package com.yeogil.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.yeogil.web.domain.RestaurantDTO;

@Component
public interface RestaurantService {
	public void createRestaurant(RestaurantDTO res);
	public List<RestaurantDTO> findAllRestaurant(HashMap<String, Object> map);
	public List<RestaurantDTO> findSomeRestaurant(HashMap<String, Object> map);
	public RestaurantDTO findRestaurant(RestaurantDTO res);
	public int countRestaurant();
	public void modifyRestaurant(RestaurantDTO res);
	public void removeRestaurant(RestaurantDTO res);
}
