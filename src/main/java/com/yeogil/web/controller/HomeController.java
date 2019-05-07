package com.yeogil.web.controller;

import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		System.out.println("홈컨트롤러");
		return "index";
	}
	
	@RequestMapping(value = "/tour", method = RequestMethod.GET)
	public String changjun(Locale locale, Model model) {
		System.out.println("=====투어 컨트롤러=====");
		return "tour_index";
	}
	
	@RequestMapping(value = "/sche", method = RequestMethod.GET)
	public String jiwoo(Locale locale, Model model) {
		System.out.println("=====맵 컨트롤러=====");
		return "map_sche";
	}
	
	@RequestMapping(value = "/reser", method = RequestMethod.GET)
	public String seowoo(Locale locale, Model model) {
		System.out.println("=====ReserController진입=====");
		return "reser_index";
	}
	
	@RequestMapping(value = "/admin", method = RequestMethod.GET)
	public String admin(Locale locale, Model model) {
		System.out.println("=====admincontroller진입=====");
		return "admin";
	}
}
