import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { 
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardFooter,
    CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof Card> = {
    title: "UI/Card",
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
    render: () => (
        <Card className="max-w-md">
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>
                    Card description goes here.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <div className="text-sm text-muted-foreground">
                    This is the content area. You can place any components here.
                </div>
            </CardContent>

            <CardFooter className="justify-end gap-2">
                <Button variant="secondary">Cancel</Button>
                <Button>Confirm</Button>
            </CardFooter>
        </Card>
    ),
};

export const DarkMode: Story = {
    render: () => (
        <Card className="max-w-md">
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>
                    Tokens should switch correctly.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <div className="text-sm text-muted-foreground">
                    Background and foreground should follow the dark theme.
                </div>
            </CardContent>

            <CardFooter className="justify-end gap-2">
                <Button variant="destructive">Cancel</Button>
                <Button>Confirm</Button>
            </CardFooter>
        </Card>
    ),
};
DarkMode.parameters = { theme: { mode: "dark" } };