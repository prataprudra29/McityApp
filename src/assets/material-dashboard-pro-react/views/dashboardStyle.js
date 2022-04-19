import {
  successColor,
  tooltip,
  cardTitle,
  grayColor
} from "assets/jss/material-dashboard-pro-react.js";

import hoverCardStyle from "assets/jss/material-dashboard-pro-react/hoverCardStyle.js";
import extendedTablesStyle from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.js";

const dashboardStyle = {
  ...extendedTablesStyle,
  ...hoverCardStyle,
  tooltip,
  cardTitle: {
    ...cardTitle,
    marginTop: "0px",
    marginBottom: "2px"
  },
  cardIconTitle: {
    ...cardTitle,
    marginTop: "12px",
    marginBottom: "0px"
  },
  cardProductTitle: {
    ...cardTitle,
    marginTop: "0px",
    marginBottom: "2px",
    textAlign: "center"
  },
  cardCategory: {
    color: grayColor[0],
    fontSize: "14px",
    paddingTop: "7px",
    marginBottom: "0",
    marginTop: "0",
    margin: "0"
  },
  cardProductDesciprion: {
    textAlign: "center",
    color: grayColor[0]
  },
  stats: {
    color: grayColor[0],
    fontSize: "12px",
    lineHeight: "20px",
    display: "inline-flex",
    "& svg": {
      position: "relative",
      top: "2px",
      width: "16px",
      height: "14px",
      marginRight: "2px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      top: "2px",
      fontSize: "16px",
      marginRight: "2px"
    }
  },
  productStats: {
    paddingTop: "5px",
    paddingBottom: "5px",
    margin: "0"
  },
  successText: {
    color: successColor[0]
  },
  upArrowCardCategory: {
    width: 14,
    height: 14
  },
  underChartIcons: {
    width: "15px",
    height: "15px"
  },
  price: {
    color: "inherit",
    "& h4": {
      marginBottom: "0px",
      marginTop: "0px"
    }
  }
};

export default dashboardStyle;
