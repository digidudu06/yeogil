package com.yeogil.web.controller;

import java.util.Map;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data @Lazy
public class Proxy {
	private int rowCount, pageNum, pageSize, blockSize, startRow, endRow, startPage, endPage, prevBlock, nextBlock;
	private boolean existPrev, existNext;
	private String search, id, title;
	public void carryOut(Map<?,?> paramMap) {
		
		search = (String) paramMap.get("srch");
		String _pageNum = (String)paramMap.get("page_num");
		System.out.println("1........:::페이지 넘:::" + pageNum+"_pageNum ::: "+_pageNum);
		this.pageNum = (_pageNum == null) ? 1 : Integer.parseInt(_pageNum);
		String _pageSize = (String)paramMap.get("page_size");
		this.pageSize = (_pageSize == null) ? 5 : Integer.parseInt(_pageSize);
		System.out.println("2........:::페이지 넘:::" + this.pageNum + ":::::페이지 사이즈:::::" + this.pageSize+" if전_pageSize ::: "+_pageSize);
		
		String _blockSize = (String)paramMap.get("block_size");
		this.blockSize = (_blockSize == null) ? 5 : Integer.parseInt(_blockSize);
		
		this.rowCount = (int) paramMap.get("row_count");
		
		System.out.println("전체 카운트" + this.rowCount);
		int nmg = rowCount % pageSize;
		int pageCount = (nmg==0)? rowCount/pageSize : rowCount/pageSize+1;
		System.out.println("pageCount@@@@" + pageCount);
		startRow = (pageNum - 1) * pageSize;
		endRow = (startRow + (pageSize - 1) < rowCount) ? startRow + (pageSize - 1) : rowCount;

		System.out.println("토탈::::::" + rowCount + "::::스타트::::" + startRow + ":::엔드:::" + endRow);

		int blockNum = 0;
		blockNum = (pageNum - 1) / blockSize;
		
		if(existPrev) {
			startPage=blockNum*blockSize+1;
		}else {
			startPage=1;
		}
		
		startPage = pageNum -((pageNum-1)%blockSize);
		endPage = startPage+(blockSize-1);
		
		if(endPage>pageCount) {
			endPage=pageCount;
		}

		System.out.println("startPage@@@@" + startPage + "  endPage@@@@" + endPage);
		prevBlock = startPage - blockSize;
		nextBlock = startPage + blockSize;

		if (prevBlock < 0) {
			existPrev = false;
			existNext = true;
		} else {
			existPrev = true;
			existNext = false;
		}

		System.out.println("prevBlock@@@@" + prevBlock + "  nextBlock@@@@" + nextBlock);
	}
	
	public void memSche(Map<?,?> paramMap) {
		id = (String) paramMap.get("id");
		title = (String) paramMap.get("title");
	}
}
