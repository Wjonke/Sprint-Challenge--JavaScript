// 1. Copy and paste your prototype in here and refactor into class syntax.


class CuboidMaker2 {
    constructor(attr) {
    this.length = attr.length, 
    this.width = attr.width,
    this.height = attr.height
    }
    volume() {
        return this.length * this.height * this.width;
    }
    surfaceArea() {
        return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
    }
  }
  
  const cuboid2 = new CuboidMaker({
    length: 4,
    width:5,
    height:5
  });
  
  
   console.log(cuboid2.volume()); // 100
   console.log(cuboid2.surfaceArea()); // 130

   class CubeMaker extends CuboidMaker2 {
       constructor(attr) {
           super(attr)
       }
       cubeVolume() {
        return this.length * this.height * this.width;
    }
        cubeSurfaceArea() {
        return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
    }

   }
   const cube = new CubeMaker({
    length: 5,
    width:5,
    height:5
  });

  console.log(cube.cubeVolume() +" sq"); // 100
  console.log(cube.cubeSurfaceArea() + " sq"); // 130
  
// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.