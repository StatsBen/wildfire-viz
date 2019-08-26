require("react");
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const LoadingThing = () => {
  return (
    <div css={css``}>
      <span
        css={css`
          font-size: 2em;
        `}
      >
        Loading...... ... ...
      </span>
    </div>
  );
};

export default LoadingThing;
