import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { MainLayout } from "../../module/layout";
import { NewTarea } from "../../module/tarea/page";
import { NewActividad } from "../../module/actividad/page";
import { NewProyecto } from "../../module/proyecto/page";
import { Tracking } from "../../module/tracking/page";

export default function Routes() {
  return (
    <MainLayout>
      <Switch>
        <Route exact path={["/", "/home"]} component={Tracking}></Route>
        <Route exact path={"/actividad"} component={NewActividad}></Route>
        <Route exact path={"/tarea"} component={NewTarea}></Route>
        <Route exact path={"/proyecto"} component={NewProyecto}></Route>
        <Route exact path={"/tracking"} component={Tracking}></Route>
        <Redirect to="/" />
      </Switch>
    </MainLayout>
  );
}
