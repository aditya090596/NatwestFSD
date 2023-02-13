package com.java.eight;

public class MainClass
{

	public static void main(String[] args) {
	
		System.out.println(
				
				changeCaseMain("Hello World !!!", new ICCase() {

					@Override
					public String changeCase(String str) {
						return str.toLowerCase();
					}
				})
				
				);
	}
	
	public static String changeCaseMain(String str, ICCase icc)
	{
		return icc.changeCase(str);
	}
}