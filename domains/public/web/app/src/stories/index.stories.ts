import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';
import { UiPill } from '../components/ui-pill';
import '../components/ui-pill';

storiesOf('Elements', module)
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