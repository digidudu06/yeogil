package com.yeogil.web.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yeogil.web.domain.ImageDTO;
import com.yeogil.web.mapper.ImageMapper;

@Service
public class ImageServiceImpl implements ImageService{
	@Autowired ImageMapper imageMapper;
	
	@Override
	public ImageDTO findImage(ImageDTO img) {
		return imageMapper.selectImage(img);
	}
}
