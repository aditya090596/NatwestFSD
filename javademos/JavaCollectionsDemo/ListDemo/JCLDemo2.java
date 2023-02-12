package ListDemo;

import java.util.ArrayList;

public class JCLDemo2 {

    // Generic Collection
    ArrayList<String> empName = new ArrayList<String>();
    ArrayList<Integer> empAge = new ArrayList<Integer>();
    ArrayList<Float> empSal = new ArrayList<Float>();

    public void empDataAccept() {

        empName.add("Tim");
        empAge.add(23);
        empSal.add(23456.66f);

        empName.add("Rim");
        empAge.add(21);
        empSal.add(35456.66f);

        empName.add("Jim");
        empAge.add(22);
        empSal.add(44456.66f);

    }

    public void empDisplay() {
        for (String ename : empName) {
            System.out.println(ename);
        }

        for (Integer eage : empAge) {
            System.out.println(eage);
        }

        for (Float esal : empSal) {
            System.out.println(esal);
        }
    }

    public static void main(String[] args) {

        JCLDemo2 jclObj = new JCLDemo2();
        jclObj.empDataAccept();
        jclObj.empDisplay();

    }
}