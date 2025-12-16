import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";

const meta: Meta = {
  title: "Test/Hello",
};

export default meta;

type Story = StoryObj;

export const Hello: Story = {
  render: () => (
    <div className="p-4 rounded-lg bg-primary text-primary-foreground">
      Tailwind 4 + Shadcn tokens are working 🎉
    </div>    
  ),
};

export const HelloDark: Story = {
  render: () => (
    <div className="p-4 rounded-lg bg-primary text-primary-foreground">
      Dark mode tokens are working 🌙
    </div>
  ),
};
HelloDark.parameters = { theme: { mode: "dark" } };