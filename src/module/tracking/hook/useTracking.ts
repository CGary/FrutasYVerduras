import { useSelector } from "react-redux";

export default () => {
  const isShowActividades = useSelector(
    (state: any) => state.trackingReducer.isShowActividades
  );
  return { isShowActividades };
};
