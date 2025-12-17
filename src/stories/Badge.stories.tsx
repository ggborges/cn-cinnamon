import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Badge } from "@/components/ui/badge";

const meta: Meta<typeof Badge> = {
    title: "UI/Badge",
    component: Badge,
    args: {
        children: "Badge",
        variant: "default",
    },
    argTypes: {
        variant: {
            control: "select",
            options: ["default", "secondary", "destructive", "outline"],
        },
    },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Playground: Story = {
    render: (args) => <Badge {...args} />,
};

export const Variants: Story = {
    render: () => (
        <div className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
        </div>
    ),
};

export const DarkMode: Story ={
    render: () => (
        <div className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
        </div>
    ),
};
DarkMode.parameters = { theme: { mode: "dark" } };