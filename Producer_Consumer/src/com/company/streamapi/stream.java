package com.company.streamapi;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import      java.util.stream.Stream;

public class stream {
    public static void main(String[] args) {
        List<Integer> list1 = new ArrayList<>();
        list1.add(12);
        list1.add(25);
        list1.add(50);
        list1.add(52);
        list1.add(84);
        list1.add(91);
//        System.out.println(list1);
        // Filter even numbers

//        List<Integer> listeven=new ArrayList<>();
//        for (Integer i:list1)
//        {
//            if(i%2 == 0 ){
//              listeven.add(i);
//            }
//        }
//        System.out.println(listeven);
        Stream<Integer> str = list1.stream();
        List<Integer> newlist = str.filter(i -> i % 2 == 0).collect(Collectors.toList());
        System.out.println(newlist);


        // Extract above 50
        List<Integer> newlist1 = list1.stream().filter(i -> i > 50).collect(Collectors.toList());
        System.out.println(newlist1);

    }
    }

