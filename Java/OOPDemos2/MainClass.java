package OOPDemos2;

public class MainClass {
    public static void main(String[] aa) {

        FTEmployee fteobj = new FTEmployee();
        fteobj.Greetings();
        fteobj.accept();
        fteobj.display();
        fteobj.calcSalary();

        PTEmployee pteobj = new PTEmployee();
        pteobj.accept();
        pteobj.display();
        pteobj.calcSalary();

        Employee eobj = new Employee();
        Employee eobj1 = new Employee(1);
    }
}