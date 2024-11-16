import { html } from 'lit';
import '../components/ur-logo/ur-logo'; // Adjust path as necessary

const Template = ({ width, height, color, rotation, opacity }) => html`
  <ur-logo 
    width="${width}" 
    height="${height}" 
    color="${color}" 
    rotation="${rotation}" 
    opacity="${opacity}">
  </ur-logo>
`;

export default {
  title: 'Core/Logo',
  render: Template,
  argTypes: {
    width: {
      control: 'text',
      defaultValue: '70', // Default width
      description: 'Width of the logo in pixels',
    },
    height: {
      control: 'text',
      defaultValue: '19', // Default height
      description: 'Height of the logo in pixels',
    },
    color: {
      control: 'color',
      defaultValue: 'currentColor', // Default color
      description: 'Fill color of the logo',
    },
    rotation: {
      control: {
        type: 'number',
        min: 0,
        max: 360,
        step: 1,
      },
      defaultValue: 0, // Default rotation (no rotation)
      description: 'Rotation of the logo in degrees',
    },
    opacity: {
      control: {
        type: 'number',
        min: 0,
        max: 1,
        step: 0.1,
      },
      defaultValue: 0.9, // Default opacity
      description: 'Opacity of the logo (0 is transparent, 1 is fully opaque)',
    },
  },
};

export const Default = {
  args: {
    width: '70', // Default width
    height: '19', // Default height
    color: 'currentColor', // Default color
    rotation: 0, // Default rotation
    opacity: 0.9, // Default opacity
  },
};

export const CustomSizeAndColor = {
  args: {
    width: '100', // Custom width
    height: '50', // Custom height
    color: '#FF5733', // Custom color
    rotation: 0, // Default rotation
    opacity: 0.8, // Slightly more transparent
  },
};

export const RotatedLogo = {
  args: {
    width: '70', // Default width
    height: '19', // Default height
    color: 'currentColor', // Default color
    rotation: 45, // 45 degrees rotation
    opacity: 0.7, // More transparency
  },
};

export const FullyRotatedLogo = {
  args: {
    width: '70',
    height: '19',
    color: '#0000FF', // Custom blue color
    rotation: 180, // 180 degrees rotation
    opacity: 1, // Fully opaque
  },
};
