package com.yeogil.web.controller;

import java.util.Map;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.yeogil.web.domain.AirportPaymentDTO;

@RestController
public class ReserCrawlController {
	@Autowired Map<String, Object> map;
	
	@PostMapping("/clink/airline")
	public Map<?,?> arport(
			@RequestBody AirportPaymentDTO air) throws Exception {
		System.out.println("ReserCrawlController진입");
		String a = air.getDepartDate().replaceAll("-", "").substring(2, 8);
		String b = air.getArrivalDate().replaceAll("-", "").substring(2, 8);
		
		String cr = "https://kr.trip.com/flights/seoul-to-paris/tickets-sel-par/?flighttype=d&dcity=sel&acity=par&startdate="+air.getDepartDate()+"&returndate="+air.getArrivalDate()+"&class=ys&quantity=1&searchboxarg=t";
		Connection conn = Jsoup
                .connect(cr)
                .header("Content-Type", "application/json;charset=UTF-8")
                .method(Connection.Method.GET)
                .ignoreContentType(true);
		Document d = conn.get();
		
		
		
        Elements doc = conn.get().select(".m-result-list");
        System.out.println(doc);
        for(Element s : doc) {
        	//ddd
        	String topImgUrl = s.select(".ItineraryContent__leg-19xbB img").attr("src");
        	System.out.println("이미지 유알엘~~~~~~"+topImgUrl);
        	String deptime = s.select(".LegInfo__long-date-format-1mLLH .LegInfo__times-Qn_ji").text();
        	System.out.println("출발 시간~~~~~"+deptime);
        	String depcity = s.select(".LegInfo__long-date-format-1mLLH .LegInfo__tooltipTarget-njlsT").text();
        	System.out.println("출발 도시~~~~~"+depcity);
        	
        }
        
        map.clear();
        map.put("s", "s");
		return map;
	}
}
