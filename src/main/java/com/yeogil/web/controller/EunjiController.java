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
import com.yeogil.web.domain.MemberDTO;
import com.yeogil.web.mapper.AirportInfoMapper;
import com.yeogil.web.mapper.ScheduleMapper;
import com.yeogil.web.service.MemberServiceImpl;
import com.yeogil.web.service.TransactionService;

@RestController
public class EunjiController {
	@Autowired MemberDTO member;
	@Autowired Map<String, Object> map;
	@Autowired MemberServiceImpl memberService;
	@Autowired ScheduleMapper schMap;
	@Autowired AirportInfoMapper aiMap;
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
		List<?> list = (List<?>) i1.apply(pxy);
		IFunction i2 = (Object o) -> schMap.selectMemOneScheAttr(pxy);
		List<?> attr = (List<?>) i2.apply(pxy);
		map.put("list",list);
		map.put("attr",attr);
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
	public Map<?,?> deleteSchedule(@RequestBody List<CityDTO> aa) {
		transactionservice.removeMemSch(aa);
		return map;
	}
	
}
