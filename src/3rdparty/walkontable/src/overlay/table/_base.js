import ColumnFilter from '../../filter/column';
import RowFilter from '../../filter/row';
import Overlay from '../_base';
import Table from '../../table';

class OverlayTable extends Table {
  alignOverlaysWithTrimmingContainer() {

  }

  draw(fastDraw = false) {
    const { wot } = this;
    const { cloneOverlay, wtViewport } = wot;
    const totalRows = this.instance.getSetting('totalRows');
    const totalColumns = this.instance.getSetting('totalColumns');
    const rowHeaders = wot.getSetting('rowHeaders');
    const rowHeadersCount = rowHeaders.length;
    const columnHeaders = wot.getSetting('columnHeaders');
    const columnHeadersCount = columnHeaders.length;

    this.tableOffset = this.wot.cloneSource.wtTable.tableOffset;

    let startRow;

    if (Overlay.isOverlayTypeOf(cloneOverlay, Overlay.CLONE_TOP) ||
          Overlay.isOverlayTypeOf(cloneOverlay, Overlay.CLONE_TOP_LEFT_CORNER)) {
      startRow = 0;
    } else if (Overlay.isOverlayTypeOf(cloneOverlay, Overlay.CLONE_BOTTOM) ||
                 Overlay.isOverlayTypeOf(cloneOverlay, Overlay.CLONE_BOTTOM_LEFT_CORNER)) {
      startRow = Math.max(totalRows - wot.getSetting('fixedRowsBottom'), 0);
    } else {
      startRow = wtViewport.rowsRenderCalculator.startRow;
    }
    let startColumn;

    if (Overlay.isOverlayTypeOf(cloneOverlay, Overlay.CLONE_LEFT) ||
          Overlay.isOverlayTypeOf(cloneOverlay, Overlay.CLONE_TOP_LEFT_CORNER) ||
          Overlay.isOverlayTypeOf(cloneOverlay, Overlay.CLONE_BOTTOM_LEFT_CORNER)) {
      startColumn = 0;
    } else {
      startColumn = wtViewport.columnsRenderCalculator.startColumn;
    }
    this.rowFilter = new RowFilter(startRow, totalRows, columnHeadersCount);
    this.columnFilter = new ColumnFilter(startColumn, totalColumns, rowHeadersCount);

    this.tableRenderer.setHeaderContentRenderers(rowHeaders, columnHeaders);

    if (Overlay.isOverlayTypeOf(cloneOverlay, Overlay.CLONE_BOTTOM) ||
            Overlay.isOverlayTypeOf(cloneOverlay, Overlay.CLONE_BOTTOM_LEFT_CORNER)) {
      // do NOT render headers on the bottom or bottom-left corner overlay
      this.tableRenderer.setHeaderContentRenderers(rowHeaders, []);
    }

    this.resetOversizedRows();

    this.tableRenderer
      .setViewportSize(this.getRenderedRowsCount(), this.getRenderedColumnsCount())
      .setFilters(this.rowFilter, this.columnFilter)
      .render();

    this.adjustColumnHeaderHeights();

    if (this.wot.isOverlayName(Overlay.CLONE_BOTTOM)) {
      this.markOversizedRows();
      this.wot.cloneSource.wtOverlays.adjustElementsSize();
    }

    this.refreshSelections(fastDraw);
    wot.drawn = true;
    return this;
  }

  markOversizedColumnHeaders() {
    throw new Error('This method is not used in OverlayTable');
  }
}

export default OverlayTable;
