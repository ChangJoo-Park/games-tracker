// @flow
import * as React from "react";
import Stack from "ui/containers/Stack";
import StarIcon from "ui/styles/icon/star.svg";
import "./rating.css";

type Props = {
  value: number
};

const Rating = ({ value }: Props) => (
  <div className="rating text-lead">
    {value > 0 ? (
      <Stack align="center">
        {value}
        <StarIcon className="rating-star-icon" />
      </Stack>
    ) : value === -1 ? (
      <span className="rating-unrate">Unrate?</span>
    ) : (
      "Rate"
    )}
  </div>
);

export default Rating;
