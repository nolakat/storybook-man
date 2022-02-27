import React from 'react';
import { Headers } from './Headers';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Style/Typography',
  component: Headers
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Headers {...args} />;

export const Header = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Header.args = {
};

