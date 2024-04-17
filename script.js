const gen = document.getElementById("generator");
const canvas = document.getElementById("canvas"); // Referência o canvas, ele é a variável do canvas.
const ctx = canvas.getContext("2d"); // Pega o contexto do  canvas, basicamente com isso conseguimos fornecer métodos e propriedades necessaários para desenhar e manipular dentro do canvas.

function randomHex(){
    // Gera um número hexadecimal de 0 a 16777215 (FFFFFF em hexadecimal)
    const randomHex = Math.floor(Math.random() * 16777215).toString(16);
    // Preenche com zeros à esquerda para garantir que o código tenha 6 dígitos
    return '#' + randomHex.padStart(6, '0');
}

gen.onclick = function(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const forms = Math.floor(Math.random() * 20) + 1;
  console.log(forms)

  for(let i = 1; i <= forms; i++){
    let typeOfForm = Math.floor(Math.random() * 4) + 1 
    hex = randomHex();

    if (typeOfForm === 1) {
      let x = Math.floor(Math.random() * 500) + 1;
      let y = Math.floor(Math.random() * 500) + 1;
      let size = Math.floor(Math.random() * 200) + 1;
      let lineWidth = Math.floor(Math.random() * 10) + 1;
      let shadowColor = randomHex();
      let shadowBlur = Math.floor(Math.random() * 30) + 1;
      let shadowOffsetX = Math.floor(Math.random() * 30) + 1;
      let shadowOffsetY = Math.floor(Math.random() * 30) + 1;

      ctx.fillStyle = hex;
      ctx.lineWidth = lineWidth;
      ctx.shadowColor = shadowColor;
      ctx.shadowBlur = shadowBlur;
      ctx.shadowOffsetX = shadowOffsetX;
      ctx.shadowOffsetY = shadowOffsetY;
      ctx.fillRect(x, y, size, size);
    } 
    else if (typeOfForm === 2) {
      let x = Math.floor(Math.random() * 500) + 1;
      let y = Math.floor(Math.random() * 500) + 1;
      let width = Math.floor(Math.random() * 200) + 1;
      let height = Math.floor(Math.random() * 200) + 1;
      let lineWidth = Math.floor(Math.random() * 10) + 1;
      let shadowColor = randomHex();
      let shadowBlur = Math.floor(Math.random() * 30) + 1;
      let shadowOffsetX = Math.floor(Math.random() * 30) + 1;
      let shadowOffsetY = Math.floor(Math.random() * 30) + 1;

      ctx.fillStyle = hex;
      ctx.lineWidth = lineWidth;
      ctx.shadowColor = shadowColor;
      ctx.shadowBlur = shadowBlur;
      ctx.shadowOffsetX = shadowOffsetX;
      ctx.shadowOffsetY = shadowOffsetY;
      ctx.fillRect(x, y, width, height);
  } else if (typeOfForm === 3) {
      let x = Math.floor(Math.random() * 500) + 1;
      let y = Math.floor(Math.random() * 500) + 1;
      let radius = Math.floor(Math.random() * 200) + 1;
      let lineWidth = Math.floor(Math.random() * 10) + 1;
      let shadowColor = randomHex();
      let shadowBlur = Math.floor(Math.random() * 30) + 1;
      let shadowOffsetX = Math.floor(Math.random() * 30) + 1;
      let shadowOffsetY = Math.floor(Math.random() * 30) + 1;

      ctx.fillStyle = hex;
      ctx.lineWidth = lineWidth;
      ctx.shadowColor = shadowColor;
      ctx.shadowBlur = shadowBlur;
      ctx.shadowOffsetX = shadowOffsetX;
      ctx.shadowOffsetY = shadowOffsetY;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
  } else {
      let x1 = Math.floor(Math.random() * 500) + 1;
      let y1 = Math.floor(Math.random() * 500) + 1;
      let x2 = Math.floor(Math.random() * 500) + 1;
      let y2 = Math.floor(Math.random() * 500) + 1;
      let x3 = Math.floor(Math.random() * 500) + 1;
      let y3 = Math.floor(Math.random() * 500) + 1;
      let lineWidth = Math.floor(Math.random() * 10) + 1;
      let shadowColor = randomHex();
      let shadowBlur = Math.floor(Math.random() * 30) + 1;
      let shadowOffsetX = Math.floor(Math.random() * 30) + 1;
      let shadowOffsetY = Math.floor(Math.random() * 30) + 1;

      ctx.fillStyle = hex;
      ctx.lineWidth = lineWidth;
      ctx.shadowColor = shadowColor;
      ctx.shadowBlur = shadowBlur;
      ctx.shadowOffsetX = shadowOffsetX;
      ctx.shadowOffsetY = shadowOffsetY;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineTo(x3, y3);
      ctx.closePath();
      ctx.fill();
    }
  }
}


