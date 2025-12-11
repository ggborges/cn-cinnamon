import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Test/Hello",
};

export default meta;

type Story = StoryObj;

export const Hello: Story = {
  render: () => (
    <div className="p-4 rounded-md bg-blue-500 text-white">
      Tailwind 4 is working 🎉
    </div>
  ),
};
