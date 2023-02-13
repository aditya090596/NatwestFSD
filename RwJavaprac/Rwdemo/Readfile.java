package Rwdemo;
//Program to Read and write byte stream

import java.io.FileInputStream;
// import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Scanner;

public class Readfile {
    FileInputStream fis=null;
    FileOutputStream fos=null;
    Scanner sin=null;
 public void writeData() throws IOException{
    fos=new FileOutputStream("file.txt");
    sin=new Scanner(System.in);

    System.out.println("Enter the date to be written in the file");
    String data=sin.nextLine();
    char [] chardata=data.toCharArray();
    for (int i=0;i<chardata.length;i++)
    {
        fos.write(chardata[i]);
    }
 }
 public void readData() throws IOException{
    fis=new FileInputStream("file.txt");
    int myData;
    while((myData=fis.read())!=-1);
    System.out.println((char)myData);
 }

 public static void main(String[] args) throws IOException {
    Readfile frwobj=new Readfile();
    frwobj.writeData();
    frwobj.readData();
 }
}
