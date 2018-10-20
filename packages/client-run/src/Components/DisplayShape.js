import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ShapeWrapper from '../Primatives/ShapePrimatives';

class DisplayShape extends PureComponent {
  render() {
    const {
      color, shape, shapeTransform, margin, width,
    } = this.props;
    const formatShape = shape === 'triangle-up' ? 'triangle' : shape;
    const shapeStyle = {
      fill: color === 'none' ? 'white' : color,
    };
    const shapeSVGPaths = {
      square: 'M-35.35533905932738,-35.35533905932738h70.71067811865476v70.71067811865476h-70.71067811865476Z',
      cross: 'M-47.43416490252569,-15.811388300841896L-15.811388300841896,-15.811388300841896L-15.811388300841896,-47.43416490252569L15.811388300841896,-47.43416490252569L15.811388300841896,-15.811388300841896L47.43416490252569,-15.811388300841896L47.43416490252569,15.811388300841896L15.811388300841896,15.811388300841896L15.811388300841896,47.43416490252569L-15.811388300841896,47.43416490252569L-15.811388300841896,15.811388300841896L-47.43416490252569,15.811388300841896Z',
      diamond: 'M0,-65.80370064762462L37.99178428257962,0L0,65.80370064762462L-37.99178428257962,0Z',
      triangle: 'M0,-62.04032394013997L53.72849659117709,31.020161970069985L-53.72849659117709,31.020161970069985Z',
      star: 'M0,-66.73878525749795L14.983790851776883,-20.623418828507067L63.472356608766354,-20.62341882850707L24.244282878494737,7.87744502826516L39.228073730271625,53.99281145725604L1.7763568394002505e-15,25.49194760048381L-39.22807373027161,53.992811457256046L-24.244282878494733,7.877445028265164L-63.47235660876636,-20.623418828507056L-14.983790851776886,-20.623418828507063Z',
    };
    return (
      <ShapeWrapper
        color={color}
        shape={formatShape}
        margin={margin}
        width={width}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <g transform={shapeTransform}>
            <path
              d={shapeSVGPaths[formatShape]}
              style={shapeStyle}
            />
          </g>
        </svg>
      </ShapeWrapper>
    );
  }
}


DisplayShape.propTypes = {
  color: PropTypes.string.isRequired,
  shape: PropTypes.string.isRequired,
  shapeTransform: PropTypes.string.isRequired,
  margin: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default DisplayShape;
