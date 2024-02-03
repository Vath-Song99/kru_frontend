import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './profilecard';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ProfileCard> = {
    title: "./component/molecules/profilecardteacher/profilecard.tsx",
  component: ProfileCard,
  parameters: {
      layout: "centered",
  },
  tags:["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const FirstStory: Story = {
  args: {
    children: "",
  toptext: "",
  NameTutorTitle: "",
  NameSubject: "",
  RetingTutor: "",
  Studentsqty: "",
  PriceTutor: "",
  },

    //👇 The args you need here will depend on your component
}
