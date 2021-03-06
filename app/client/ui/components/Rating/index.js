// @flow
import * as React from "react";
import Stack from "../Stack";
import Icon from "ui/components/Icon";
import "./rating.scss";

type Props = {
  value: number
};

const Rating = ({ value }: Props) => (
  <div className="rating">
    {value > 0 ? (
      <Stack align="center">
        {value}
        <Icon name="star" color="accent" className="rating-star-icon" />
      </Stack>
    ) : value === -1 ? (
      <span className="rating-unrate">Unrate?</span>
    ) : (
      "Rate"
    )}
  </div>
);

export default Rating;
