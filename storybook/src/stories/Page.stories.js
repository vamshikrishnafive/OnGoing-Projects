import Page from "../components/Page";

export default {
    title: "Components/intro",
    component: Page
}

// const Template = args => <Page {...args}/>


const args = {
    title: "Get started",
    image: "https://5ccbc373887ca40020446347-axnziuvplt.chromatic.com/static/media/design-system.3b69e6d6.png",
    titleText: "Storybook Design System is a reusable component library that helps Storybook contributors build UIs faster. The goal is to make building durable UIs more productive and satisfying.",
    heading: "Install",
    headingText: "SDS components are written in React, and its stories are written in Component Story Format. It requires Storybook version 5.2-beta and up. Add SDS to your project. npm install --save @storybook/design-system",
    footer: "Used by Storybook homepage LearnStorybook.com ChromaticQA.com"
}

export const Default = <Page title="Get started"
    image="https://5ccbc373887ca40020446347-axnziuvplt.chromatic.com/static/media/design-system.3b69e6d6.png"
    titleText="Storybook Design System is a reusable component library that helps Storybook contributors build UIs faster. The goal is to make building durable UIs more productive and satisfying."
    heading="Install"
    headingText="SDS components are written in React, and its stories are written in Component Story Format. It requires Storybook version 5.2-beta and up. Add SDS to your project. npm install --save @storybook/design-system"
    footer="Used by Storybook homepage LearnStorybook.com ChromaticQA.com" />
