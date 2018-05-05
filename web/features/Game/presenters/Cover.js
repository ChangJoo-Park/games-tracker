// @flow
import React from "react";
import { Link } from "react-router-dom";
import { GAME_DETAILS_PATH } from "config/routes";

type Props = {
  children: string
};

const Cover = ({ children }: Props) => (
  <Link to={GAME_DETAILS_PATH}>
    <img src={children} />
  </Link>
);

export default Cover;