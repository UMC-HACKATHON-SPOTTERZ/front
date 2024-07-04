function FONT({ weight, size }) {
  return `
        font-family: SUIT Variable;
        font-size: ${size}rem;
        font-weight: ${weight};
        `;
}

const font = {
  // 10px = 1rem
  title: FONT({ weight: 800, size: 2 }),
  bold_13: FONT({ weight: 800, size: 1.3 }),
  bold_16: FONT({ weight: 800, size: 1.6 }),
  bold_18: FONT({ weight: 800, size: 1.8 }),
  medium_15: FONT({ weight: 500, size: 1.5 }),
  medium_16: FONT({ weight: 600, size: 1.6 }),
  regular_14: FONT({ weight: 700, size: 1.4 }),
};

export default font;
