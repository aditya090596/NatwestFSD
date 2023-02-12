package Jdemo;
public class Matrix {
    public static void main(String[]args) {
        int[][]matrix1={{5,6,7},{5,6,7},{5,6,7}};
        int[][]matrix2={{6,6,9},{8,7,3},{5,9,7}};
        int sum=0;

        for(int i=0;i<matrix1.length;i++){
            for (int j=0;j<matrix1.length;j++)
            sum +=matrix1[i][j];
        }
        for(int i=0;i<matrix2.length;i++){
            for (int j=0;j<matrix2.length;j++)
            sum +=matrix1[i][j];
        }
        System.out.println(sum);
    }

}
