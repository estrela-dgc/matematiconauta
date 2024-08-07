//Forma de objetos
class Sprites {
   //Metodo Construtor
   constructor(posX, posY, width, height, color) {
       //this.atributos
       //Posição inicial o eixo X
       this.posX = posX;
       //Posição inicial o eixo Y
       this.posY = posY;
       //Lagura
       this.width = width;
       //Altura
       this.height = height;
       //Cor do objeto
       this.color = color;
       //Se o objeto é Visivel ou não
       this.visible = true;
       //Se o objeto bloqueia ou não
       this.block = true;
       //Se o objeto some ao ser tocado
       this.pegar = false;
       //Velocidade
       this.speed = 2;
   }
   
   //Retorna a metade da Largura
   halfWidth(){
       console.log("Largura: "+this.width);
       console.log("Metade da largura: "+(this.width / 2));
       return this.width / 2;
   }
   //Retorna a metade da altura    
   halfHeight(){
       console.log("Largura: "+this.height);
       console.log("Metade da largura: "+(this.height / 2));
       return this.height / 2;
   }
   // Retorna o a Posição do centro do objeto no Calculado apartir do eixo X
   centerX(){
       console.log("Centro do Eixo X: "+(this.posX + this.halfWidth()));
       return this.posX + this.halfWidth();
   }
   // Retorna o a Posição do centro do objeto no Calculado apartir do eixo Y
   centerY(){
       console.log("Centro do Eixo Y: "+(this.posY + this.halfHeight()));
       return this.posY + this.halfHeight();
   }
}