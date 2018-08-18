import {
  COLOR_PRIMARY,
  COLOR_LIGHT,
  COLOR_FACEBOOK,
  FONT_BASE,
  FONT_SMALL,
  SPACING_SMALL,
  SPACING_BASE
} from "ui/quarks";

export const getButtonColors = modifier => {
  switch (modifier) {
    case "primary":
      return {
        backgroundColor: COLOR_PRIMARY,
        color: COLOR_LIGHT
      };
    case "outline":
      return {
        backgroundColor: "transparent",
        color: COLOR_PRIMARY,
        border: `1px solid ${COLOR_PRIMARY}`
      };
    case "facebook":
      return {
        backgroundColor: COLOR_FACEBOOK,
        color: COLOR_LIGHT
      };
  }
};

export const getButtonSize = size => {
  switch (size) {
    case "base":
      return {
        paddingTop: SPACING_SMALL,
        paddingBottom: SPACING_SMALL,
        paddingRight: SPACING_BASE,
        paddingLeft: SPACING_BASE,
        fontSize: FONT_BASE
      };
    case "small":
      return {
        width: SPACING_BASE * 3,
        paddingTop: SPACING_SMALL / 2,
        paddingBottom: SPACING_SMALL / 2,
        paddingLeft: 0,
        paddingRight: 0,
        justifyContent: "center",
        fontSize: FONT_SMALL,
        textTransform: "uppercase"
      };
  }
};
