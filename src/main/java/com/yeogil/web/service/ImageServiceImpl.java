package com.yeogil.web.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yeogil.web.domain.ImageDTO;
import com.yeogil.web.mapper.ImageMapper;

@Service
public class ImageServiceImpl implements ImageService{
	@Autowired ImageMapper imageMapper;
	
	@Override
	public void createImage(ImageDTO img) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<ImageDTO> findAllImage(Map<String, String> map) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<ImageDTO> findSomeImage(Map<String, String> map) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ImageDTO findImage(ImageDTO img) {
		return imageMapper.selectImage(img);
	}

	@Override
	public int countImage() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void modifyImage(ImageDTO img) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void removeImage(ImageDTO img) {
		// TODO Auto-generated method stub
		
	}

}
