package com.yeogil.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component
public class AirportPaymentDTO {
	private String airportName,					
	departureTime,
	arrivalTime,
	departAirport,
	arrivalAirport,
	departDate,
	arrivalDate,
	price;
}
