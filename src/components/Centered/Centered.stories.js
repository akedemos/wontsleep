import React from 'react';
import { Centered } from './Centered';

export default {
  title: 'Components/Centered',
  component: Centered,
  decorators: [],
  parameters: {}
};

const Story = (args) => <Centered {...args} />;

export const Default = Story.bind({});
Default.args = {

};
