package com.example.SWRSystem.service;

public class Status {
	
	String msg;
	
	int status;

	public Status() { }

	public Status(String msg, int status) {
		this.msg = msg;
		this.status = status;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}
}
