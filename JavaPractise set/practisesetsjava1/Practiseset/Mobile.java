package Practiseset;

public class Mobile {
    private String brand;
    private Integer price;
    private Integer camera;
    public String model;
    public String getBrand() {
        return brand;
    }
    public void setBrand(String brand) {
        this.brand = brand;
    }
    public Integer getPrice() {
        return price;
    }
    public void setPrice(Integer price) {
        this.price = price;
    }
    public Integer getCamera() {
        return camera;
    }
    public void setCamera(Integer camera) {
        this.camera = camera;
    }
    public String getModel() {
        return model;
    }
    public void setModel(String model) {
        this.model = model;
    }
    @Override
    public String toString() {
        return "Mobile [brand=" + brand + ", price=" + price + ", camera=" + camera + "]";
    }

    
}
