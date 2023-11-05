import { render, screen } from "@testing-library/react";
import { useInView } from "react-intersection-observer";
import Hero from "../../components/hero/Hero";

jest.mock("react-intersection-observer");

describe("Hero Testing", () => {
  test("Should render hero correctly", () => {
    const fakeRef = {
      current: null,
    };
    // @ts-ignore
    useInView.mockImplementation(() => ({
      ref: fakeRef,
      inView: true,
    }));

    render(<Hero />);

    const heroTitle = screen.getByText(/Welcome to Examify/i);
    expect(heroTitle).toBeInTheDocument();

    const heroText = screen.getByText(
      /Are you tired of traditional, time-consuming testing methods?/i
    );
    expect(heroText).toBeInTheDocument();
  });
});
