const cipher = {
    encode: function (offset, string) {
      let result = '';
      for (let i = 0; i < string.length; i++) {
        let charCode = string.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
          result += String.fromCharCode(((charCode - 65 + offset) % 26) + 65);
        } else {
          result += string[i];
        }
      }
      return result;
    },
  
    decode: function (offset, string) {
      return this.encode(26 - offset, string);
    }
  };

document.getElementById('cifrarBtn').addEventListener('click', function () {
    const mensaje = document.getElementById('mensaje').value.toUpperCase();
    const offset = parseInt(document.getElementById('offset').value);

    if (!isNaN(offset) && mensaje) {
        const resultado = cipher.encode(offset, mensaje);
        document.getElementById('resultado').textContent = resultado;
    } else {
        document.getElementById('resultado').textContent = "Por favor ingrese un mensaje válido y un desplazamiento.";
    }
});

document.getElementById('descifrarBtn').addEventListener('click', function () {
    const mensaje = document.getElementById('mensaje').value.toUpperCase();
    const offset = parseInt(document.getElementById('offset').value);

    if (!isNaN(offset) && mensaje) {
        const resultado = cipher.decode(offset, mensaje);
        document.getElementById('resultado').textContent = resultado;
    } else {
        document.getElementById('resultado').textContent = "Por favor ingrese un mensaje válido y un desplazamiento.";
    }
});
