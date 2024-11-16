import { html } from 'lit';
import '../components/topappbars/ur-topappbar/ur-topappbar'; // Adjust path as necessary

const Template = args => html`
  <ur-topappbar header-title="${args.headerTitle}" variant="${args.variant}" 
    scroll-behavior="${args.scrollBehavior}"
    ${args.scrollThreshold ? `scroll-threshold="${args.scrollThreshold}"` : ''}></ur-topappbar>

  <div class="example-scroll-target" style="background: grey; height: 250px; overflow: auto;">
    <div style="height: 1000px;"></div>
  </div>
`;

export default {
  title: 'urnovl/Business/TopAppBars',
  render: Template,
  argTypes: {
    variant: {
      control: 'select',
      options: ['center-aligned', 'small', 'medium', 'large'], // Available variant options
      description: 'Select the variant for the top app bar',
    },
    title: {
      control: 'text',
      description: 'Text to display as the app bar title',
    },
    scrollBehavior: {
      control: 'select',
      options: ['hide', 'elevate', 'shrink'], // Available scroll behaviors
      description: 'Scroll behavior for the top app bar',
    },
  },
};

export const Default = {
  args: {
    variant: 'small', // Default variant option
    headerTitle: 'Title', // Default title
  },
};

export const ScrollHide = {
  args: {
    variant: 'small',
    headerTitle: 'Scroll Behavior: Hide',
    scrollBehavior: 'hide',
    scrollThreshold: 30, // Added scroll-threshold
  },
};

export const ScrollShrinkMedium = {
  args: {
    variant: 'medium',
    headerTitle: 'Scroll Medium Behavior: shrink',
    scrollBehavior: 'shrink',
    scrollThreshold: 30, // Added scroll-threshold
  },
};

export const ScrollShrinkLarge = {
  args: {
    variant: 'large',
    headerTitle: 'Scroll Large Behavior: shrink',
    scrollBehavior: 'shrink',
    scrollThreshold: 30, // Added scroll-threshold
  },
};

export const ScrollShrinkElevate = {
  args: {
    variant: 'medium',
    headerTitle: 'Scroll Medium Behavior: shrink elevate',
    scrollBehavior: 'shrink elevate',
  },
};
