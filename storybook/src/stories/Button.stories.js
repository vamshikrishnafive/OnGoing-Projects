import Button from "../components/Button";

export default {
    title: "Components/Button",
    component: Button,
    argTypes: { handleClick: { action: "clickButton" } }
}

const Template = args => <Button {...args} />

export const Red = Template.bind({})

Red.args = {
    backgroundColor: "red",
    label: "Press me",
    size: "md"
}

export const Green = Template.bind({})

Green.args = {
    backgroundColor: "green",
    label: "Press me",
    size: "md"
}

export const small = Template.bind({})

small.args = {
    backgroundColor: "red",
    label: "Press me",
    size: "sm"
}
export const medium = Template.bind({})

medium.args = {
    backgroundColor: "red",
    label: "Press me",
    size: "md"
}
export const long = Template.bind({})

long.args = {
    backgroundColor: "red",
    label: "Press me",
    size: "lg"
}

export const longLabel = Template.bind({})

longLabel.args = {
    backgroundColor: "red",
    label: "Designing and testing components is crucial to every application",
    size: "md"
}

export const middleLabel = Template.bind({})

middleLabel.args = {
    backgroundColor: "red",
    label: "Designing and testing components is crucial to every application",
    size: "sm"
}
