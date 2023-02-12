package Demos.DataModel;

public class Mainclass {
    public static void main(String[]args){
        Employee obj=new Employee();
        obj.setEmpid(100);
        obj.setEmpname("Aditya");
        obj.setEmpage(26);

        System.out.println(obj.getEmpid());
        System.out.println(obj.getEmpname());
        System.out.println(obj.Empage());
    }
}
