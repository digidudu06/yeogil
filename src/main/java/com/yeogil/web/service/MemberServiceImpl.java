package com.yeogil.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yeogil.web.domain.MemberDTO;
import com.yeogil.web.mapper.MemberMapper;

@Service
public class MemberServiceImpl implements MemberService{
	@Autowired MemberMapper memMap;
	
	@Override
	public void createMember(MemberDTO mem) {
		memMap.insertMember(mem);
	}

	@Override
	public List<MemberDTO> findAllMembers(HashMap<String, String> hash) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<MemberDTO> findSomeMembers(HashMap<String, String> hash) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public MemberDTO findMember(MemberDTO mem) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int countMember() {
		return 0;
	}

	@Override
	public void modifyMember(MemberDTO mem) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void removeMember(MemberDTO mem) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public boolean existMember(MemberDTO mem) {
		return memMap.existMember(mem);
	}

}
