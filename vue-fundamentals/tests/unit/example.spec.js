describe("IndecisionComponent", () => {
  test("Debe de ser mayor de 10", () => {
    //Arreglar
    let value = 5;
    //Estímulo
    value += 12;
    //Observar el resultado
    expect(value).toBeGreaterThan(10);
  });
});
