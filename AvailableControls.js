"use strict";function AvailableControls(e){const t=e.controlsList,a=e.onMouseDown,n=e.onTouchStart;return React.createElement("table",{className:"availableControls"},React.createElement("tbody",null,React.createElement("tr",null,t.map(((e,t)=>React.createElement("td",{key:t,className:e,onDragStart:e=>e.preventDefault(),onMouseDown:t=>a(t,e),onTouchStart:t=>n(t,e)}))))))}