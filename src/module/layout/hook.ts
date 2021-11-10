import { useEffect } from "react";
import { emitter, burguerEvent } from "../../tools";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useSelector, useDispatch } from "react-redux";
import { setNavBarOpenAction, setNavBarNegationAction } from "./redux";

export const useNavBarOpen = () => {
  const isNavBarOpen = useSelector(
    (state: any) => state.layoutReducer?.isNavBarOpen
  );
  const dispatch = useDispatch();

  const isDesktopVisible = useMediaQuery("(min-width:960px)");

  useEffect(() => {
    dispatch({
      type: setNavBarOpenAction,
      payload: { isNavBarOpen: isDesktopVisible },
    });
  }, [isDesktopVisible]);

  useEffect(() => {
    const listener = emitter.addListener(burguerEvent, () => {
      dispatch({
        type: setNavBarNegationAction,
      });
    });
    return () => {
      listener.remove();
    };
  }, []);
  const handleCloseNavBar = () => {
    dispatch({
      type: setNavBarOpenAction,
      payload: { isNavBarOpen: false },
    });
  };
  return { isNavBarOpen, handleCloseNavBar };
};
