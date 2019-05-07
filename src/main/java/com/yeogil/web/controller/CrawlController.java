package com.yeogil.web.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.yeogil.web.domain.ImageDTO;
import com.yeogil.web.domain.WeatherDTO;
import com.yeogil.web.service.ImageService;
import com.yeogil.web.domain.AirportLeaveDTO;
import com.yeogil.web.domain.AirportReturnDTO;
import com.yeogil.web.domain.ExchangeMoney;


@RestController
public class CrawlController {
	
	@Autowired Map<String, Object> map;
	@Autowired ImageService imageService;
	@Autowired ImageDTO img;
	@Autowired ExchangeMoney em;
	
	@GetMapping("/crawling/weather")
	public Map<?,?> weathercrawling() throws Exception {
		
        // 1. URL 선언
        String weather = "https://www.google.com/search?q=타이베이+날씨";
        String exchange ="https://www.google.com/search?q=대만환율";
        // 2. weather 가져오기
        Connection conn = Jsoup
                .connect(weather)
                .header("Content-Type", "application/json;charset=UTF-8")
                .method(Connection.Method.GET)
                .ignoreContentType(true);
        
		String el = conn.get().select("#wob_tm").text();
		
		//날씨 days
		Elements el1 = conn.get().select(".wob_df");
		List<WeatherDTO> wlist = new ArrayList<>();
		for(Element s : el1) {
			WeatherDTO w = new WeatherDTO();
			String[] a = s.select(".vk_lgy").text().split(" ");
			w.setDay(a[0]);
			String b = s.select("img").attr("src");
			w.setImgUrl(b);
			String h = s.select(".vk_gy").first().text().substring(0,2);
			w.setHtem(h);
			String[] l = s.select(".wob_t").text().split(" ");
			w.setLtem(l[2]);
			wlist.add(w);
		}
		
		String nowimg = conn.get().select("#wob_tci").attr("src");

		
		//환율
		conn = Jsoup
                .connect(exchange)
                .header("Content-Type", "application/json;charset=UTF-8")
                .method(Connection.Method.GET)
                .ignoreContentType(true);
		String money = conn.get().select("#knowledge-currency__tgt-amount").text();
		double taim = 1, kom = Double.parseDouble(money);
		
		em.setKor(kom);
		em.setTai(taim);
		map.clear();
		map.put("e", em);
		map.put("wlist", wlist);
		map.put("el",el);
		map.put("nowimg", nowimg);
		return map;
	}
	
	@GetMapping("/crawling/country")
	public Map<?,?> country() throws Exception{
		String countryimg = "https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=대만";
		String countryDetail = "https://namu.wiki/w/대만";
		String exchange ="https://www.google.com/search?q=대만환율";
		
		Connection conn = Jsoup
	                .connect(countryimg)
	                .header("Content-Type", "application/json;charset=UTF-8")
	                .method(Connection.Method.GET)
	                .ignoreContentType(true);
		String imgurl = conn.get().select(".img_naflag img").attr("src");
		
		conn = Jsoup
                .connect(countryDetail)
                .header("Content-Type", "application/json;charset=UTF-8")
                .method(Connection.Method.GET)
                .ignoreContentType(true);
		String detailtext = conn.get().select(".wiki-heading-content").text().substring(0, 250);
		 
		
		conn = Jsoup
                .connect(exchange)
                .header("Content-Type", "application/json;charset=UTF-8")
                .method(Connection.Method.GET)
                .ignoreContentType(true);
		String money = conn.get().select("#knowledge-currency__tgt-amount").text();
		
		double taim = 1, kom = Double.parseDouble(money);
		
		em.setKor(kom);
		em.setTai(taim);
		map.clear();
		map.put("c", imgurl);
		map.put("t", detailtext);
		map.put("u", countryDetail);
		map.put("e", em);
		
		return map;
	}
	
	@GetMapping("/crawling/topCtry")
	public Map<?,?> topCity() throws Exception{
		System.out.println("들어옴");
		String topCtry = "https://www.stubbyplanner.com";
		Connection conn = Jsoup
                .connect(topCtry)
                .header("Content-Type", "application/json;charset=UTF-8")
                .method(Connection.Method.GET)
                .ignoreContentType(true);
		Document doc = conn.get();
		Elements el = doc.select(".grid-item--height3");
		
		 List<ImageDTO> list = new ArrayList<ImageDTO>();
	       list.clear();
	       map.clear();
	       for(Element element: el) {
	    	   ImageDTO img = new ImageDTO();
	    	   String topImgUrl = element.select("img").attr("data-src");
	           img.setImgUrl(topImgUrl);
	           String topName = element.select("div div font").text();
	           img.setImgName(topName);
	           map.clear();
	           list.add(img);
	       }
	       
		map.put("ls",list);
		return map;
	}

}

