/**
 *
 * Tests for If
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { Text } from 'react-native';
import { render } from '@testing-library/react-native';

import If from '../index';

describe('<If />', () => {
  it('Should render and match the snapshot', () => {
    const baseElement = render(<If />);
    expect(baseElement).toMatchSnapshot();
  });
  it('Should render the correct prop component based on the condition', () => {
    const conditionTrueText = 'Shoudld render when condition is true';
    const conditionFalseText = 'Should render condition is false';
    const OtherwiseComponent = () => <Text>{conditionFalseText}</Text>;
    const TrueConditionComponent = () => <Text>{conditionTrueText}</Text>;
    const props = {
      otherwise: <OtherwiseComponent />,
      condition: true
    };
    const { getByText } = render(
      <If {...props}>
        <TrueConditionComponent />
      </If>
    );
    expect(getByText(conditionTrueText)).toBeTruthy();
    props.condition = false;
    const { getByText: textQueryOnReRender } = render(
      <If {...props}>
        <TrueConditionComponent />
      </If>
    );
    expect(textQueryOnReRender(conditionFalseText)).toBeTruthy();
  });
});
