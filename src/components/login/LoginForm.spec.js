import { render, screen, fireEvent } from "@vue/test-utils";
import LoginForm from "./LoginForm.vue";

describe("LoginForm.vue", () => {
  beforeEach(() => {
    localStorage.removeItem("jwt");
  });

  test("renders correctly", () => {
    render(LoginForm);
    expect(screen.getByRole("heading", { name: "Login" })).toBeInTheDocument();
    expect(screen.getByRole("form")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("shows errors on invalid submission", async () => {
    render(LoginForm);
    const form = screen.getByRole("form");
    await fireEvent.submit(form);
    expect(screen.getByText("Invalid email or password")).toBeInTheDocument();
  });

  test("successful login redirects and stores JWT", async () => {
    const mockAxios = {
      post: jest.fn(() => Promise.resolve({ data: { jwt: "mock-jwt" } })),
    };
    render(LoginForm, { mocks: { axios: mockAxios } });

    const emailInput = screen.getByLabelText("Email:");
    const passwordInput = screen.getByLabelText("Password:");
    const form = screen.getByRole("form");

    await fireEvent.change(emailInput, {
      target: { value: "test@example.com" },
    });
    await fireEvent.change(passwordInput, { target: { value: "password123" } });
    await fireEvent.submit(form);

    expect(mockAxios.post).toHaveBeenCalledTimes(1);
    expect(mockAxios.post).toHaveBeenCalledWith(
      "http://localhost:3000/sessions.json",
      expect.any(Object)
    );
    expect(localStorage.getItem("jwt")).toBe("mock-jwt");
  });
});
