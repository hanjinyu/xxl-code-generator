package com.xxl.codegenerator.admin.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xxl.codegenerator.admin.core.model.UserInfo;
import com.xxl.codegenerator.admin.dao.UserDao;
import com.xxl.codegenerator.admin.exception.UserException;
import com.xxl.codegenerator.admin.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;
	@Override
	public boolean checkUserInfo(String username, String userpwd) throws UserException {
		UserInfo ui = userDao.getUserInfo(username, userpwd);
		if(ui != null) {
			return true;
		}
		return false;
	}

}
