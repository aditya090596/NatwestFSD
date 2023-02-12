package Jdemo;

public class Transpose {
    public static void main(String[]args) {
       
        int[][]matrix1={{5,6,7},{5,6,7},{5,6,7}};
        // int [][]trans= new int[3][3];
        for(int i=0;i<matrix1.length;i++){
            for (int j=0;j<matrix1.length;j++){
            System.out.println(matrix1[j][i]+" ");
        }
        
    }
 
    }
}