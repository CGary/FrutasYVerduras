import * as React from "react";
import { useEffect } from "react";
import "datatables.net-dt/css/jquery.dataTables.css";
import $ from "jquery";
import "datatables.net";

const Grid = (props) => {
  const table = React.useRef();
  const dataTable = React.useRef();

  const createTable = () => {
    const alto = document.getElementById("app").offsetHeight - (50 + 36 + 36);

    if (dataTable.current) {
      dataTable.current.destroy();
      $(table.current).empty();
    }

    const { columns, dinamicHide } = props;

    dataTable.current = $(table.current).DataTable({
      columns,
      //fuerza los textos en las columnas en negrita.
      columnDefs: [
        {
          className: "table-th-bold",
          targets: columns.map((obj, i) => i),
        },
      ],
      autoWidth: true,
      scrollX: false,
      scrollY: dinamicHide ? true : `${alto}px`,
      scrollCollapse: dinamicHide ? false : true,
      // dom: "lfrtip",
      dom: "lrtip",
      order: [],
      paging: false,
      info: false,
      destroy: true,
      language: {
        emptyTable: "No hay datos disponibles para mostrar",
      },
    });
  };

  const setDatos = () => {
    removeEvents();
    const { current } = dataTable;
    current.clear();
    current.rows.add(props.data);
    current.search(props.buscar);
    current.columns.adjust().draw();
    addEvents();
  };

  const addEvents = () => {
    [
      ...table.current
        .getElementsByTagName("tbody")[0]
        .getElementsByTagName("tr"),
    ].map((node) => node.addEventListener("dblclick", dbclick_row));
  };

  const removeEvents = () => {
    [
      ...table.current
        .getElementsByTagName("tbody")[0]
        .getElementsByTagName("tr"),
    ].map((node) => node.removeEventListener("dblclick", dbclick_row));
  };

  const dbclick_row = function () {
    const cdID = dataTable.current.row(this).data()[0];
    props.setFicha?.(cdID);
    props.selectedRow?.(cdID);
  };

  props.setInitial?.(setDatos);

  useEffect(() => {
    createTable();
    // props.data?.length && setDatos(props.data);
    return () => {
      try {
        removeEvents();
        dataTable.current.clear();
        dataTable.current.destroy();
        $(table.current).empty();
      } catch (err) {
        console.log(err);
      }
    };
  }, []);
  useEffect(() => {
    setDatos();
  }, [props.data, props.buscar]);
  return (
    <table
      id={props.id}
      ref={table}
      style={{ fontSize: "13px" }}
      className="hover row-border"
    ></table>
  );
};

export default React.memo(Grid);
