// Inheritance in JavaScript classes allows one class to inherit properties and methods from another class. This mechanism enables code reuse, making it easier to create new classes that are based on existing ones, without having to duplicate code.
class Shape{
    constructor(color){
        this.color =color;
    }

    paint(){
        console.log("painting with color " + this.color);
    }
}


class Rectangle extends Shape{
    constructor(width, height, color){
        super(color); // call the parent class constructor to set the color
        this.width =width;
        this.height =height;
    }

    area(){
        return this.width * this.height;
    }

    perimeter(){
        return 2 *(this.width + this.height);
    }
}

class Circle extends Shape{
    constructor(radius,color){
        super(color);  // call the parent class constructor to set the color
        this.radius = radius;
    }

    area(){
        return 3.14 * this.radius * this.radius
    }

    perimeter(){
        return 2 * 3.14 * (this.radius)
    }
}

class Square extends Shape{
    constructor(side, color){
        super(color);  // call the parent class constructor to set the color
        this.side = side;
    }

    area(){
        return this.side * this.side;
    }

    perimeter(){
        return 4 * this.side;
    }
}




const rect =new Rectangle(20, 43, "red");
const cir =new Circle(29, "yelow");
const squ =new Square(20, "red");

rect.paint();

console.log(rect.area());