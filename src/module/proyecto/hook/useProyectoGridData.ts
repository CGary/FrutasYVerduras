import { useEffect, createElement } from "react";
import { getGridProyectos } from "../route";
import { useDispatch, useSelector } from "react-redux";
import { setProyectoGridAction } from "../redux/proyectoGridReducer";
import { Progress } from "../../../components/common";
import { MdEdit } from "react-icons/md";

export default ({ handleViewProyecto }) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: any) => state.proyectoGridReducer);

  const getDataAsync = async () => {
    const result: any = await getGridProyectos();
    dispatch({ type: setProyectoGridAction, payload: result });
  };

  useEffect(() => {
    getDataAsync();
  }, []);

  return {
    columns,
    data: data.map((row) => [
      row.id,
      row.nro,
      row.nombre,
      row.responsable,
      row.prioridad,
      row.inicio,
      row.fin,
      row.estado,
      createElement(Progress, { ...row.avance, isShowText: true }, null),
      row.retraso ? row.retraso + " días" : "",
      createElement(MdEdit, {
        size: "20px",
        onClick: () => {
          handleViewProyecto?.(row.id);
        },
      }),
    ]),
  };
};

const columns = [
  {
    children: "Nro",
    align: "center",
  },
  {
    children: "Nombre",
    align: "left",
  },
  {
    children: "Responsable",
    align: "left",
  },
  {
    children: "Prioridad",
    align: "left",
  },
  {
    children: "Inicio",
    align: "center",
  },
  {
    children: "Finalización",
    align: "center",
  },
  {
    children: "Estado",
    align: "center",
  },
  {
    children: "Avance",
    align: "center",
  },
  {
    children: "Retraso",
    align: "left",
  },
  {
    children: "Acción",
    align: "center",
  },
];
