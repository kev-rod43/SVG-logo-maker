const { Shapes, Circle, Square, Triangle } = require('./../lib/shapes.js');

describe('Shapes', () => {

  describe('circle', () => {
    it('should return true if it can provide a valid circle svg', () => {
        //ARRANGE
        let circle = new Circle("pep","blue","red");
    
        //ACT
        let testMe = circle.renderShape();

        //ASSERT
        expect(testMe).toEqual(`<circle cx="150" cy="100" r="100" fill="red" />`);
    });
  });

  describe('triangle', () => {
    it('should return true if it can provide a valid triangle svg', () => {
        //ARRANGE
        let triangle = new Triangle("pep","blue","red");
    
        //ACT
        let testMe = triangle.renderShape();

        //ASSERT
        expect(testMe).toEqual(`<polygon points="150,0 20,200 280,200" fill="red" />`);
    });
  });

  describe('square', () => {
    it('should return true if it can provide a valid square svg', () => {
        //ARRANGE
        let square = new Square("pep","blue","red");
    
        //ACT
        let testMe = square.renderShape();

        //ASSERT
        expect(testMe).toEqual(`<rect width="200" height="200" x="50" y="0" fill="red" />`);
    });
  });
});