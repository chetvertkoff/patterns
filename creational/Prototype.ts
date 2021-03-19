namespace Prototype {
  
  class PrototypeRectangle {
    widht: number
    height: number
  
    constructor(width, height) {
      this.widht = width
      this.height = height
    }
  
    clone() {
      return new PrototypeRectangle(this.widht, this.height)
    }
  }
  
  const rectProto = new PrototypeRectangle(1,2)
    
}