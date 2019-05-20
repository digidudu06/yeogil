package com.yeogil.web.controller;

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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.yeogil.web.domain.ExchangeMoney;
import com.yeogil.web.domain.HotelDTO;
import com.yeogil.web.domain.ImageDTO;
import com.yeogil.web.domain.WeatherDTO;
import com.yeogil.web.service.HotelServiceImpl;
import com.yeogil.web.service.ImageService;

@RestController
public class CrawlController {

	@Autowired Map<String, Object> map;
	@Autowired ImageService imageService;
	@Autowired ImageDTO img;
	@Autowired ExchangeMoney em;
	@Autowired HotelServiceImpl hotelService;
	
	
	@GetMapping("/crawling/weather")
	public Map<?, ?> weathercrawling() throws Exception {

		// 1. URL 선언
		String weather = "https://www.google.com/search?q=타이베이+날씨";
		String exchange = "https://www.google.com/search?q=대만환율";
		// 2. weather 가져오기
		Connection conn = Jsoup.connect(weather).header("Content-Type", "application/json;charset=UTF-8")
				.method(Connection.Method.GET).ignoreContentType(true);

		String el = conn.get().select("#wob_tm").text();

		// 날씨 days
		Elements el1 = conn.get().select(".wob_df");
		List<WeatherDTO> wlist = new ArrayList<>();
		for (Element s : el1) {
			WeatherDTO w = new WeatherDTO();
			String[] a = s.select(".vk_lgy").text().split(" ");
			w.setDay(a[0]);
			String b = s.select("img").attr("src");
			w.setImgUrl(b);
			String h = s.select(".vk_gy").first().text().substring(0, 2);
			w.setHtem(h);
			String[] l = s.select(".wob_t").text().split(" ");
			w.setLtem(l[2]);
			wlist.add(w);
		}

		String nowimg = conn.get().select("#wob_tci").attr("src");

		// 환율
		conn = Jsoup.connect(exchange).header("Content-Type", "application/json;charset=UTF-8")
				.method(Connection.Method.GET).ignoreContentType(true);
		String money = conn.get().select("#knowledge-currency__tgt-amount").text();
		double taim = 1, kom = Double.parseDouble(money);

		em.setKor(kom);
		em.setTai(taim);
		map.clear();
		map.put("e", em);
		map.put("wlist", wlist);
		map.put("el", el);
		map.put("nowimg", nowimg);
		return map;
	}

	@GetMapping("/crawling/country")
	public Map<?, ?> country() throws Exception {
		String countryimg = "https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=대만";
		String countryDetail = "https://namu.wiki/w/대만";
		String exchange = "https://www.google.com/search?q=대만환율";

		Connection conn = Jsoup.connect(countryimg).header("Content-Type", "application/json;charset=UTF-8")
				.method(Connection.Method.GET).ignoreContentType(true);
		String imgurl = conn.get().select(".img_naflag img").attr("src");

		conn = Jsoup.connect(countryDetail).header("Content-Type", "application/json;charset=UTF-8")
				.method(Connection.Method.GET).ignoreContentType(true);
		String detailtext = conn.get().select(".wiki-heading-content").text().substring(0, 250);

		conn = Jsoup.connect(exchange).header("Content-Type", "application/json;charset=UTF-8")
				.method(Connection.Method.GET).ignoreContentType(true);
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
	public Map<?, ?> topCity() throws Exception {
		String topCtry = "https://www.stubbyplanner.com";
		Connection conn = Jsoup.connect(topCtry).header("Content-Type", "application/json;charset=UTF-8")
				.method(Connection.Method.GET).ignoreContentType(true);
		Document doc = conn.get();
		Elements el = doc.select(".grid-item--height3");

		List<ImageDTO> list = new ArrayList<ImageDTO>();
		list.clear();
		map.clear();
		for (Element element : el) {
			ImageDTO img = new ImageDTO();
			String topImgUrl = element.select("img").attr("data-src");
			img.setImgUrl(topImgUrl);
			String topName = element.select("div div font").text();
			img.setImgName(topName);
			map.clear();
			list.add(img);
		}

		map.put("ls", list);
		return map;
	}
	
	  @GetMapping("/crawling/hvation/{cityName}")
	  public Map<?, ?> hvation(@PathVariable String cityName) throws Exception { 
		  String hotelimg ="";
		  switch(cityName) {
		  case "타이베이":
			  hotelimg = "https://www.booking.com/searchresults.ko.html?label=gen173nr-1DCAEoggI46AdIM1gEaH2IAQGYARe4ARfIAQzYAQPoAQGIAgGoAgO4Asa29OYFwAIB&sid=68f29d9a69d9207286193d8644542b33&sb=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.ko.html%3Flabel%3Dgen173nr-1DCAEoggI46AdIM1gEaH2IAQGYARe4ARfIAQzYAQPoAQGIAgGoAgO4Asa29OYFwAIB%3Bsid%3D68f29d9a69d9207286193d8644542b33%3Bsb_price_type%3Dtotal%26%3B&ss=%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4&is_ski_area=0&ssne=%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4&ssne_untouched=%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4&dest_id=-2637882&dest_type=city&checkin_year=2019&checkin_month=6&checkin_monthday=23&checkout_year=2019&checkout_month=6&checkout_monthday=28&group_adults=2&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1";
			  break;
		  }
	  
		  Connection conn =
		   Jsoup.connect(hotelimg).header("Content-Type", "application/json;charset=UTF-8")
		  .method(Connection.Method.POST).ignoreContentType(true);
		  
		  Elements httext1 = conn.get().select(".sr_item");
		  List<HotelDTO> htlist = new ArrayList<>();
		  HotelDTO htdto = null;
		  //asdf
		  for (Element s : httext1) {
			  htdto = new HotelDTO();
			  /*IMAGE*/
			  String imgurl = s.select(".hotel_image").attr("src");
			  htdto.setImgUrl(imgurl);
			  /*NAME*/
			  String deptime1 = s.select(".sr-hotel__name").text();
			  htdto.setHotelName(deptime1);
			  /*ROOMTYPE*/
			  String sold = s.select(".room_link").text();
			  htdto.setRoomType(sold);
			  /*NOTICE*/
			  String notice = s.select(".fe_banner__title").text();
			  htdto.setNotice(notice);
			  /*PRICE*/
			  String hprice = s.select(".animated strong b").text();
			  htdto.setPrice(hprice);
			  htlist.add(htdto); 
		  }
		  map.clear();
		  map.put("htlist", htlist);
		  return map; 
	  }
}