package com.xxl.codegenerator.admin.core.model;

public class UserInfo {
	
	private String username;
	private String userpwd;
	private String email;
	private String phone;
	private String address;
	
	public UserInfo(String username, String userpwd, String address) {
		super();
		this.username = username;
		this.userpwd = userpwd;
		this.address = address;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getUserpwd() {
		return userpwd;
	}
	public void setUserpwd(String userpwd) {
		this.userpwd = userpwd;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
}
