"use strict";

const getTriangleArea = new Function("bottom", "height", "return (bottom * height / 2)");

console.log("底辺３ 高さ５の三角形");
console.log(getTriangleArea(3, 5));