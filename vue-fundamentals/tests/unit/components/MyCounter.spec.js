import { shallowMount } from "@vue/test-utils";
import MyCounter from "@/components/MyCounter";

describe("MyCounter.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(MyCounter);
  });
  /*test("Tiene que hacer match con el snapshot", () => {
    const wrapper = shallowMount(MyCounter);
    expect(wrapper.html()).toMatchSnapshot();
  });*/

  test("H2 debe de tener el valor por defecto", () => {
    //Si el elemnto h1 existe
    expect(wrapper.find("h1").exists()).toBeTruthy();

    const h1Value = wrapper.find("h1").text();

    //Si el valor de h1 es "Counter 1"
    expect(h1Value).toBe("Counter 1");
  });

  test("El valor del counter debe ser 10 en el <p>", () => {
    expect(wrapper.find('[data-testid="counter"]').text()).toBe("10");
  });

  test("Debe incrementar y decrementar el contador", async () => {
    const [increaseButton, decreaseButton] = wrapper.findAll("button");
    await increaseButton.trigger("click");
    await decreaseButton.trigger("click");
    const value = wrapper.find('[data-testid="counter"]').text();
    expect(value).toBe("10");
  });

  test("Debe establecer el valor por defecto", () => {
    const { start } = wrapper.props();
    const value = wrapper.find('[data-testid="counter"]').text();
    expect(Number(value)).toBe(start);
  });

  test("Debe de mostrar la propiedad title", () => {
    const title = "Hola mundo";
    const wrapper = shallowMount(MyCounter, { props: { title } });
    expect(wrapper.find("h1").text()).toBe("Hola mundo");
  });
});
