import fonts from './fonts';
const fontSizes = {
  small: {
    expectation: expect.arrayContaining([
      expect.stringContaining('font-size: 14px;')
    ])
  },
  regular: {
    expectation: expect.arrayContaining([
      expect.stringContaining('font-size: 17px;')
    ])
  },
  big: {
    expectation: expect.arrayContaining([
      expect.stringContaining('font-size: 20px;')
    ])
  },
  large: {
    expectation: expect.arrayContaining([
      expect.stringContaining('font-size: 24px;')
    ])
  }
};

const fontWeights = {
  light: {
    expectation: expect.arrayContaining([
      expect.stringContaining('font-weight: light;')
    ])
  },
  bold: {
    expectation: expect.arrayContaining([
      expect.stringContaining('font-weight: bold;')
    ])
  },
  normal: {
    expectation: expect.arrayContaining([
      expect.stringContaining('font-weight: normal;')
    ])
  }
};

describe('Tests for fonts', () => {
  it('should have the correct font-size', () => {
    expect(fonts.size.small()).toEqual(fontSizes.small.expectation);
    expect(fonts.size.regular()).toEqual(fontSizes.regular.expectation);
    expect(fonts.size.big()).toEqual(fontSizes.big.expectation);
    expect(fonts.size.large()).toEqual(fontSizes.large.expectation);
  });
  it('should have the correct font-weight', () => {
    expect(fonts.weights.light()).toEqual(fontWeights.light.expectation);
    expect(fonts.weights.bold()).toEqual(fontWeights.bold.expectation);
    expect(fonts.weights.normal()).toEqual(fontWeights.normal.expectation);
  });

  it('should have the correct font-weight and font-size', () => {
    expect(fonts.style.heading()).toEqual(fontWeights.bold.expectation);
    expect(fonts.style.heading()).toEqual(fontSizes.large.expectation);

    expect(fonts.style.subheading()).toEqual(fontWeights.bold.expectation);
    expect(fonts.style.subheading()).toEqual(fontSizes.big.expectation);

    expect(fonts.style.standard()).toEqual(fontSizes.regular.expectation);
    expect(fonts.style.standard()).toEqual(fontWeights.normal.expectation);

    expect(fonts.style.subText()).toEqual(fontSizes.small.expectation);
    expect(fonts.style.subText()).toEqual(fontWeights.normal.expectation);
  });
});
