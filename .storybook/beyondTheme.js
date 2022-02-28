import { create } from '@storybook/theming';
import logo from './logo.svg'

console.log('HELLO', logo);

export default create({
  base: 'light',
  brandTitle: 'The Beyond Group',
  brandUrl: 'https://thebeyondgroup.la',
  brandImage: logo,
});
