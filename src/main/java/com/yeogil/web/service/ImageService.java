package com.yeogil.web.service;

import org.springframework.stereotype.Component;

import com.yeogil.web.domain.ImageDTO;

@Component
public interface ImageService {
	public ImageDTO findImage(ImageDTO img);
}
