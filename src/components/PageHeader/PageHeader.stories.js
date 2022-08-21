import React from 'react'
import { PageHeader } from './PageHeader'

export default {
  title: 'Components/PageHeader',
  component: PageHeader,
  decorators: [],
  parameters: {}
}

const Story = (args) => <PageHeader {...args} />

export const Default = Story.bind({})
Default.args = {

}
