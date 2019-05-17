package com.yeogil.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.yeogil.web.domain.CityDTO;
import com.yeogil.web.domain.HotelDTO;
import com.yeogil.web.domain.MemberDTO;
import com.yeogil.web.domain.ScheduleDTO;
import com.yeogil.web.mapper.HotelMapper;
import com.yeogil.web.mapper.ScheduleMapper;
import com.yeogil.web.service.MemberServiceImpl;
import com.yeogil.web.service.TransactionService;

@RestController
public class EunjiController {
	@Autowired MemberDTO member;
	@Autowired Map<String, Object> map;
	@Autowired MemberServiceImpl memberService;
	@Autowired HotelMapper hotelMapper;
	@Autowired ScheduleMapper schMap;
	@Autowired List<HotelDTO> holist;
	@Autowired Proxy pxy;
	@Autowired TransactionService transactionservice;
	
	@PostMapping("/login")
	public MemberDTO login(@RequestBody Object mem) {
        @SuppressWarnings("unchecked")
        HashMap<String, Object> t = (HashMap<String, Object>) mem;
        map.put("id", t.get("id"));
        String nickname = ((Map)t.get( "properties" )).get( "nickname" ).toString();
        String thumbnailImg = (((Map)t.get( "properties" )).get( "thumbnail_image" )!=null)
            ?((Map)t.get( "properties" )).get( "thumbnail_image" ).toString()
                    : "default_img";
            
        member.setMemberId(map.get("id").toString());
        member.setNickname(nickname);
        member.setThumbnailImg(thumbnailImg);
        
        IPredicate ip = (Object o)-> memberService.existMember(member);
        if(!(ip.test(member))) {// 아이디 없으면
            IConsumer ic = (Object o) -> memberService.createMember(member);
            ic.accept(member);
        }else {//아이디 있으면
        	IConsumer ic = (Object o) -> memberService.modifyMember(member);
        	ic.accept(member);
        }
        
        return member;

    }
	
	@GetMapping("/memOneSchedule/{id}/{title}")
	public Map<?,?> memOneSchedule(@PathVariable String id, @PathVariable String title) {
		map.clear();
		map.put("id",id);
		map.put("title",title);
		pxy.memSche(map);
		IFunction i1 = (Object o) -> schMap.selectMemOneSchedule(pxy);
		
		@SuppressWarnings("unchecked")
		List<ScheduleDTO> list = (List<ScheduleDTO>) i1.apply(pxy);
		IFunction i2 = (Object o) -> schMap.selectMemOneScheAttr(pxy);
		List<?> attr = (List<?>) i2.apply(pxy);
		for(int i=0;i<list.size();i++) {
			HotelDTO ho = new HotelDTO();
			ho.setCityName(list.get(i).getCity());
			ho.setStartDate(list.get(i).getStartDate());
			holist.add(hotelMapper.selectHotel(ho));
		}
		System.out.println(holist.toString());
		
		map.put("list",list);
		map.put("attr",attr);
		map.put("holist", holist);
		return map;
	}
	
	@GetMapping("/memAllSchedules/{id}")
	public Map<?,?> memAllSchedules(@PathVariable String id) {
		IFunction i = (Object o) -> schMap.selectMemAllSchedules(id);
		List<?> list = (List<?>) i.apply(id);
		map.clear();
		map.put("list",list);
		return map;
	}
	
	@PostMapping("/deleteSchedule")
	public Map<?,?> deleteSchedule(@RequestBody Map<?,?> data) {
		pxy.memSche(data);
		schMap.deleteSche(pxy);
		return map;
	}
}
