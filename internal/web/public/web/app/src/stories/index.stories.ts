import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';
import '../components/ui-pill';

storiesOf('Elements|Elements', module)
  .addDecorator(withKnobs)
 
  .add(
    'Headers',
    () => html`
      <h1>Top header</h1>
    `,
  )
  .add('UI Pill', () => html `
    <ui-pill text="Pill"></ui-pill>
  `);