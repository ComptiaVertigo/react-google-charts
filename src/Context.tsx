import * as React from "react";
import { chartDefaultProps } from "./default-props";

import {
  ChartDefaultsProps,
  ReactGoogleChartProps,
  ReactGoogleChartPropsWithDefaults
} from "./types";
const { Provider, Consumer } = React.createContext(chartDefaultProps);

export const ContextProvider = ({
  children,
  value
}: {
  children: any;
  value: ReactGoogleChartPropsWithDefaults;
}) => {
  return <Provider value={value}>{children}</Provider>;
};

export const ContextConsumer = ({
  render
}: {
  render: ((context: ChartDefaultsProps) => JSX.Element | null);
}) => {
  return (
    <Consumer>
      {context => {
        return render(context);
      }}
    </Consumer>
  );
};
