// this is a side helper class to perform vector calculations, that are useful for certain movement and calculations

function Vector2(x,y){
  this.x = (x === undefined) ? 0 : x;
	this.y = (y === undefined) ? 0 : y;
}

Vector2.prototype = {

  unit: function(){
    this.x = 1;
    this.y = 1;
  },

  set: function(x,y){
    this.x = x;
    this.y = y;
  },

  clone: function(){
    return new Vector2(this.x,this.y);
  },

  add: function(new_vect){
    return new Vector2(this.x + new_vect.x, this.y + new_vect.y);
  },

  subtract: function(new_vect){
    return new Vector2(this.x - new_vect.x, this.y - new_vect.y);
  },

  scale: function(scalar){
    return new Vector2(this.x * scalar, this.y * scalar);
  },

  dot: function(new_vect){
    return new Vector2(this.x * new_vect.x, this.y * new_vect.y);
  },

  distance: function(new_vect){
    return (((this.x - new_vect.x)**2) + ((this.y - new_vect.y)**2));
  },

  magnitude: function(){
    return Math.sqrt(this.x**2 + this.y**2);
  },

  magnitudesquare: function(){
    return this.x**2 + this.y**2;
  },

  rotate: function(ang){
    cos = Math.cos(ang);
    sine = Math.sin(ang);
    final_vector = new Vector2();
    final_vector.x = this.x * cos - this.y * sine;
    final_vector.y = this.x * sine + this.y * cos;
    return final_vector;

  }


}

exports.Vector2 = exports = Vector2;
