package com.yeogil.web.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.yeogil.web.domain.MemberDTO;
import com.yeogil.web.service.MemberServiceImpl;

@RestController
public class EunjiController {
	@Autowired MemberDTO member;
	@Autowired Map<String, Object> map;
	@Autowired MemberServiceImpl memberService;
	
	
	@PostMapping("/login")
	public boolean login(@RequestBody Object mem) {
        System.out.println("===================은지 컨트롤러 진입====================");
        System.out.println(mem.toString());
        
        @SuppressWarnings("unchecked")
        HashMap<String, Object> t = (HashMap<String, Object>) mem;
        map.put("id", t.get("id"));
        
        String nickname = ((Map)t.get( "properties" )).get( "nickname" ).toString();
        String thumbnailImg = (((Map)t.get( "properties" )).get( "thumbnailImg" )!=null)
            ?((Map)t.get( "properties" )).get( "thumbnailImg" ).toString()
                    : "default_img";
            
        member.setMemberId(map.get("id").toString());
        member.setNickname(nickname);
        member.setThumbnailImg(thumbnailImg);
        
        System.out.println(member);
        IPredicate ip = (Object o)-> memberService.existMember(member);
        if(!(ip.test(member))) {
            IConsumer ic = (Object o) -> memberService.createMember(member);
            ic.accept(member);
        }
        
        return ip.test(member);

    }
}
