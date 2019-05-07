package com.yeogil.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.yeogil.web.domain.ArticleDTO;

@Repository
public interface ArticleMapper {
	public void insertPost(ArticleDTO art);
	public List<ArticleDTO> selectAllPosts(HashMap<String,Object> map);
	public List<ArticleDTO> selectSomePost(HashMap<String,Object> map);
	public ArticleDTO selectPost(ArticleDTO art);
	public int countPosts();
	public void updatePost(ArticleDTO art);
	public void deletePost(ArticleDTO art);
}
