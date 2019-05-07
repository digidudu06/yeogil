package com.yeogil.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;

import com.yeogil.web.domain.MemberDTO;

@Component
public interface MemberService {
	public void createMember(MemberDTO mem);
	public List<MemberDTO> findAllMembers(HashMap<String, String> hash);
	public List<MemberDTO> findSomeMembers(HashMap<String, String> hash);
	public MemberDTO findMember(MemberDTO mem);
	public boolean existMember(MemberDTO mem);
	public int countMember();
	public void modifyMember(MemberDTO mem);
	public void removeMember(MemberDTO mem);
}
