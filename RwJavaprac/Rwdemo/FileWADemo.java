package Rwdemo;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

public class FileWADemo {
    File fobj=null;
    FileWriter fwo = null;
    BufferedWriter br = null;
    PrintWriter pwo =null;

    public void writeAppendData(String filename, String dataAppend) throws IOException {

        fobj= new File(filename);
        try {
            fwo = new FileWriter(fobj, true);
            fwo.write(dataAppend);

        } finally {
                fwo.close();
        }


    }

    public static void main(String[] args) throws IOException
    {

        FileWADemo fwao=new FileWADemo();

        fwao.writeAppendData("myfile1.txt","\n Data1 ");
        fwao.writeAppendData(" myfile1.txt","\n Data2 ");
        fwao.writeAppendData(" myfile1.txt","\n Data3 ");
        fwao.writeAppendData(" myfile1.txt","\n Data4 ");

    }
}
