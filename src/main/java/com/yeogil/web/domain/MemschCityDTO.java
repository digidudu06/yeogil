package com.yeogil.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component
public class MemschCityDTO {
	private String msCtiySeq,msDay,msCityName,msDate;
	private int msSeq;
}
