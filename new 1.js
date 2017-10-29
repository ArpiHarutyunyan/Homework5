const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  
  
  const rand = function(num) {
    return Math.floor(Math.random() * num) + 1;
  };
      const b = [];
  const colorsArray= ['red','blue','green', 'orange','pink', 'brown', 'aqua','BlueViolet ','BurlyWood ','Chartreuse','Chocolate','Crimson','LawnGreen'];
  
  const createPoint = function(count, canvasWidth, canvasHeight) {
    const recursion = function(n) {
      if (n < 1) {return}
      b.push({
        x: rand(canvasWidth - 100),
        y: rand(canvasHeight - 100),
        width: 100,
        height: 100,
        xDelta: 5,
        yDelta: 5,
        color: colorsArray[rand(13)-1]
      });
      recursion(num-1)
    }
    recursion(count);
    return b;
  };
  
  const points = createPoint(11, canvas.width, canvas.height);	
  
  
  const draw = function() {
    context.clearRect(0,0, canvas.width, canvas.height);
    const DrawEvery = function(array, i) {
      if(i === array.length) {
        return;
      }
      
      context.fillStyle = array[i].color;
      context.fillRect(array[i].x, array[i].y, array[i].width, array[i].height);
      DrawEvery(array, i+1);
    };
    DrawEvery(points, 0);
  };
  
  const updateData = function() {
    const UpdateEvery = function(array, m){
      if(m === array.length) {
        return;
      }
      
      if(array[m].x >= canvas.width-array[m].width || array[m].x<=0){
        array[m].xDelta = -array[m].xDelta;
		array[m].color = colorsArray[rand(13)-1];
      }
      
      if(array[m].y >= canvas.height-array[m].height || array[m].y<=0){
        array[m].yDelta = -array[m].yDelta;
		array[m].color = colorsArray[rand(13)-1];
      }
      
      array[m].x = array[m].x + array[m].xDelta;
      array[m].y = array[m].y + array[m].yDelta;
      UpdateEvery(array, m+1);
    };
    UpdateEvery(points, 0)
  };
  
  const loop = function(){
    
    draw();
    updateData();
    requestAnimationFrame(loop);
  };
  
  loop();