package Demos.DataModel;

public class Employee {
    private int empId;

    private String empName;
    private int empAge;
   
    public int getEmpid() {
return this.empId;
    }

public void setEmpid(int id){
this.empId=id;
}
public String getEmpname(){
return this.empName;
}
public void setEmpname(String name){
    this.empName=name;
}
public int Empage(){
    return this.empAge;
}
public void setEmpage(int age){
    this.empAge=age;
}
}

