import CellsRenderer from 'walkontable/renderer/cells';

function createRenderer() {
  var renderer = new CellsRenderer();
  return {
    renderer: renderer
  };
}

describe('CellsRenderer', function () {
  it('should be correctly setup', function () {
    var _createRenderer = createRenderer(),
        renderer = _createRenderer.renderer;

    expect(renderer.nodeType).toBe('TD');
    expect(renderer.sourceRowIndex).toBe(0);
  });
});