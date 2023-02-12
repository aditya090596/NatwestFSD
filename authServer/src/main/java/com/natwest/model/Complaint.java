package com.natwest.model;


public class Complaint {

		private String complaintid;
		private String empid;
		private String desc;
		private String status;
		private String conversation;
		
		
		public Complaint() {
			super();
		}
		public Complaint(String complaintid, String empid, String desc, String status, String conversation) {
			super();
			this.complaintid = complaintid;
			this.empid = empid;
			this.desc = desc;
			this.status = status;
			this.conversation=conversation;
			
		}
		public String getConversation() {
			return conversation;
		}
		public void setConversation(String conversation) {
			this.conversation = conversation;
		}
		public String getComplaintid() {
			return complaintid;
		}
		public void setComplaintid(String complaintid) {
			this.complaintid = complaintid;
		}
		public String getEmpid() {
			return empid;
		}
		public void setEmpid(String empid) {
			this.empid = empid;
		}
		public String getDesc() {
			return desc;
		}
		public void setDesc(String desc) {
			this.desc = desc;
		}
		public String getStatus() {
			return status;
		}
		public void setStatus(String status) {
			this.status = status;
		}
		
		@Override
		public String toString() {
			return "Complaint [complaintid=" + complaintid + ", empid=" + empid + ", desc=" + desc + ", status="
					+ status + ", conversation=" + conversation + "]";
		}
		
		
	}


