import React from 'react';
import { Headers } from './Headers';
import { withDesign } from 'storybook-addon-designs'


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Style/Typography',
  component: Headers,
  decorators: [withDesign]
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Headers {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
};


Primary.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/ymEfGlH4YA1LdiYuePi4I9/EB-Components',
  },
}
