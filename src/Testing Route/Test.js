import React from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { LogoutOutlined, UploadFile } from "@mui/icons-material";

const routes = [
  {
    id: 1,
    routeName: "Dashboard",
    routePath: "/dashboard",
    iconComponent: <DashboardIcon />,
  },
  {
    id: 2,
    routeName: "Users",
    routePath: "test1",
    iconComponent: <PeopleOutlinedIcon />,
  },
  {
    id: 3,
    routeName: "Statistics",
    routePath: "test2",
    iconComponent: <TimelineOutlinedIcon />,
  },
  {
    id: 4,
    routeName: "Reports",
    routePath: "test3",
    iconComponent: <BarChartOutlinedIcon />,
  },
  {
    id: 5,
    routeName: "Upload File",
    routePath: "upload-file",
    iconComponent: <UploadFile />,
  },
];
export default function Test() {
  return (
    <div>
      {/* <ul>
        <li>
          <Link to="">Test1</Link>
        </li>
        <li>
          <Link to="/test/test2">Test2</Link>
        </li>
        <li>
          <Link to="/test/test3">Test3</Link>
        </li>
      </ul> */}
      <List>
        {routes.map((route, index) => (
          <ListItem
            key={route.routeName}
            disablePadding
            sx={{ display: "block" }}
          >
            <ListItemButton
            //   onClick={() => changeSection(route)}
              sx={{
                minHeight: 48,
                // justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                //   mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {route.iconComponent}
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText
                primary={route.routeName}
                // sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
