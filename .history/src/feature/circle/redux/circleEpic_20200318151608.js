import { ofType } from "redux-observable";
import { LOAD_COLOR, SPAWN_CIRCLE } from "../../../actionTypes";
import { loadColor } from "../../../api";
import { loadColorSuccess, spawnCircle } from "./circleActions";

export const loadColorEpic = action$ => action$.pipe(
  ofType(LOAD_COLOR),
  mergeMap(action => fr(loadColor()).pipe(
    map(response => loadColorSuccess(response)),
  ))
)

export const spawnCircleEpic = action$ => action$.pipe(
  ofType(SPAWN_CIRCLE),
  mergeMap(action => from(spawnCircle()).pipe(
    map
  ))
)