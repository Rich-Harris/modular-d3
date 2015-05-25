import { halfπ } from '../math/trigonometry';
import { d3_svg_diagonalProjection, d3$svg$diagonal } from './diagonal';
import { d3$svg } from './svg';

var d3$svg$diagonal$radial;

d3$svg$diagonal$radial = function() {
  var diagonal = d3$svg$diagonal(),
      projection = d3_svg_diagonalProjection,
      projection_ = diagonal.projection;

  diagonal.projection = function(x) {
    return arguments.length
        ? projection_(d3_svg_diagonalRadialProjection(projection = x))
        : projection;
  };

  return diagonal;
};

function d3_svg_diagonalRadialProjection(projection) {
  return function() {
    var d = projection.apply(this, arguments),
        r = d[0],
        a = d[1] - halfπ;
    return [r * Math.cos(a), r * Math.sin(a)];
  };
}

export { d3$svg$diagonal$radial, d3_svg_diagonalRadialProjection };