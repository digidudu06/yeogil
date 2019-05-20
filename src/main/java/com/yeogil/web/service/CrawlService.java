package com.yeogil.web.service;

import java.util.Map;

import org.springframework.stereotype.Component;

@Component
public interface CrawlService {
	public Map<?,?> crawlWather();
	public Map<?,?> crawlCountry();
	public Map<?,?> topCity();
}
