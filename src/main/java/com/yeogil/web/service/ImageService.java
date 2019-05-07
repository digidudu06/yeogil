package com.yeogil.web.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.yeogil.web.domain.ImageDTO;

@Component
public interface ImageService {
	public void createImage(ImageDTO img);
	public List<ImageDTO> findAllImage(Map<String, String> map);
	public List<ImageDTO> findSomeImage(Map<String, String> map);
	public ImageDTO findImage(ImageDTO img);
	public int countImage();
	public void modifyImage(ImageDTO img);
	public void removeImage(ImageDTO img);
}
