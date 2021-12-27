import Stack from "../components/Stack";

export default {
    title: "Components/Stack",
    component: Stack,
    argTypes: {
        numberOfChildren: { type: "number", defaultValue: 4 }
    }
}

const Template = ({ numberOfChildren, ...args }) =>
    <Stack {...args}>
        {[...Array(numberOfChildren).keys()].map(n => (
            <div style={{ width: "50px", height: "50px", backgroundColor: "red", display: "flex", justifyContent: "center", alignItems: "center" }}>{n + 1}</div>
        ))}
    </Stack>

export const Horizontal = Template.bind({})
Horizontal.args = {
    direction: "row",
    spacing: 2,
    wrap: false
}

export const Vertical = Template.bind({})
Vertical.args = {
    direction: "column",
    spacing: 2,
    wrap: false
}

export const NoSpacing = Template.bind({})
NoSpacing.args = {
    direction: "row",
    spacing: 0,
    wrap: false
}
export const wrapOverflow = Template.bind({})
wrapOverflow.args = {
    direction: "row",
    numberOfChildren: 50,
    spacing: 2,
    wrap: true
};
export const Empty = Template.bind({})
Empty.args = {
    direction: "row",
    numberOfChildren: 0,
    spacing: 2,
    wrap: true
}
export const NoSpacingVertical = Template.bind({})
NoSpacingVertical.args = {
    direction: "column",
    spacing: 0,
    wrap: true
}

