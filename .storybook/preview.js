import GlobalStyle from "../src/styles/GlobalStyle";
import * as NextImage from "next/image";

const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  a11y: {
    element: "#root",
    manual: false,
  },
  backgrounds: {
    default: "Grey",
    values: [{ name: "Grey", value: "#E0E0E0" }],
  },
};
