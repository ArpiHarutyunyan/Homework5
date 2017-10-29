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