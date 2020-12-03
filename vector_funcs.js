// this is a side helper class to perform vector calculations, that are useful for certain movement and calculations

function Vector2(x,y){
  this.x = (x === undefined) ? 0 : x;
	this.y = (y === undefined) ? 0 : y;
}

Vector2.prototype = {
  set: function(x,y){
    this.x = x;
    this.y = y;
  }

  clone: function(){
    return new Vector2(this.x,this.y);
  }

  add: function(new_vect){
    return new Vector2(this.x + new_vect.x, this.y + new_vect.y);
  }

  subtract: function(new_vect){
    return new Vector2(this.x - new_vect.x, this.y - new_vect.y);
  }
}
