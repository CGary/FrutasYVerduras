import * as React from "react";
import styled from "styled-components";
import { List, ListItem, ListItemText, Collapse } from "@material-ui/core";
import { HiChevronRight, HiChevronDown } from "react-icons/hi";

export default function NavBarContentView({ data, onSelectMenuItem }) {
  const [state, setState] = React.useState(null);

  const NavBarItemView = (props) => {
    const { name, data, catalog } = props;
    const handleClick = () => {
      if (!!data.length) {
        setState((oldState) => {
          if (catalog === oldState) {
            return null;
          }
          return catalog;
        });
        return;
      }
      onSelectMenuItem(props);
    };

    const IconExpand = () => {
      if (!data?.length) {
        return null;
      }
      if (state === catalog) {
        return <HiChevronDown size="18px" />;
      }
      return <HiChevronRight size="18px" />;
    };
    return (
      <ListItem button className="navbar-listitem" onClick={handleClick}>
        <ListItemText primary={name} className="navbar-listitemtext" />
        <IconExpand />
      </ListItem>
    );
  };
  return (
    <Main>
      <List component="div" disablePadding>
        {data.map((objItem) => (
          <React.Fragment key={"catalog-" + objItem.catalog}>
            <NavBarItemView {...objItem} />
            {!!objItem.data?.length && (
              <Collapse
                in={state === objItem.catalog}
                timeout="auto"
                unmountOnExit
              >
                <List
                  component="div"
                  disablePadding
                  className="navbar-list-child"
                >
                  {objItem.data.map((objItemChild) => (
                    <NavBarItemView
                      key={"catalog-" + objItemChild.catalog}
                      {...objItemChild}
                    />
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  color: #aabbbb;
  padding: 0 16px;
  font-size: 12px;

  .navbar-list-child {
    padding-left: 40px;
  }
  .navbar-listitem {
    padding: 0;
  }
  .navbar-listitemtext {
    height: 39px;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: auto;
    align-content: center;
  }
  .navbar-listitemtext span {
    font-size: 12px;
  }
  .navbar-listitemtext span:hover {
    color: white;
  }
`;
