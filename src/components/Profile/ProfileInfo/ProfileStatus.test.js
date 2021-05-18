import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Button component", () => {
    test("it shows the expected text when clicked (testing the wrong way!)", () => {
        const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("SUBSCRIBE TO BASIC");
    });
    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
        const root = component.root;
        let span  = root.findByType('span')
        expect(span.innerText).not.toBeNull();
    });
    test("after creation <span> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
        const root = component.root;
        expect( () => {
            let input  = root.findByType('input')
        }).toThrow();
    });
    test("after creation <span> should contain correct status", () => {
        const component = create(<ProfileStatus status="Mellorn" />);
        const root = component.root;
        let span  = root.findByType('span')
        expect(span.children[0]).toBe('Mellorn');
    });
    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="Mellorn" />);
        const root = component.root;
        let span  = root.findByType('span')
        span.props.onDoubleClick()
        let input  = root.findByType('input')
        expect(input.props.value).toBe('Mellorn');
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status="Mellorn" updateStatus={ mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1);
    });

});

