package com.yeogil.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component
public class AirportReturnDTO {
	private String airportNameR,					
	departureTimeR,
	arrivalTimeR,
	departAirportR,
	arrivalAirportR,
	departDateR,
	arrivalDateR,
	priceR,
	airImgR
	;

}
