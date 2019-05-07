package com.yeogil.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component
public class HotelPaymentDTO {
	private String paymentCode,
					roomNum,
					startDate,
					endDate;
	private int price;
}
