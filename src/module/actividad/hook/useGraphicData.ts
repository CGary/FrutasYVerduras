import { useEffect, useState, createElement } from "react";
import { getGraphicActividad } from "../route";
import { graphicTitle } from "../../../tools";
import { Progress } from "../../../components/common";

export default () => {
  const [state, setState] = useState({});
  const { categories, data, name, holidays, actividad }: any = state;

  useEffect(() => {
    getDataAsync();
  }, []);

  const getDataAsync = async () => {
    const result = await getGraphicActividad({ cdActividad: 1 });
    setState(result);
  };

  const graphicTareaProps = {
    title: graphicTitle,
    subtitle: "",
    categories,
    series: [
      {
        data,
        name,
        type: "line",
      },
    ],
    plotBands: holidays,
    isMovil: false,
  };

  const ticketHeaderProps = {
    name,
    handleCloseTicketHeader: () => {
      alert("close header");
    },
  };

  const { inicio, fin, avance, porcentajeTiempo, colorProgress, retraso } =
    actividad || {};

  const dataCardProps = {
    isPadding: true,
    arrItems: [
      { title: "Fecha Inicio:", body: inicio },
      { title: "Fecha Fin:", body: fin },
      {
        title: "Avance:",
        body: avance + "%",
      },
      {
        reactElement: createElement(Progress, {
          avance,
          porcentajeTiempo,
          colorProgress,
        }),
      },
      {
        title: "Retraso:",
        body: retraso + " días",
        isAlert: true,
      },
    ],
  };

  return { graphicTareaProps, ticketHeaderProps, dataCardProps };
};
