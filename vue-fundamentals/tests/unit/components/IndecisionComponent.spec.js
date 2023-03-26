import { shallowMount } from "@vue/test-utils";
import IndecisionComponent from "@/components/IndecisionComponent";

describe("IndecisionComponent.vue", () => {
  let wrapper;
  let consoleLogSpy;

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          answer: "yes",
          forced: false,
          image: "https://yesno.wtf/assets/yes/2.gif",
        }),
    })
  );

  beforeEach(() => {
    wrapper = shallowMount(IndecisionComponent);
    jest.clearAllMocks();
  });

  test("Tiene que hacer match con el snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
    consoleLogSpy = jest.spyOn(console, "log");
  });

  test("No escribir signo de interrogacion no dispara nada", async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer");
    const input = wrapper.find("input");
    await input.setValue("Hola Mundo");
    //Ha sido llamado una vez
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(getAnswerSpy).toHaveBeenCalledTimes(0);
  });

  test("Escribir signo de interrogacion dispara el fetch", async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer");
    const input = wrapper.find("input");
    await input.setValue("Hola Mundo?");
    //expect(consoleLogSpy).toHaveBeenCalledTimes();
    expect(getAnswerSpy).toHaveBeenCalled();
  });

  test("Pruebas en getAnswer()", async () => {
    await wrapper.vm.getAnswer();
    const image = wrapper.find("img");
    expect(image.exists()).toBeTruthy();
    expect(wrapper.vm.image).toBe("https://yesno.wtf/assets/yes/2.gif");
    expect(wrapper.vm.answer).toBe("Si!");
  });

  test("Pruebas en getAnswer - Fallo en el API", async () => {
    fetch.mockImplementationOnce(() => Promise.reject("Api is down"));
    await wrapper.vm.getAnswer();
    const image = wrapper.find("img");
    expect(image.exists()).toBeFalsy();
    expect(wrapper.vm.answer).toBe("No se puedo realizar la llamada a la API");
  });
});
