"use strict";function getSvgCircle(c,e,t){const a=e.toString();return React.createElement("svg",{className:"circle",key:t,width:"calc("+a+"*2)",height:"calc("+a+"*2)"},React.createElement("circle",{cx:"calc("+a+")",cy:"calc("+a+")",r:"calc("+a+")",fill:c}))}function getSvgRing(c,e,t,a){const l="calc("+e.toString()+" - "+t+" / 2)";return React.createElement("svg",{className:"ring",key:a,width:"calc("+l+" * 2 + "+t+")",height:"calc("+l+" * 2 + "+t+")"},React.createElement("circle",{cx:"calc("+l+" + "+t+" / 2)",cy:"calc("+l+" + "+t+" / 2)",r:"calc("+l+")",stroke:c,strokeWidth:t,fill:"transparent"}))}