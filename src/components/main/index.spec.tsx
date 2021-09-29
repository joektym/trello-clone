import { render } from "@test";
import Main from "./index";

describe("Main component testing with testing-library", () => {
    it("renders without crashing", () => {
        const component = render(<Main />);
        expect(component).toBeTruthy();
    });

    it("Must have 'To Do' Column Title", () => {
        const { getByText } = render(<Main />);
        getByText("To Do");
    });

    it("Must have 'In Progress' Column Title", () => {
        const { getByText } = render(<Main />);
        getByText("In Progress");
    });

    it("Must have 'QA' Column Title", () => {
        const { getByText } = render(<Main />);
        getByText("QA");
    });

    it("Must have 'Done' Column Title", () => {
        const { getByText } = render(<Main />);
        getByText("Done");
    });
});
