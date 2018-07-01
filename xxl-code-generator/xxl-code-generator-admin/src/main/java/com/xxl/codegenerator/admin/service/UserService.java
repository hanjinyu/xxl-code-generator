package com.xxl.codegenerator.admin.service;

import com.xxl.codegenerator.admin.exception.UserException;

/**
 * 用户接口
 * @author Administrator
 *
 */
public interface UserService {
	
	boolean checkUserInfo(String username, String userpwd) throws UserException;
}
