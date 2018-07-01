package com.xxl.codegenerator.admin.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.xxl.codegenerator.admin.core.model.UserInfo;
import com.xxl.codegenerator.admin.exception.UserException;
import com.xxl.codegenerator.admin.service.UserService;

@Controller
public class LoginController {
	
	private static final Logger logger = LoggerFactory.getLogger(LoginController.class);
	
	@Autowired
	private UserService us;	
	
	//跳转登陆界面
	@RequestMapping(value = "/user/login", method = {RequestMethod.GET})
	public String loginForward() {
		return "login";
	}
	
	//登陆信息提交,跳转到index
	@RequestMapping(value = "/user/loginSubmit", method = {RequestMethod.POST})
	public String loginSubmit(@RequestBody UserInfo userInfo) {
		try {
			Boolean usc = us.checkUserInfo(userInfo.getUsername(), userInfo.getUserpwd());
			if(usc) {
				return "";
			}
			throw new UserException("用户异常");
		}catch(UserException ue) {
			ue.printStackTrace();
			logger.error(ue.getMessage());
		}
		return "";
	}
	
}
