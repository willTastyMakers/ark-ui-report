import { css } from "@/styled-system/css";
import ArkUiAccordion from "../components/ark-accordion";

const gradientBackground = css({
  bg: "linear-gradient(to bottom, {colors.brand}, white)",
});

const cardStyles = css({
  bg: "white",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
});

const titleStyles = css({
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "10px",
});

const bulletStyles = css({
  display: "flex",
  alignItems: "center",
  marginBottom: "5px",

  _before: {
    content: '"•"',
    marginRight: "5px",
    color: "brand",
  },
});

const footerStyles = css({
  marginTop: "20px",
  textAlign: "center",

  "& a": {
    color: "brand",
    textDecoration: "none",
  },
});

export default function Home() {
  return (
    <div className={gradientBackground}>
      <div className={cardStyles}>
        <h1 className={titleStyles}>Welcome to Panda CSS Codesandbox</h1>
        <div className={bulletStyles}>
          <span>Create beautiful user interfaces</span>
        </div>
        <div className={bulletStyles}>
          <span>Easily customize styles</span>
        </div>
        <div className={bulletStyles}>
          <span>Build responsive layouts</span>
        </div>
        <div className={footerStyles}>
          <a href="https://panda-css.com/docs">Panda CSS Documentation</a>
        </div>
      </div>

      <ArkUiAccordion />
    </div>
  );
}
