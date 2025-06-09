import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

function GenerateGraph({ matrix }) {
  const svgRef = useRef();

  useEffect(() => {
    // Dimensions
    const width = 1720;
    const height = 700;

    // Clear previous SVG content on update
    d3.select(svgRef.current).selectAll("*").remove();

    // Create SVG
    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // Create nodes array
    const nodes = matrix.map((_, i) => ({ id: i }));

    // Create links from matrix
    const links = [];
    matrix.forEach((row, i) => {
      row.forEach((weight, j) => {
        if (weight !== 0) {
          links.push({ source: i, target: j, weight });
        }
      });
    });

    // Simple force simulation
  const simulation = d3.forceSimulation(nodes)
    .force("charge", d3.forceManyBody().strength(0)) // more negative spreads out
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collision", d3.forceCollide().radius(50)) // adds spacing between nodes
    .force("link", d3.forceLink(links).distance(400).id(d => d.id))
    .on("tick", ticked);

    // Draw links
    const link = svg.append("g")
      .attr("stroke", "#aaa")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke-width", d => Math.sqrt(d.weight));

    // Draw nodes
    const node = svg.append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", 15)
      .attr("fill", "#00C15D")
      .call(drag(simulation));

    // Node labels
    const label = svg.append("g")
      .selectAll("text")
      .data(nodes)
      .join("text")
      .text(d => `Node ${d.id + 1}`)
      .attr("font-size", 20)
      .attr("fill", "#ffffff")
      .attr("text-anchor", "middle")
      .attr("dy", 4);

      const edgeLabels = svg.append("g")
      .selectAll("text")
      .data(links)
      .join("text")
      .text(d => d.weight)
      .attr("font-size", 30)
      .attr("fill", "#ffffff")
      .attr("text-anchor", "middle");

    // On drag behavior
    function drag(simulation) {
      function dragstarted(event) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      }

      function dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      }

      function dragended(event) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      }

      return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    }

    // Tick function to update positions
    function ticked() {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);

      label
        .attr("x", d => d.x)
        .attr("y", d => d.y - 20);
      
      edgeLabels
        .attr("x", d => (d.source.x + d.target.x) / 2)
        .attr("y", d => (d.source.y + d.target.y) / 2);
    }

    // Clean up on unmount
    return () => simulation.stop();

  }, [matrix]);

  return <svg ref={svgRef}></svg>;
}

export default GenerateGraph;
