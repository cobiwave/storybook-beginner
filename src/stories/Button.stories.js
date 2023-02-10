import Button from "../components/Button"

// Exporting an empty obj means: exporting the main configuration for your storybook component
export default {
    // Defines the section of our component
  title: "Atoms/Button",
  // Defines the component we want to display
  component: Button,
  /// Defines the type of the argument (prop), keep in mind we can define args that are just specific to test with Storybook
  argTypes: { handleClick: { action: "handleClick" } },
}

// Define the initial template of your component
const Template = args => <Button {...args} />

// Define diferent variation of your component by binding the initial template
export const Red = Template.bind({})
Red.args = {
  backgroundColor: "red",
  label: "CTA Label",
  size: "md",
}

export const Green = Template.bind({})
Green.args = {
  backgroundColor: "green",
  label: "CTA Label",
  size: "md",
}

export const Small = Template.bind({})
Small.args = {
  backgroundColor: "red",
  label: "CTA Label",
  size: "sm",
}

export const Large = Template.bind({})
Large.args = {
  backgroundColor: "red",
  label: "CTA Label",
  size: "lg",
}

export const LongLabel = Template.bind({})
LongLabel.args = {
  backgroundColor: "red",
  label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  size: "md",
}
