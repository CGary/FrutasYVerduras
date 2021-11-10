import { useState, useEffect } from "react";
import { getActividadesByProyecto } from "../route";
import { useSelector, useDispatch } from "react-redux";
import { setActividades } from "../../tracking/redux/trackingReducer";

export default () => {
  const dispatch = useDispatch();

  const { responsable, cdProyecto, prioridad, actividades } = useSelector(
    (state: any) => state.trackingReducer
  );

  const [actividadDate, setState] = useState(actividades);

  useEffect(() => {
    (async () => {
      const result = await getActividadesByProyecto({
        cdProyecto,
      });
      dispatch({ type: setActividades, payload: result });
      setState(result);
    })();
  }, []);

  useEffect(() => {
    let result = { ...actividades };
    if (actividades.arrActividad) {
      result = {
        ...actividades,
        arrActividad: actividades.arrActividad?.map((actividad) => ({
          ...actividad,
          arrTarea: actividad.arrTarea?.filter(
            ({ cdResponsable, cdPrioridad }) =>
              isShowTarea({
                cdResponsable,
                responsable,
                cdPrioridad,
                prioridad,
              })
          ),
        })),
      };
    }

    setState(result);
  }, [responsable, actividades, prioridad]);

  const isShowTarea = (props) => {
    const { cdResponsable, responsable, cdPrioridad, prioridad } = props;

    const flagResposable = !!responsable ? cdResponsable == responsable : true;

    const flagPrioridad = !!prioridad ? cdPrioridad === prioridad : true;

    return flagResposable && flagPrioridad;
  };

  return actividadDate;
};
