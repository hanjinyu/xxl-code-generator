package com.xxl.codegenerator.admin.model;

/**
 * 缓存对象,保存上次记录
 * @author Administrator
 * @date 2018-06-28 15:33:40
 */
public class DownloadT {
	
	private String title;
	private String downloadContent;
	
	public DownloadT(String title, String downloadContent) {
		super();
		this.title = title;
		this.downloadContent = downloadContent;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDownloadContent() {
		return downloadContent;
	}
	public void setDownloadContent(String downloadContent) {
		this.downloadContent = downloadContent;
	}
	
	
}
