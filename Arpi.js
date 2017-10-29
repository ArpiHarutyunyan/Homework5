const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  
 const rand = function(num) {
    return Math.floor(Math.random() * num) + 1;
 };
  const background = new Image ();
  background.src = 'https://s-media-cache-ak0.pinimg.com/originals/b0/32/b5/b032b5a6c71303ad161b0a74e33a09d9.jpg';
  const Kim = new Image();
  Kim.src = 'https://avatanplus.com/files/resources/mid/577e8be8d4211155c65285a5.png';
  const paparazi = new Image();
  paparazi.src = 'http://emojinationapp.com/img/emoji_paparazzi.gif';  

  
	const floorY = canvas.height - 200;
  

    const gameData = {
    Kim1: {
      x: 50,
      y: floorY,
      img: Kim,
      width: 150,
      height: 150,
      xD: 0,
      yD: 0
    },  
	Paparazi1: []
};

const Kim1 = gameData.Kim1;
const paparazi1 = gameData.Paparazi1;

  const createPoint = function(num, canvasWidth, canvasHeight){
    const r = function(n){
      if(n<=0){
        return "";
      }  
      paparazi1.push({
        x: rand(canvasWidth - 150),
        y: rand(canvasHeight - 150),
        img: paparazi,
        width: 90,
        height: 90,
        xDelta: 5,
        yDelta: 5
      })
      r(n-1);
    }
    r(num);
    return paparazi1;
  };
  const point = createPoint(5, canvas.width,canvas.height);
  
  
  const draw = function(){  
    context.clearRect(0,0, canvas.width, canvas.height);
    context.drawImage(background, 0, 0, canvas.width, canvas.height);
    const drawEvery = function(arr,i){
      if(i === arr.length){
        return "";
      }
      context.drawImage(arr[i].img, arr[i].x, arr[i].y,arr[i].width, arr[i].height); 
      drawEvery(arr,i+1);
    };
    drawEvery(point,0);
  };
  const updateData = function(){
    const forevery = function(arr, i){
      if(i === arr.length){
        return "";
      }
      if(arr[i].x >= canvas.width-arr[i].width){
        arr[i].xDelta = -arr[i].xDelta;
      }else if(arr[i].x<=0){
        arr[i].xDelta = -arr[i].xDelta;
      }
      if(arr[i].y >= canvas.height-arr[i].height){
        arr[i].yDelta = -arr[i].yDelta;
      }else if(arr[i].y<=0){
        arr[i].yDelta = -arr[i].yDelta;
      }
      arr[i].x = arr[i].x + arr[i].xDelta;
      arr[i].y = arr[i].y + arr[i].yDelta;
      gameData.score +=1;
      forevery(arr,i+1);
    };
    forevery(point,0);
  };
  const loop = function(){
    draw();	
    updateData();
    window.requestAnimationFrame(loop);
  };
  
  loop();
  
  const drawkim = function() {
    context.drawImage(Kim1.img, Kim1.x, Kim1.y, Kim1.width, Kim1.height); 
  };
  
  const updateDatakim = function() {
   const check = function(ar, i) {
       if(i >= ar.length) {
         return;
       } 
  
      if(ar[i].x+100>=Kim1.x && ar[i].x<=Kim1.x+Kim1.width &&
          ar[i].y+100>=Kim1.y && ar[i].y<=Kim1.y+Kim1.height) {
            alert('game over');
          }
          
      if(ar[i].x+100>=Kim1.x && ar[i].x<=Kim1.x+Kim1.width &&
          ar[i].y+100>=Kim1.y && ar[i].y<=Kim1.y) {
            alert('game over');
          }
       
       check(ar, i + 1);
     };
     
     check(point, 0);
    };
  
  
  const loop1 = function() {
   
    drawkim();
    updateDatakim();
    requestAnimationFrame(loop1);

  };
  
  loop1();
  
  const leftKey = 37;
  const upKey = 38;
  const rightKey = 39;
  const downKey = 40;
  
   document.addEventListener('keydown', function(event) {
    const hero = gameData.hero;
    if(event.keyCode === rightKey) {
      hero.x = hero.x + 15;
      if(hero.x >= canvas.width) {
        hero.x = 0-hero.width;
      }
    } 
    else if(event.keyCode === leftKey) {
      hero.x = hero.x - 15; 
      if(hero.x <= 0-hero.width) {
        hero.x = canvas.width;
      }     
    }
    else if(event.keyCode === upKey) {
      if(hero.y>= 0 && hero.y<= canvas.height-hero.height) {
        hero.y= hero.y - 15;
      }		
      else if(hero.y<3){hero.y=3;}
    }
    else if(event.keyCode === downKey){
      if(hero.y>= 0 && hero.y<= canvas.height-hero.height) {
        hero.y= hero.y +  15;      }
      else if(hero.y>=canvas.height-hero.height){hero.y=canvas.height-hero.height;}
    }
  }, false);