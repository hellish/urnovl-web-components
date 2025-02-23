import { html } from 'lit';
import '../components/ur-time-ago/ur-time-ago';

const Template = args => html`
  <ur-time-ago
    date=${args.date}
    locale=${args.locale}
  ></ur-time-ago>
`;

export default {
  title: 'urnovl/Basic/TimeAgo',
  render: Template,
  argTypes: {
    date: {
      control: 'text',
      description: 'ISO date string to format',
    }
  }
};

// Helper to get relative dates
const getRelativeDate = (minutes: number) => {
  const date = new Date();
  date.setMinutes(date.getMinutes() - minutes);
  return date.toISOString();
};

// Just Now
export const JustNow = {
  args: {
    date: getRelativeDate(0),
    locale: 'en'
  }
};

// Minutes Ago
export const MinutesAgo = {
  args: {
    date: getRelativeDate(5),
    locale: 'en'
  }
};

// Hours Ago
export const HoursAgo = {
  args: {
    date: getRelativeDate(120), // 2 hours ago
    locale: 'en'
  }
};

// Yesterday
export const Yesterday = {
  args: {
    date: getRelativeDate(1440), // 24 hours ago
    locale: 'en'
  }
};

// Days Ago
export const DaysAgo = {
  args: {
    date: getRelativeDate(4320), // 3 days ago
    locale: 'en'
  }
};

// Multiple Times Example
export const MultipleExamples = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div>Just now: <ur-time-ago date=${getRelativeDate(0)} locale="en"></ur-time-ago></div>
      <div>5 minutes ago: <ur-time-ago date=${getRelativeDate(5)} locale="en"></ur-time-ago></div>
      <div>2 hours ago: <ur-time-ago date=${getRelativeDate(120)} locale="en"></ur-time-ago></div>
      <div>Yesterday: <ur-time-ago date=${getRelativeDate(1440)} locale="en"></ur-time-ago></div>
      <div>3 days ago: <ur-time-ago date=${getRelativeDate(4320)} locale="en"></ur-time-ago></div>
    </div>
  `
};

// Custom Date
export const CustomDate = {
  args: {
    date: '2024-02-08T10:30:00Z',
    locale: 'en'
  }
};