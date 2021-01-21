import React, { useEffect, useContext } from "react";
import { UPDATE_CURRENT_ROUTE, StoreContext } from "@/store";
import PropTypes from "prop-types";

const PageItem = (props) => {
  const { route } = props;
  const PageBody = route.component;

  const { dispatch } = useContext(StoreContext);

  useEffect(() => {
    dispatch({
      type: UPDATE_CURRENT_ROUTE,
      value: route,
    });
  }, []);

  return (
    <>
      <PageBody route={route} {...props} />
    </>
  );
};

PageItem.propTypes = {
  route: PropTypes.object,
  name: PropTypes.string,
};

export default PageItem;
