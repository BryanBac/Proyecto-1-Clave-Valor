function KeysAndValues(clave_valor) {
  claves = Object.keys(clave_valor);
  valores = Object.values(clave_valor);
  for (var i = 0; i < claves.length; i++) {
    for (var j = 0; j < claves.length - 1; j++) {
      if (claves[j] > claves[j + 1]) {
        var clave_aux = claves[j];
        var valor_aux = valores[j];
        claves[j] = claves[j + 1];
        valores[j] = valores[j + 1];
        claves[j + 1] = clave_aux;
        valores[j + 1] = valor_aux;
      }
    }
  }
  console.log(claves, valores);
}

KeysAndValues({
  b: 2,
  c: 3,
  a: 1,
});

KeysAndValues({
  a: "Apple",
  b: "Microsoft",
  c: "Google",
});

KeysAndValues({
  key3: undefined,
  key1: true,
  key2: false,
});
