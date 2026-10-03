// Build paths in the SVG namespace, without parsing a path as standalone HTML.
function createSvgPath(d, size = 22, transform = '', transformOrigin = '') {
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('width', size);
  svg.setAttribute('height', size);
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'white');
  const path = document.createElementNS(ns, 'path');
  path.setAttribute('d', d);
  if (transform) {
    const group = document.createElementNS(ns, 'g');
    group.setAttribute('transform', transform);
    if (transformOrigin) group.setAttribute('transform-origin', transformOrigin);
    group.appendChild(path);
    svg.appendChild(group);
  } else {
    svg.appendChild(path);
  }
  return svg;
}
