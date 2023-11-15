

const dados1 = document.getElementById('form1');

function dados(){

  const titulo = document.getElementById('titulo').value;
  const texto = document.getElementById('texto').value;
 
   var win = window.open('A4','','height=900,width=700');

    win.document.write("<html><head><title>CARTA</title></head>");
    win.document.write('<body><h1 align="center">');
    win.document.write(titulo);
    win.document.write('</h1>');
    win.document.write('<p>')
    win.document.write(texto);
    win.document.write("</p><br>");
    win.document.write('</body></html>');
    win.print();
    win.close();

}

