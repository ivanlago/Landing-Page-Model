import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Accusantium quasi cumque repellendus animi nobis reiciendis officiis
    fugit facere delectus inventore ab, deleniti maiores eaque placeat
    necessitatibus magni velit ad similique?`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
