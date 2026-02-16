// Classes -> are a way to define blueprints for creating objects (these objects are different from the objects in the last section)

class Rectangle{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area() {
        const area = this.width * this.height;
        return area;
    }
    perimeter(){
        return 2 * (this.width + this.height);
    }

    paint(){
        console.log(`painting with color $(this.color)`);
    }

    // static method -> directly attacha to the class not on a objects method.

    static who(){
        return "i am a xitij."
    }

}

const rect =new Rectangle(2,4);
const area = rect.area();
const perimeter = rect.perimeter();
console.log(area);
console.log(perimeter);

// static method call
const who = Rectangle.who();
console.log(who);


