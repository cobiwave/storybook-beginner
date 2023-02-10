import Stack from "../components/Stack"

// Exporting an empty obj means: exporting the main configuration for your storybook component
export default {
  // Defines the section of our component
  title: "Molecules/Stack",
  // Defines the component we want to display
  component: Stack,
 /// Defines the type of the argument (prop), keep in mind we can define args that are just specific to test with Storybook
  argTypes: {
    numberOfChildren: { type: "number", defaultValue: 4 },
  },
}

// Define the initial template of your component
const Template = ({ numberOfChildren, ...args }) => (
  <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map(number => (
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "teal",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {number + 1}
      </div>
    ))}
  </Stack>
)

export const Horizontal = Template.bind({})
Horizontal.args = {
  direction: "row",
  spacing: 2,
  wrap: false,
}

export const Vertical = Template.bind({})
Vertical.args = {
  direction: "column",
  spacing: 2,
  wrap: false,
}

export const NoSpacing = Template.bind({})
NoSpacing.args = {
  direction: "row",
  spacing: 0,
  wrap: false,
}

export const WrapOverflow = Template.bind({})
WrapOverflow.args = {
  numberOfChildren: 40,
  direction: "row",
  spacing: 2,
  wrap: true,
}