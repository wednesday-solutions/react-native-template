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

  it('If should render the child component when props.condition = true', () => {
    const conditionTrueText = 'Should render when condition is true';
    const conditionFalseText = 'Should render condition is false';
    const OtherwiseComponent = () => <Text>{conditionFalseText}</Text>;
    const TrueConditionComponent = () => <Text>{conditionTrueText}</Text>;
    const props = {
      otherwise: <OtherwiseComponent />,
      condition: true
    };
    const { queryByText, getByText } = render(
      <If {...props}>
        <TrueConditionComponent />
      </If>
    );
    expect(getByText(conditionTrueText)).toBeTruthy();
    expect(queryByText(conditionFalseText)).not.toBeTruthy();
  });

  it('If should render the component passed on otherwise when props.condition = false', () => {
    const conditionFalseText = 'Should render condition is false';
    const conditionTrueText = 'Should render when condition is true';
    const TrueConditionComponent = () => <Text>{conditionTrueText}</Text>;
    const OtherwiseComponent = () => <Text>{conditionFalseText}</Text>;
    const props = {
      otherwise: <OtherwiseComponent />,
      condition: false
    };

    const { queryByText, getByText } = render(
      <If {...props}>
        <TrueConditionComponent />
      </If>
    );
    expect(getByText(conditionFalseText)).toBeTruthy();
    expect(queryByText(conditionTrueText)).not.toBeTruthy();
  });
});
