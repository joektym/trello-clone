import { render } from "@test";
import List from "./index";

describe("List component with testing-library", () => {
    const { getByTestId } = render(<List header="To Do" listKey="todo" />);
    const listColumnTitle = getByTestId("list-column-title");

    it("renders without crashing", () => {
        const component = render(<List header="To Do" listKey="todo" />);
        expect(component).toBeTruthy();
    });

    it("Must render column title", () => {
        expect(listColumnTitle).toBeDefined();
    });
});
