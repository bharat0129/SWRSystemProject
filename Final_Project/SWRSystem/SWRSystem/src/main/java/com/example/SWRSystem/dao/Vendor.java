package com.example.SWRSystem.dao;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "vendor")
public class Vendor {

	@Id
	@Column(name = "Vendor_ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer vendorid;

	@Column(name = "First_Name")
	private String firstname;

	@Column(name = "Last_Name")
	private String lastname;

	@Column(name = "Email_Id")
	private String email;

	@Column(name = "Mobile_No")
	private Long mobileno;

	@Column(name = "Address")
	private String address;

	@Column(name = "Password")
	private String password;

	@Column(name = "Age")
	private Integer age;

	@Column(name = "Skill_Description")
	private String skilldescription;

	@ManyToOne
	@JoinColumn(name = "State_ID")
	private State fkstate;

	@ManyToOne
	@JoinColumn(name = "City_ID")
	private City fkcity;

	@ManyToOne
	@JoinColumn(name = "Service_ID")
	private Skill fkskill;

	@Column(name = "Image")
	private String image;

	@Column(name = "Cost")
	private Integer cost;
	
	@Column(name = "password_token")
	private String resetPassToken;

	public Vendor() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Vendor(Integer vendorid, String firstname, String lastname, String email, Long mobileno, String address,
			String password, Integer age, String skilldescription, State fkstate, City fkcity, Skill fkskill,
			String image, Integer cost, String resetPassToken) {
		super();
		this.vendorid = vendorid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.mobileno = mobileno;
		this.address = address;
		this.password = password;
		this.age = age;
		this.skilldescription = skilldescription;
		this.fkstate = fkstate;
		this.fkcity = fkcity;
		this.fkskill = fkskill;
		this.image = image;
		this.cost = cost;
		this.resetPassToken = resetPassToken;
	}

	public Integer getVendorid() {
		return vendorid;
	}

	public void setVendorid(Integer vendorid) {
		this.vendorid = vendorid;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Long getMobileno() {
		return mobileno;
	}

	public void setMobileno(Long mobileno) {
		this.mobileno = mobileno;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getSkilldescription() {
		return skilldescription;
	}

	public void setSkilldescription(String skilldescription) {
		this.skilldescription = skilldescription;
	}

	public State getFkstate() {
		return fkstate;
	}

	public void setFkstate(State fkstate) {
		this.fkstate = fkstate;
	}

	public City getFkcity() {
		return fkcity;
	}

	public void setFkcity(City fkcity) {
		this.fkcity = fkcity;
	}

	public Skill getFkskill() {
		return fkskill;
	}

	public void setFkskill(Skill fkskill) {
		this.fkskill = fkskill;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public Integer getCost() {
		return cost;
	}

	public void setCost(Integer cost) {
		this.cost = cost;
	}

	public String getResetPassToken() {
		return resetPassToken;
	}

	public void setResetPassToken(String resetPassToken) {
		this.resetPassToken = resetPassToken;
	}

	@Override
	public String toString() {
		return "Vendor [vendorid=" + vendorid + ", firstname=" + firstname + ", lastname=" + lastname + ", email="
				+ email + ", mobileno=" + mobileno + ", address=" + address + ", password=" + password + ", age=" + age
				+ ", skilldescription=" + skilldescription + ", fkstate=" + fkstate + ", fkcity=" + fkcity
				+ ", fkskill=" + fkskill + ", image=" + image + ", cost=" + cost + ", resetPassToken=" + resetPassToken
				+ "]";
	}
	
	
}
