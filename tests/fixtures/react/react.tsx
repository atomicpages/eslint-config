/* eslint-disable no-console */
import { useEffect } from "react";

type Props = {
  name: string;
};

export const Demo = (props: Props): JSX.Element => {
  if (!props.name) {
    return null;
  }

  useEffect(() => {
    console.log("Hello", props.name);
  }, []);

  return (
    <React.Fragment>
      <div
        role="button"
        aria-checked={true}
        aria-checked={true}
        onClick={function () {
          console.log("Clicked");
        }.bind(this)}
      >
        Hello
      </div>
    </React.Fragment>
  );
};
