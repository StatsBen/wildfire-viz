require("react");
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Error = () => {
  return (
    <div css={css``}>
      <span css={css``}>Uh Oh! Couldn&#39t connect to the database :(</span>
    </div>
  );
};

export default Error;
