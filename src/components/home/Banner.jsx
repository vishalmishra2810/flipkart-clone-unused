import React from "react";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core";
// import { bannerData } from "../../constant/data";

const useStyle = makeStyles((theme) => ({
  container: {},
  image: {
    width: "100%",
    height: 280,
    [theme.breakpoints.down("sm")]: {
      objectFit: "cover",
      height: 180,
    },
  },
}));
const Banner = () => {
  return (
    <div className="App">
      <Carousel breakPoints={breakPoints}>
        <Item>One</Item>
        <Item>Two</Item>
        <Item>Three</Item>
        <Item>Four</Item>
        <Item>Five</Item>
        <Item>Six</Item>
        <Item>Seven</Item>
        <Item>Eight</Item>
      </Carousel>
    </div>
  );
};

export default Banner;
