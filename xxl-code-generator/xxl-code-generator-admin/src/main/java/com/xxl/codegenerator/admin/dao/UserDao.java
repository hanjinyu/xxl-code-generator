package com.xxl.codegenerator.admin.dao;

import org.springframework.stereotype.Repository;

import com.xxl.codegenerator.admin.core.model.UserInfo;

@Repository
public class UserDao {
	
	public UserInfo getUserInfo(String username, String userpwd) {
		
		return new UserInfo("tietou", "666666", "北京市海淀区.");
	}
}
