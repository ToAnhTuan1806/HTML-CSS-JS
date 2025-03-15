const rectangle = {
    width: 10,
    height: 5,
    getArea: function(width, height) {
        return width*height
    }
}
let result = rectangle.getArea(rectangle.width, rectangle.height);
console.log(result);
