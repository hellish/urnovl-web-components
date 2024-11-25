import { html } from 'lit';
import '../components/ur-hero/ur-hero'; // Adjust the path as necessary

const Template = args => html`
  <ur-hero
    hero-title="${args.heroTitle}"
    hero-subtitle="${args.heroSubtitle}"
    cta-text="${args.ctaText}"
    background-image="${args.backgroundImage}"
    background-color="${args.backgroundColor}"
    layout="${args.layout}"
    background-justification="${args.backgroundJustification}"
    background-alignment="${args.backgroundAlignment}"
    hero-title-color="${args.heroTitleColor}"
    hero-subtitle-color="${args.heroSubtitleColor}"
    onCtaClicked="handleCtaClick"
  ></ur-hero>
`;

export default {
  title: 'urnovl/Basic/Hero',
  render: Template,
  argTypes: {
    heroTitle: {
      control: 'text',
      description: 'Title displayed in the hero section',
    },
    heroSubtitle: {
      control: 'text',
      description: 'Subtitle displayed in the hero section',
    },
    ctaText: {
      control: 'text',
      description: 'Text for the call-to-action button',
    },
    backgroundImage: {
      control: 'text',
      description: 'URL for the background image',
    },
    backgroundColor: {
      control: 'color',
      description: 'Overlay color for the hero background',
    },
    layout: {
      control: 'select',
      options: ['left', 'right', 'center'],
      description: 'Layout alignment for hero content',
    },
    backgroundJustification: {
      control: 'select',
      options: ['top', 'center', 'bottom'],
      description: 'Vertical alignment for the background image',
    },
    backgroundAlignment: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Horizontal alignment for the background image',
    },
    heroTitleColor: {
      control: 'color',
      description: 'Color for the hero title text',
    },
    heroSubtitleColor: {
      control: 'color',
      description: 'Color for the hero subtitle text',
    },
  },
};

// Default story
export const Default = {
  args: {
    heroTitle: 'Are you a writer?',
    heroSubtitle: 'Do what you love most, upload Free Stories or become a Partner and get rewarded',
    ctaText: 'Learn how',
    backgroundImage: 'https://www.urnovl.co/writers.6f4ce691fca351ed73ee.png',
    backgroundColor: 'rgb(25 26 31)',
    layout: 'center',
    backgroundJustification: 'center',
    heroTitleColor: '#ffffff',
    heroSubtitleColor: '#cccccc',
  },
};


// Left-aligned content
export const LeftAligned = {
  args: {
    ...Default.args,
    layout: 'left',
  },
};

// Right-aligned content
export const RightAligned = {
  args: {
    ...Default.args,
    layout: 'right',
  },
};

// Top-justified background
export const TopBackground = {
  args: {
    ...Default.args,
    backgroundImage: 'https://www.urnovl.co/writers.6f4ce691fca351ed73ee.png', // Move URL here
    backgroundJustification: 'top',
  },
};

// Bottom-justified background
export const BottomBackground = {
  args: {
    ...Default.args,
    backgroundImage: 'https://www.urnovl.co/writers.6f4ce691fca351ed73ee.png', // Move URL here
    backgroundJustification: 'bottom',
  },
};

// Left-aligned background with right-aligned content
export const LeftAlignedBackground = {
  args: {
    ...Default.args,
    backgroundImage: 'https://www.urnovl.co/writers.6f4ce691fca351ed73ee.png', // Move URL here
    backgroundAlignment: 'left',
    layout: 'right',
    heroTitle: 'Welcome Writers!',
    heroSubtitle: 'Place your stories in the spotlight.',
    ctaText: 'Join Now',
  },
};

// Right-aligned background with left-aligned content
export const RightAlignedBackground = {
  args: {
    ...Default.args,
    backgroundImage: 'https://www.urnovl.co/writers.6f4ce691fca351ed73ee.png', // Move URL here
    backgroundAlignment: 'right',
    layout: 'left',
    heroTitle: 'Your Story, Your Way',
    heroSubtitle: 'Let your creativity shine with us.',
    ctaText: 'Get Started',
  },
};

// Without background image
export const NoBackgroundImage = {
  args: {
    ...Default.args,
    backgroundImage: '',
    backgroundColor: 'rgba(255, 0, 0, 0.5)', // Red overlay for testing
  },
};

// Light theme variant
export const LightTheme = {
  args: {
    ...Default.args,
    backgroundImage: 'https://www.urnovl.co/writers.6f4ce691fca351ed73ee.png', // Move URL here
    heroTitle: 'Welcome to Urnovl!',
    heroSubtitle: 'Explore the world of stories, novels, and creative writing.',
    ctaText: 'Get Started',
  },
};

// Custom Title and Subtitle Colors
export const CustomColors = {
  args: {
    ...Default.args,
    backgroundImage: 'https://www.urnovl.co/writers.6f4ce691fca351ed73ee.png', // Move URL here
    heroTitleColor: '#ff5733', // Orange title
    heroSubtitleColor: '#33b5e5', // Blue subtitle
  },
};