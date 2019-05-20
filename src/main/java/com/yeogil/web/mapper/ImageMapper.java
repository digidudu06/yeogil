package com.yeogil.web.mapper;

import java.util.Map;
import java.util.List;

import com.yeogil.web.domain.ImageDTO;

public interface ImageMapper {
	public void insertImage(ImageDTO img);
	public List<ImageDTO> selectAllImage(Map<String, String> map);
	public List<ImageDTO> selectSomeImage(Map<String, String> map);
	public ImageDTO selectImage(ImageDTO img);
	public int countImage();
	public void updateImage(ImageDTO img);
	public void deleteImage(ImageDTO img);
}
