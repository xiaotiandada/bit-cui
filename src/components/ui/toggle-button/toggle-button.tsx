import React from 'react';
// import ToggleButton from '@bit/lekanmedia.shared-ui.toggle-button';

export type ToggleButtonProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function ToggleButton({ text }: ToggleButtonProps) {
  return (
    <section>
				{text }
	</section>
  );
}
