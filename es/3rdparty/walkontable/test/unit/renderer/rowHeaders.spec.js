import RowHeadersRenderer from 'walkontable/renderer/rowHeaders';

function createRenderer() {
  var renderer = new RowHeadersRenderer();
  return {
    renderer: renderer
  };
}

describe('RowHeadersRenderer', function () {
  it('should be correctly setup', function () {
    var _createRenderer = createRenderer(),
        renderer = _createRenderer.renderer;

    expect(renderer.nodeType).toBe('TH');
    expect(renderer.sourceRowIndex).toBe(0);
  });
});