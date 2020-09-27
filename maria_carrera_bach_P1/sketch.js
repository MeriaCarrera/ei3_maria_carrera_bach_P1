

function setup() {
  createCanvas(400, 600);
  //variables de la visibilitat
  x=0;
  x2=0;
  x3=0;
  x4=0;
  //color lletres
  l=0;
  //color de fons
  background(238, 236, 237);
}

function draw() {
  //colors
  let r= color(217,54,40,x3);
  let bk= color(0,0,2,x4);
  let y= color(247,190,41,x);
  let b= color(0,106,179,x2);
  
  //random del color de les lletres
  let ran4 = int (random (1,5));
    if(ran4==1){
      l=r;
    }else if(ran4==2){
      l=bk;
    }else if(ran4==3){
      l=y;
    }else{
      l=b;
    }

  //random del ordre d'aparició de les formes
  if (frameCount % int(random(50,100)) == 0) {
    let ran3 = int(random (1,5));
    console.log(ran3);
      if (ran3==1){
        //apareixen les formes grogues
        if (frameCount % 5 == 0) {
          x=x+5;
        }
      } else if (ran3==2){
        //apareixen les formes blaves
        if (frameCount % 5 == 0) {
          x2=x2+5;
        }
      }else if (ran3==3){
        //apareixen els formes vermelles
        if (frameCount % 5 == 0) {
          x3=x3+5;
        }
      }else{
        //apareixen els formes negres
        if (frameCount % 5 == 0) {
          x4=x4+5;
        }
      }   
  }

  //formes i colors
  noStroke();
  
  //formes grogues
  fill(y);
  triangle(125, 70, 180, 15, 180, 70);
  rect(125, 70, 55, 85);
  rect(180, 295, 30, 55);
  triangle(210, 295, 265, 240, 265, 295);
  triangle(320, 295, 265, 350, 265, 295);
  rect(70, 435, 55, 85);
  triangle(70, 520, 70,575, 125, 520);
  rect(210, 100, 55, 55);
  rect(180, 435, 30, 55);
  
  //formes vermelles
  fill(r);
  triangle(70, 155, 125,100, 125, 155);
  rect(125, 240, 55, 55);
  rect(210, 295, 55, 85);
  triangle(210, 380, 210, 435, 265, 380);
  
  //formes blaves
  fill(b);
  rect(70, 155, 55, 85);
  triangle(70, 240, 70,295, 125, 240);
  rect(125, 295, 55, 55);
  rect(180, 240, 30, 55);
  rect(265, 210, 55, 30);
  rect(180, 70, 30, 55);
  triangle(125, 435, 125, 490, 180, 435);
  
  //formes negres
  fill(bk);
  rect(125, 155, 85, 85);  
  rect(180, 350, 30, 30);
  rect(265, 240, 55, 55);
  triangle(125, 435, 125, 380, 70, 435);
  
  //lletres
  fill(l);
  textSize(7);
  text('Lorem ipsum dolor sit amet,', 220, 470);
  text('consectetur adipiscing elit.', 220, 485); 
  text('Aenean porta metus nibh, eget gravida', 220, 492); 
  text('purus egestas eu. Duis et rhoncus nulla.', 220, 499); 
  text('Donec vitae pellentesque elit. Curabitur in', 220, 506);
  text('ipsum condimentum, venenatis augue ut,', 220, 513);
  text('condimentum enim.', 220, 520); 
  text('Praesent interdum ut nulla at mattis.', 220, 527);
  text('Duis a lacus mollis, placerat odio id,', 220, 534);
  text('finibus ligula. Praesent a lacus magna.', 220, 541);
  text('Mauris quis nulla ac mi interdum ', 220, 548);
  text('rutrum vitae sed elit. ', 220, 555);
  text('Ut in orci sit amet lacus ultrices', 220, 562);
  text('tincidunt vel eget purus.', 220, 569);
  
}

//al apretar el boto torna a començar

function mousePressed() {
  background(238, 236, 237);
  x=0;
  x2=0;
  x3=0;
  x4=0;
}

//al sacsejar torna a començar
function deviceShaken() {
  background(238, 236, 237);
  x=0;
  x2=0;
  x3=0;
  x4=0;
}