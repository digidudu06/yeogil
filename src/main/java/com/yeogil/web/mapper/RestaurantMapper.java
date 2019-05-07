package com.yeogil.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.yeogil.web.domain.RestaurantDTO;

@Repository
public interface RestaurantMapper {
	public void insertRestaurant(RestaurantDTO res);
	public List<RestaurantDTO> selectAllRestaurant(HashMap<String, Object> map);
	public List<RestaurantDTO> selectSomeRestaurant(HashMap<String, Object> map);
	public RestaurantDTO selectCustomer(RestaurantDTO res);
	public int countRestaurant();
	public void updateRestaurant(RestaurantDTO res);
	public void deleteRestaurant(RestaurantDTO res);
}
