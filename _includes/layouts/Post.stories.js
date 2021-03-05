import "../styles/global.css";
import { default as PostComponent } from "./Post.svelte";

export default {
  title: "Layouts/Post",
};

const Template = (args) => ({ Component: PostComponent, props: args });

export const Post = Template.bind({});

Post.args = {
  data: {},
  content: `
        <h1>Example content for Storybook</h1>
        <p>
        This is some example HTML content for Storybook.
        </p>
        `,
};
