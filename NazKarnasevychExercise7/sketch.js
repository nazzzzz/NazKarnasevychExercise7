//Naz Karnasevych

var forest;

function preload() {
  forest = loadImage("img/forest.jpg");
}

function setup() {

  createCanvas(1000, 1000);
  background(forest);
  smooth();

}


function draw() {

  if (frameCount > 150) {
    s = "The world will see change"
    textSize(40);
    fill(255);
    text(s, 300, 100);
  }


  if (frameCount > 250) {
    if (frameCount % 10 == 0) {
      pixellate(forest);
    }
  }

  if (frameCount > 750) {
    s = "And it will get worse"
    textSize(40);
    fill(255);
    text(s, 350, 300);
  }

  if (frameCount > 800) {
    glitch(forest);
    if (frameCount % 30 == 0) {
      pixellate(forest);
    }
  }

  if (frameCount > 950) {
    s = "But we can fight back"
    textSize(40);
    fill(255);
    text(s, 325, 550);
  }

  if (frameCount > 1000) {
    fightBack(forest);
  }

  if (frameCount > 1550) {
    s = "And start again"
    textSize(40);
    fill(0);
    text(s, 400, 300);
  }

  if (frameCount > 1600) {
    background(forest)
    noLoop();
  }



}

function pixellate(theImg) {

  //Borrowed code from in class example to pixellate some parts of the image by drawing rectangles over the image
  
  var x = floor(random(theImg.width));
  var y = floor(random(theImg.width));





  var loc = (x + (y * theImg.width)) * 4;

  theImg.loadPixels();

  var r = theImg.pixels[loc];
  var g = theImg.pixels[loc + 1];
  var b = theImg.pixels[loc + 2];


  noStroke();
  fill(r, g, b);
  rect(x, y, 80, 80)




}

function glitch(someImg) {
  //glitch function that loops through the canvas and creates rectangles that look like static
  var xDestroy = floor(random(someImg.width)) + floor(random(-10, 10));
  var yDestroy = floor(random(someImg.width)) + floor(random(-10, 10));

  for (smallX = xDestroy; smallX < xDestroy + 80; smallX++) {
    for (smallY = yDestroy; smallY < yDestroy + 80; smallY++) {
      fill(random(0, 255), random(0, 255), random(0, 255))
      rect(smallX, smallY, 1, 1)
    }
  }
}

function fightBack(thisImg) {
  //this was originally supposed to clear up the image, and I wanted to do that by going through the image again and
  //setting the pixel values back to what they originally were.
  //however, I did not manage to that, as I was just getting a new pattern instead of the old image
  //so i decided to signify fighting back with just clearing the canvas little by little
  //probably don't need all this code to make white squares appear, but this was the code I was using to set the pixels, 
  //and through some modification, it started making white squares, so I kept in case I wanted to revisit.
  
  var x = floor(random(thisImg.width));
  var y = floor(random(thisImg.height));

  var loc = (x + (y * thisImg.width)) * 4;

  thisImg.loadPixels();

  var r = thisImg.pixels[loc];
  var g = thisImg.pixels[loc + 1];
  var b = thisImg.pixels[loc + 2];

  var c = (r, g, b);

  loc += 1;
  for (newX = x; newX < x + 100; newX++) {
    for (newY = y; newY < y + 100; newY++) {

      r = thisImg.pixels[loc];
      g = thisImg.pixels[loc + 1];
      b = thisImg.pixels[loc + 2];

      c = (r, g, b);

      set(newX, newY, c);
    }
  }
  updatePixels();


}