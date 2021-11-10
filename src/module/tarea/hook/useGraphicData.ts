import { useEffect, useState, createElement } from "react";
import { getGraphicTarea } from "../route";
import { graphicTitle } from "../../../tools";
import { Progress } from "../../../components/common";

export default () => {
  const [state, setState] = useState({});
  const { categories, data, name, holidays, tarea }: any = state;

  useEffect(() => {
    getDataAsync();
  }, []);

  const getDataAsync = async () => {
    const result = await getGraphicTarea({ cdTarea: 1 });
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

  const { avance, porcentajeTiempo, colorProgress, retraso } = tarea || {};

  const dataCardProps = {
    isPadding: true,
    arrItems: [
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

  return { graphicTareaProps, dataCardProps, ticketHeaderProps };
};
