package com.yeogil.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.yeogil.web.domain.MemberDTO;

@Repository
public interface MemberMapper {
	public void insertMember(MemberDTO mem);
	public List<MemberDTO> selectAllMembers(HashMap<String, String> hash);
	public List<MemberDTO> selectSomeMembers(HashMap<String, String> hash);
	public MemberDTO selectMember(MemberDTO mem);
	public boolean existMember(MemberDTO mem);
	public int countMember();
	public void updateMember(MemberDTO mem);
	public void deleteMember(MemberDTO mem);
}
