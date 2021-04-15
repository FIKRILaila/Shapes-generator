function setup() {
    canvas = createCanvas(600, 700);
    canvas.parent('canvass');
    background(0, 255, 255);

}
class Shape {
    constructor(name, x, y) {
        this.name = name;
        this.x = x;
        this.y = y;
    }
    static draw(shape) {
        switch (shape.name) {
            case "square":
                square(shape.x, shape.y, shape.s);

                break;
            case "rectangle":
                rect(shape.x, shape.y, shape.w, shape.h)
                break;
            case "ellipse":
                ellipse(shape.x, shape.y, shape.r, shape.r);
                break;
        }
    }
}

class Square extends Shape {
    constructor(name, x, y, s) {
        super(name, x, y);
        this.s = s;
    }
}
class Rectangle extends Shape {
    constructor(name, x, y, w, h) {
        super(name, y, x);
        this.w = w;
        this.h = h;
    }
}
class Ellipse extends Shape {
    constructor(name, x, y, r) {
        super(name, y, x);
        this.r = r;
    }
}

let shapee = document.getElementById("shapee");

let draw = document.getElementById("draw");
let selected;
let x = document.getElementById("x");
let y = document.getElementById("y");
let w = document.getElementById("w");
let h = document.getElementById("h");
let s = document.getElementById("s");
let r = document.getElementById("r");

function enabel() {
    x.disabled = false;
    y.disabled = false;
    s.disabled = false;
    r.disabled = false;
    w.disabled = false;
    h.disabled = false;
}
function empty() {
    x.value = "";
    y.value = "";
    s.value = "";
    r.value = "";
    w.value = "";
    h.value = "";
}


shapee.addEventListener('change', () => {
    selected = shapee.options[shapee.selectedIndex].value;
    switch (selected) {

        case "square":
            enabel();
            empty();
            w.disabled = true;
            h.disabled = true;
            r.disabled = true;

            break;

        case "rectangle":
            enabel();
            empty();
            s.disabled = true;
            r.disabled = true;


            break;
        case "ellipse":
            enabel();
            empty();
            w.disabled = true;
            h.disabled = true;
            s.disabled = true;
            break;
    }
    shapee.selectedIndex = 0;


})
draw.addEventListener('click', () => {

    switch (selected) {

        case "square":
            let sq = new Square(selected, x.value, y.value, s.value);
            Square.draw(sq);
            break;

        case "rectangle":
            let rec = new Rectangle(selected, x.value, y.value, w.value, h.value);
            Rectangle.draw(rec);
            break;

        case "ellipse":
            let elp = new Ellipse(selected, x.value, y.value, r.value);
            Ellipse.draw(elp);
            break;
    }


})
