import React, { useEffect } from "react";
import ReactGA, { FieldsObject } from "react-ga";
import { RouteComponentProps } from "react-router-dom";

ReactGA.initialize("UA-0000000-0");

export const withTracker = <P extends RouteComponentProps>(
  WrappedComponent: React.ComponentType<P>,
  options: FieldsObject = {},
) => {
  const trackPage = (page: string) => {
    ReactGA.set({ page, ...options });
    ReactGA.pageview(page);
    console.log(page)
  };

  return (props: P) => {
    useEffect(() => {
      trackPage(props.location.pathname);
    }, [props.location.pathname]);

    return <WrappedComponent {...props} />;
  };
}