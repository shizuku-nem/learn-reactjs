import { Box, Link, makeStyles } from "@material-ui/core";
import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "nowrap row",
    justifyContent: "center",
    alignItems: "center",

    padding: 0,
    listStyleType: "none",

    "& > li": {
      padding: theme.spacing(2, 4),
    },
    "& > li > a": {
      color: theme.palette.grey[700],
    },
    "& > li > a.active": {
      color: theme.palette.primary.main,
      textDecoration: "underline",
    },
  },
}));

ProductMenu.propTypes = {};

function ProductMenu(props) {
  const classes = useStyles();
  const { url } = useRouteMatch();

  return (
    <Box component="ul" className={classes.root}>
      <li>
        {/* Link của MUI để style, NavLink của react-router-dom để navigate */}
        <Link component={NavLink} to={url} exact>
          Mô tả
        </Link>
      </li>
      <li>
        <Link component={NavLink} to={`${url}/additional`} exact>
          Thêm thông tin
        </Link>
      </li>
      <li>
        <Link component={NavLink} to={`${url}/reviews`} exact>
          Bình luận
        </Link>
      </li>
    </Box>
  );
}

export default ProductMenu;
