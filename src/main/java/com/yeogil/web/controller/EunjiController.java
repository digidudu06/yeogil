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

import com.yeogil.web.domain.MemberDTO;
import com.yeogil.web.mapper.ScheduleMapper;
import com.yeogil.web.service.MemberServiceImpl;

@RestController
public class EunjiController {
	@Autowired MemberDTO member;
	@Autowired Map<String, Object> map;
	@Autowired MemberServiceImpl memberService;
	@Autowired ScheduleMapper schMap;
	
	
	@PostMapping("/login")
	public MemberDTO login(@RequestBody Object mem) {
        System.out.println("===================은지 컨트롤러 진입====================");
        System.out.println(mem.toString());
        
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
        
        System.out.println(member);
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
	
	@GetMapping("/memOneSchedules/{id}")
	public Map<?,?> memOneSchedules(@PathVariable String id) {
		System.out.println("넘어왔냐 : "+id);
		ISupplier is = () -> schMap.selectMemOneSchedules(id);
		System.out.println("::::::::::::"+is.get());
		List<?> list = (List<?>) is.get();
		map.clear();
		map.put("list",list);
		return map;
	}
	
	@GetMapping("/memAllSchedule/{id}")
	public Map<?,?> memAllSchedule(@PathVariable String id) {
		System.out.println("넘어왔냐 : "+id);
		ISupplier is = () -> schMap.selectMemAllSchedule(id);
		System.out.println("::::::::::::"+is.get());
		List<?> list = (List<?>) is.get();
		map.clear();
		map.put("list",list);
		return map;
	}
	
}
