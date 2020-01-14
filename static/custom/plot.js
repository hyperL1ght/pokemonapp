// adapt from https://www.d3-graph-gallery.com/graph/barplot_animation_start.html

// set the dimensions and margins of the graph
// margin convention: https://bl.ocks.org/mbostock/3019563
var margin = {top: 10, right: 30, bottom: 90, left: 40},
width = 460 - margin.left - margin.right,
height = 450 - margin.top - margin.bottom;

var margin = {top: 35, right: 35, bottom: 35, left: 35},
    outerWidth = 500,
    outerHeight = 500,
    innerWidth = outerWidth - margin.left - margin.right,
    innerHeight = outerHeight - margin.top - margin.bottom;

// append a svg object to the placeholder div in the destinated template
// [top-left, top-right, bottom-left, bottom-right] -> [(0, 0), (0, height), (width, height), (width, 0)]
// just remember that the top-left is now the origin   
var svg = d3.select("#graphDiv")
    .append("svg")
    .attr("width", outerWidth)
    .attr("height", outerHeight)
    .append("g") // group the entire plot in a <g>-element
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); // reposition it within the svg-element

// Define scale function for X-axis then use it to add the X-axis as a group 
var x = d3.scaleBand()
    .domain(graphData.map(function(d) { return d.class; })) // input interval
    .range([0, innerWidth]) // output interval
    .padding(0.2); 

svg.append("g")
    .attr("transform", "translate(0," + innerHeight + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

//  Define scale function for X-axis then use it to add the X-axis as a group 
var y = d3.scaleLinear()
    .domain([0, 1]) // input interval - this fixed because probability must be within [0, 1]
    .range([innerHeight, 0]); // output interval
    
svg.append("g")
.call(d3.axisLeft(y));

// Bars
svg.selectAll("bar") // return a list of selectors, "bar" or whatever string works, it just a placeholder to append actual svg shape latter i.e., rect
.data(graphData) // map each item in the graphData list to a selector in the list of selectors return by selectAll 
.enter() // first must call .enter()
.append("rect") // before we replace the placeholder selector with an actual svg shape
// define attribute for each rect element, (x, y) -> top-left position, (width, height) -> length of grow in x-y directions
.attr("fill", "#69b3a2")
.attr("x", function(d) { return x(d.class); }) // use x scale function to get pixel position
.attr("width", x.bandwidth()) // fixed for all bars 
// no bar at the beginning thus, use y scale function to get pixel position
.attr("y", function(d) { return y(0); })
.attr("height", function(d) { return innerHeight - y(0); }); // always equal to 0

// Animation
svg.selectAll("rect") // this must be rect since we apply  
.transition()
.duration(800)
.attr("y", function(d) { return y(d.prob); }) // height to grow, again use y scale function, d.prob in within [0, 1]
.attr("height", function(d) { return innerHeight - y(d.prob); })
.delay(function(d,i){console.log(i) ; return(i*100)});