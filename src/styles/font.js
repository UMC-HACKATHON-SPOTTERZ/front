function FONT({ weight, size }) {
  return `
        font-family: SUIT Variable;
        font-size: ${size}rem;
        font-weight: ${weight};
        `;
}

const font = {
  // 10px = 1rem
  title: FONT({ weight: 800, size: 3 }),
  sub_title: FONT({ weight: 700, size: 2 }),
  bold_12: FONT({ weight: 800, size: 1.2 }),
  medium_12: FONT({ weight: 700, size: 1.2 }),
  regular: FONT({ weight: 500, size: 1.2 }),
};

export default font;
