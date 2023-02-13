package com.java.eight.cfi;

import java.util.Arrays;
import java.util.List;

public class ConsumerFunctionTest {

	
	public static void main(String[] aa)
	{
		Consumer<Integer> consumer = i -> System.out.println("Number "+i);
		
		List<Integer> dataList = Arrays.asList(
				
				new Integer(123),
				new Integer(103),
				new Integer(120),
				new Integer(153),
				new Integer(163),
				new Integer(173)
				
				);
		
		
		displayList(dataList,consumer);
		
	}
	
	
	public static void displayList(List<Integer> numList, Consumer<Integer> consumer)
	{
		for(Integer inntData:numList)
		{
			consumer.accept(inntData);
		}		
	}
}