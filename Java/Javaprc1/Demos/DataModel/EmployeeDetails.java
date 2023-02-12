package Demos.DataModel;

import java.util.ArrayList;

public class EmployeeDetails {

    ArrayList<Integer> empId=new ArrayList<Integer>();
    ArrayList<String> empName=new ArrayList<String>();
    ArrayList<Integer> empAge=new ArrayList<Integer>();
    ArrayList<Employee>empDetails=new ArrayList<Employee>();
    
    public void empDataAccept(){
        Employee empobj1=new Employee();
        empobj1.setEmpid(1);
        empobj1.setEmpname("Adi");
        empobj1.setEmpage(26);
        Employee empobj2=new Employee();
        empobj2.setEmpid(2);
        empobj2.setEmpname("Vivek");
        empobj2.setEmpage(33);
        // Adding new emp Data
        empDetails.add(empobj1);
        empDetails.add(empobj2);
        


    }
}
