import { render, cleanup } from "@testing-library/react";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import App from "../components/App";
import router from "../helper/helper";

afterEach(cleanup);

describe("Container Component", () => {
  const { getByTestId, asFragment } = render(
    <RouterContext.Provider value={router}>
      <App />
    </RouterContext.Provider>
  );
  test("Should render correctly on route", async () => {
    expect(getByTestId("App")).toBeInTheDocument();
  });
  test("Should match snapshot", () => {
    expect(asFragment(<App />)).toMatchSnapshot();
  });
});
