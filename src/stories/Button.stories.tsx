import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Button } from "@/components/ui/button";

const meta: Meta<typeof Button> = {
    title: "UI/Button",
    component: Button,
    args: {
        children: "Button",
        variant: "default",
        size: "default",
        disabled: false,
    },
    argTypes: {
        variant: {
            control: "select",
            options: ["default", "secondary", "destructive", "outline", "ghost", "link"],
        },
        size: {
            control: "select",
            options: ["default", "sm", "lg", "icon"],
        },
        asChild: {
            control: "boolean",
        },
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Playground: Story = {
    render: (args) => <Button {...args} />,
};

export const Variants: Story = {
    render: () => (
        <div className="flex flex-wrap gap-3">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon" aria-label="Icon button">
                ⌘
            </Button>
        </div>
    ),
};

export const Disabled: Story = {
    render: () => (
        <div className="flex flex-wrap gap-3">
            <Button disabled>Default</Button>
            <Button disabled variant='secondary'>Secondary</Button>
            <Button disabled variant='destructive'>Destructive</Button>
            <Button disabled variant='outline'>Outline</Button>
        </div>
    ),
};

export const AsChildLink: Story = {
    render: () => (
        <Button asChild>
            <a href="" target="_blank" rel="noreferrer">
                Link as Button
            </a>
        </Button>
    )
};

export const DarkMode: Story = {
    render: () => (
        <div className="flex flex-wrap gap-3">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
        </div>
    )
};
DarkMode.parameters = { theme: { mode: "dark" } };