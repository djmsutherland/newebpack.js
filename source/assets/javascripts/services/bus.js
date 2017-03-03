import Vue from "vue";

const Bus = new Vue();

export default Bus;

export const EVENTS = {

  // Window
  WINDOW_RESIZE: "windowResize",
  WINDOW_ORIENTATION_CHANGE: "orientationchange"

};
