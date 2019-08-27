require("react");
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Error = props => {
  return (
    <div css={css``}>
      <h4 css={css``}>{`Uh Oh! Couldn't connect to the database :(`}</h4>
      <h4>{`message: ${props.error.message}`}</h4>
    </div>
  );
};

export default Error;
