function KeysAndValues(clave_valor) {
  console.log(Object.keys(clave_valor), Object.values(clave_valor));
}

KeysAndValues({
  a: 1,
  b: 2,
  c: 3,
});

KeysAndValues({
  a: "Apple",
  b: "Microsoft",
  c: "Google",
});

KeysAndValues({
  key1: true,
  key2: false,
  key3: undefined,
});
