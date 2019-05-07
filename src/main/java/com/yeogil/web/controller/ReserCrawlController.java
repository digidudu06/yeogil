package com.yeogil.web.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.yeogil.web.domain.AirportLeaveDTO;
import com.yeogil.web.domain.AirportReturnDTO;

@RestController
public class ReserCrawlController {
	@Autowired Map<String, Object> map;
	@Autowired List<AirportLeaveDTO> allist;
	@Autowired List<AirportReturnDTO> arlist;
	
	@PostMapping("/clink/airline")
	public Map<?,?> arport(
			@RequestBody AirportLeaveDTO air) throws Exception {
		System.out.println("ReserCrawlController진입");
		String a = air.getDepartDate();
		String b = air.getArrivalDate();
		System.out.println(a);
		System.out.println(b);
		
		
		String airinfor = "https://www.kayak.co.kr/flights/ICN-TPE/"+air.getDepartDate()+"/"+air.getArrivalDate();
		Connection conn = Jsoup
                .connect(airinfor)
                .header("Content-Type", "application/json;charset=UTF-8")
                .method(Connection.Method.POST)
                .ignoreContentType(true);
		
		String info = conn.get().select(".Base-Results-HorizonResult").text();
		
		Elements info1 = conn.get().select(".Base-Results-HorizonResult");
        for(Element s : info1) {
        	AirportLeaveDTO apld = new AirportLeaveDTO();
        	AirportReturnDTO aprd = new AirportReturnDTO();
/* 이미지 */
        	String topImgUrl = s.select(".leg-carrier").attr("src");
        	System.out.println("이미지 유알엘~~~~~~"+topImgUrl);
        	
/*출발시간 */  String deptime1 = s.select(".depart-time").text();
        	String[] deptime = deptime1.split(" ");
        	apld.setDepartureTime(deptime[0]); //한국에서 떠나는 출발시간
        	aprd.setDepartureTimeR(deptime[1]);//타지에서 한국으로오는 출발시간
        	System.out.println("한국->타지출발 시간~~~~~"+deptime[0]);
        	System.out.println("타지->한국출발 시간~~~~~"+deptime[1]);
        	
/*도착시간*/   String artime1 = s.select(".arrival-time").text();
        	String[] artime = artime1.split(" ");
        	apld.setArrivalTime(artime[0]);
        	aprd.setArrivalTimeR(artime[1]);
        	System.out.println("한국->타지 도착시간~~~~~"+artime[0]);
        	System.out.println("타지->한국도착 시간~~~~~"+artime[1]);
        	
/* 항공사이름 */String apname1 = s.select(".with-gutter .bottom").text();
        	String[] apname = apname1.split(" ");
        	apld.setAirportName(apname[0]);
        	System.out.println("한국->타지 항공사이름"+apname[0]);
        	
        	String apname2= s.select(".flight .bottom").text();
        	String[] apname3 = apname2.split(" ");
        	aprd.setAirportNameR(apname3[0]);
        	
        	System.out.println("타지->한국 항공사이름"+apname3[0]);
/* 공항이름 */ String stname1 = s.select(".with-gutter .duration .bottom").text();  
			
			 String[] stname = stname1.split(" ");
			 apld.setDepartAirport(stname[0]);
			 apld.setArrivalAirport(stname[2]);
			 System.out.println("한국->타지 출발공항"+stname[0]);
			 System.out.println("한국->타지 도착공항"+stname[2]);
        	
        	String stname3 = s.select(".flight .duration .bottom").text();
			 String[] stname4 = stname3.split(" ");
			 aprd.setDepartAirportR(stname4[2]);
			 aprd.setAirportNameR(stname4[0]);
			 System.out.println("타지->한국 출발공항"+stname4[2]);
			 System.out.println("타지->한국 도착공항"+stname4[0]);
			 
        	
/* 출발날짜 */ String dpdate = air.getDepartDate();
			String ardate = air.getArrivalDate();
			System.out.println("출발날짜::"+dpdate);
			System.out.println("도착날짜::"+ardate);
			
/* 가격 */	String tprice1 = s.select(".result-column .option-text").text();
			String[] tprice = tprice1.split(" ");
			apld.setPrice(tprice[0]);
			System.out.println("가격::"+tprice[0]);
			allist.add(apld);
			arlist.add(aprd);
        }
        System.out.println("allist값"+allist.toString());
		map.clear();
		map.put("startlist", allist);
		map.put("returnlist", arlist);
		return map;
	}
}