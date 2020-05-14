class Raindrops{
    constructor() {
      var charstring = "1234567890abcde%&#@"
      this.x = Math.round(random(0,1200));
      this.y = Math.round(random(-500,-50));
      this.yspeed = Math.round(random(0,20))
      var num = Math.round(random(0,18))
      this.displaychar = charstring.charAt(num);

    }
    
    fall()
    {
      this.y = this.y+this.yspeed;
      if (this.y>height)
      {
        this.y = random(-200,-100)
      }
    }

dislpay()
{
      stroke ("purple")
      textSize(random(12,28))
      text(this.displaychar,this.x,this.y)
}

}