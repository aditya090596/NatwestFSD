package com.java.eight.rfi;

import java.util.function.BiFunction;
import java.util.function.Function;

public class TaskString {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		System.out.println(changeCase("Hello World", str -> str.toLowerCase()));
		
		System.out.println(subStr("Hello World",6, (str,i) -> str.substring(i)));
		
		System.out.println(checkLen("Hello World", str -> str.length()));
		
		System.out.println(addNum(34,22, (n1,n2) -> n1+n2));
		
		
	}
	
	public static Integer addNum(int num1,int num2, BiFunction<Integer,Integer,Integer> iaddnum)
	{
		return iaddnum.apply(num1,num2);
	}
	

	public static Integer checkLen(String str, Function<String,Integer> iccstr)
	{
		return iccstr.apply(str);
	}
	
	public static String changeCase(String str, Function<String,String> iccstr)
	{
		return iccstr.apply(str);
	}
	
	public static String subStr(String str, Integer i, BiFunction<String, Integer, String> iccstr)
	{
		return iccstr.apply(str,i);
	}
}