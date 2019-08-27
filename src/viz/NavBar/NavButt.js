require("react");
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const NavButt = props => {
  const { data, selected, year } = props;

  const ReadyButt = () => {
    return (
      <div
        css={css`
          background: lime;
        `}
      >
        {year}
      </div>
    );
  };

  const InactiveButt = () => {
    return (
      <div
        css={css`
          background: maroon;
        `}
      >
        {year}
      </div>
    );
  };

  const SelectedButt = () => {
    return (
      <div
        css={css`
          background: maroon;
        `}
      >
        {year}
      </div>
    );
  };

  if (data == null) {
    return <InactiveButt />;
  } else {
    if (selected) {
      return <SelectedButt />;
    } else {
      return <ReadyButt />;
    }
  }
};

export default NavButt;
