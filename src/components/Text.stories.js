import React from 'react';
import { Text } from './Text';


export default {
  title: 'Style/Typography',
  component: Text
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Text {...args} />;

export const Paragraph = Template.bind({});
