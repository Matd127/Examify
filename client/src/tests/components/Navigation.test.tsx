import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";

const navigation = (
  <BrowserRouter>
    <Navigation />
  </BrowserRouter>
);

describe("Routing and Navigation Testing", () => {
  test("Should render navigation elements correctly", () => {
    render(navigation);

    const homeLink = screen.getByText("Home");
    const contactLink = screen.getByText("Contact");
    const aboutUsLink = screen.getByText("About us");
    const signInLink = screen.getByText("Sign in");

    expect(homeLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    expect(aboutUsLink).toBeInTheDocument();
    expect(signInLink).toBeInTheDocument();
  });

  test("Should verify that navigation links are rendered as links'", () => {
    render(navigation);
    const homeLink = screen.getByText("Home");
    const contactLink = screen.getByText("Contact");
    const aboutUsLink = screen.getByText("About us");
    const signInLink = screen.getByText("Sign in");

    expect(homeLink).toHaveProperty("tagName", "A");
    expect(contactLink).toHaveProperty("tagName", "A");
    expect(aboutUsLink).toHaveProperty("tagName", "A");
    expect(signInLink).toHaveProperty("tagName", "A");
  });

  test("Should change URL on click", () => {
    render(navigation);

    const homeLink = screen.getByText("Home");
    const contactLink = screen.getByText("Contact");
    const aboutUsLink = screen.getByText("About us");
    const signInLink = screen.getByText("Sign in");

    fireEvent.click(homeLink);
    expect(window.location.pathname).toBe("/");

    fireEvent.click(contactLink);
    expect(window.location.pathname).toBe("/contact");

    fireEvent.click(aboutUsLink);
    expect(window.location.pathname).toBe("/about");

    fireEvent.click(signInLink);
    expect(window.location.pathname).toBe("/auth");
  });
});
