import type { Meta, StoryObj } from "@storybook/nextjs";
import Welcome from "./Welcome";

const meta: Meta<typeof Welcome> = {
  title: "Components/Welcome",
  component: Welcome,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Welcome>;

export const Default: Story = {
  args: {
    title: "Bienvenue sur Meow !",
    text: "À vous de jouer : choisissez votre Meow préféré !",
  },
};
