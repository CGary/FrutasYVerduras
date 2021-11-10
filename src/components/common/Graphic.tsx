import * as React from "react";
import * as Highcharts from "highcharts";
require("highcharts/modules/exporting")(Highcharts);

export default function Grafico(props) {
  const {
    title,
    subtitle,
    categories,
    series,
    plotBands,
    onSelectCategory,
    isMovil = false,
  } = props;

  const createChartLine = () => {
    Highcharts.chart("grafico-reporte", {
      title: {
        text: isMovil ? "" : title,
      },

      subtitle: {
        text: subtitle,
      },

      tooltip: {
        pointFormat: "{series.name}: <b>{point.y}</b><br/>",
        valueSuffix: " %",
        shared: true,
      },

      yAxis: {
        title: {
          text: "%",
        },
        max: 100,
        min: 0,
      },

      xAxis: {
        title: {
          text: "Fechas",
        },
        type: "category",
        labels: {
          step: 1,
          rotation: -45,
        },
        categories,
        plotBands,
        max: 9,
        min: 0,
      },

      plotOptions: {
        line: {
          marker: {
            enabled: false,
          },
        },
        series: {
          label: {
            connectorAllowed: false,
          },
          point: {
            events: {
              click: function () {
                this?.category && onSelectCategory?.(this.category);
              },
            },
          },
        },
      },

      series,

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                layout: "horizontal",
                align: "center",
                verticalAlign: "bottom",
              },
            },
          },
        ],
      },

      chart: {
        events: {
          click: function () {
            this?.hoverPoint?.category &&
              onSelectCategory?.(this.hoverPoint.category);
          },
        },
      },

      legend: {
        enabled: false,
      },

      exporting: {
        enabled: false,
      },

      credits: {
        enabled: false,
      },
    });
  };

  React.useEffect(() => {
    createChartLine();
  }, [props]);

  return <div id="grafico-reporte" style={{ overflow: "auto" }} />;
}
