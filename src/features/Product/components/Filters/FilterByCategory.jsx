import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, makeStyles, Typography } from "@material-ui/core";
import categoryApi from "api/categoryApi";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  },
  menu: {
    padding: 0,
    margin: 0,
    listStyleType: "none",
    "& > li": {
      marginTop: theme.spacing(1),
      "&:hover": {
        cursor: 'pointer',
        color: theme.palette.primary.main,
      },
    },
  },
}));

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

function FilterByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      try {
        const categoryList = await categoryApi.getAll();
        console.log("categoryList:", categoryList);
        setCategoryList(categoryList.map((x) => ({ id: x.id, name: x.name })));
      } catch (error) {
        console.log("failed to load categoryList:", error);
      }
    })();
  }, []);

  const handleCategoryClick = (category) => {
    if (onChange) {
      onChange(category.id);
    }
  };

  return (
    <Box className={classes.root}>
      <Typography>Danh mục sản phẩm</Typography>
      <ul className={classes.menu}>
        {categoryList.map((category) => (
          <li key={category.id} onClick={() => handleCategoryClick(category)}>
            <Typography variant="body2">{category.name}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByCategory;
