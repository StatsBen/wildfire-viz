require("react");
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Paragraph = props => {
  return (
    <div css={css``}>
      <p css={css``}>{props.content}</p>
    </div>
  );
};

export default Paragraph;
