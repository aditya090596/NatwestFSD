package com.stackroute.datamunger.reader;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Arrays;

import com.stackroute.datamunger.query.DataTypeDefinitions;
import com.stackroute.datamunger.query.Header;

public class CsvQueryProcessor extends QueryProcessingEngine {
String fileName;
	// Parameterized constructor to initialize filename
	public CsvQueryProcessor(String fileName) throws FileNotFoundException {
		FileReader fro = new FileReader(fileName);
		BufferedReader br = new BufferedReader(fro);
this.fileName=fileName;
	}

	/*
	 * Implementation of getHeader() method. We will have to extract the headers
	 * from the first line of the file.
	 * Note: Return type of the method will be Header
	 */
	
	@Override
	public Header getHeader() throws IOException {

		FileReader fro = new FileReader(fileName);
		BufferedReader br = new BufferedReader(fro);
		String line = br.readLine();
		String[] headers = line.split(",");

		// read the first line
		Header header1 = new Header();
		header1.setHeaders(headers);
		return header1;
	}
		/**
Header abc=new Header(headers);
//		// populate the header object with the String array containing the header names
		return abc;
	}


	 * getDataRow() method will be used in the upcoming assignments
	 */
	
	@Override
	public void getDataRow() {

	}

	/*
	 * Implementation of getColumnType() method. To find out the data types, we will
	 * read the first line from the file and extract the field values from it. If a
	 * specific field value can be converted to Integer, the data type of that field
	 * will contain "java.lang.Integer", otherwise if it can be converted to Double,
	 * then the data type of that field will contain "java.lang.Double", otherwise,
	 * the field is to be treated as String. 
	 * Note: Return Type of the method will be DataTypeDefinitions
	 */
	
	@Override
	public DataTypeDefinitions getColumnType() throws IOException {
		FileReader fro = new FileReader(fileName);
//		FileReader fro = new FileReader("data/ipl.csv");
		//either can give file here or provide file reader and buffer reader above in constructor
		BufferedReader br = new BufferedReader(fro);
		String line = br.readLine();
//		String [] dataType1= newString[{}];
		String line1=br.readLine();
//		System.out.println("line1 data"+ line1);
		String finalline=line1.concat( " ");
//		System.out.println(finalline);

		String[] elements = finalline.split(",");
		System.out.println(Arrays.toString(elements));
		String  []dataTypes=new String[elements.length];
//		System.out.println(Arrays.toString(dataTypes));

		for(int i=0;i< dataTypes.length;i++)
		{
			if (elements[i].matches("[\\d]+"))
			{
//				newdataTypes += dataTypes[i];


            dataTypes[i]= "java.lang.Integer" ;
//				System.out.println(dataTypes[i]);
		}
		else {
			dataTypes[i] = "java.lang.String";
		}

		}
//		System.out.println(Arrays.toString(dataTypes));
		DataTypeDefinitions obj = new DataTypeDefinitions();
		obj.setDataTypes(dataTypes);
		return obj;

	}

//	public static void main(String[] args) {
//		CsvQueryProcessor obj1=new CsvQueryProcessor(String "data/ipl.csv");
//		obj1.getColumnType();
//	}
}
