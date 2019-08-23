import ViewSizeSet from 'walkontable/utils/orderView/viewSizeSet';
import ViewSize from 'walkontable/utils/orderView/viewSize';
import { WORKING_SPACE_ALL, WORKING_SPACE_TOP, WORKING_SPACE_BOTTOM } from 'walkontable/utils/orderView/constants';
describe('ViewSizeSet', function () {
  it('should be correctly constructed', function () {
    var viewSizeSet = new ViewSizeSet();
    expect(viewSizeSet.size).toBeInstanceOf(ViewSize);
    expect(viewSizeSet.workingSpace).toBe(WORKING_SPACE_ALL);
    expect(viewSizeSet.sharedSize).toBe(null);
  });
  it('should set a new size through ViewSize method', function () {
    var viewSizeSet = new ViewSizeSet();
    spyOn(viewSizeSet.size, 'setSize');
    viewSizeSet.setSize(5);
    expect(viewSizeSet.size.setSize).toHaveBeenCalledWith(5);
    viewSizeSet.setSize(9);
    expect(viewSizeSet.size.setSize).toHaveBeenCalledWith(9);
  });
  it('should set a new offset through ViewSize method', function () {
    var viewSizeSet = new ViewSizeSet();
    spyOn(viewSizeSet.size, 'setOffset');
    viewSizeSet.setOffset(5);
    expect(viewSizeSet.size.setOffset).toHaveBeenCalledWith(5);
    viewSizeSet.setOffset(9);
    expect(viewSizeSet.size.setOffset).toHaveBeenCalledWith(9);
  });
  it('should return ViewSize instance', function () {
    var viewSizeSet = new ViewSizeSet();
    expect(viewSizeSet.getViewSize()).toBeInstanceOf(ViewSize);
  });
  it('should return `true` when sharedSize property is set', function () {
    var viewSizeSet = new ViewSizeSet();
    viewSizeSet.sharedSize = new ViewSize();
    expect(viewSizeSet.isShared()).toBe(true);
  });
  it('should return `false` when sharedSize property is not set', function () {
    var viewSizeSet = new ViewSizeSet();
    expect(viewSizeSet.isShared()).toBe(false);
    viewSizeSet.sharedSize = 1;
    expect(viewSizeSet.isShared()).toBe(false);
  });
  it('should return boolean confirmation if working place matches to passed constant', function () {
    var viewSizeSet = new ViewSizeSet();
    expect(viewSizeSet.isPlaceOn()).toBe(false);
    expect(viewSizeSet.isPlaceOn(null)).toBe(false);
    expect(viewSizeSet.isPlaceOn(WORKING_SPACE_ALL)).toBe(true);
    expect(viewSizeSet.isPlaceOn(WORKING_SPACE_TOP)).toBe(false);
    expect(viewSizeSet.isPlaceOn(WORKING_SPACE_BOTTOM)).toBe(false);
    viewSizeSet.workingSpace = WORKING_SPACE_TOP;
    expect(viewSizeSet.isPlaceOn(WORKING_SPACE_ALL)).toBe(false);
    expect(viewSizeSet.isPlaceOn(WORKING_SPACE_TOP)).toBe(true);
    expect(viewSizeSet.isPlaceOn(WORKING_SPACE_BOTTOM)).toBe(false);
    viewSizeSet.workingSpace = WORKING_SPACE_BOTTOM;
    expect(viewSizeSet.isPlaceOn(WORKING_SPACE_ALL)).toBe(false);
    expect(viewSizeSet.isPlaceOn(WORKING_SPACE_TOP)).toBe(false);
    expect(viewSizeSet.isPlaceOn(WORKING_SPACE_BOTTOM)).toBe(true);
  });
  it('should append shared ViewSizeSet to current instance and mark this internally in both instances', function () {
    var viewSizeSet = new ViewSizeSet();
    var sharedViewSizeSet = new ViewSizeSet();
    viewSizeSet.append(sharedViewSizeSet);
    expect(viewSizeSet.workingSpace).toBe(1); // top space

    expect(sharedViewSizeSet.workingSpace).toBe(2); // bottom space

    expect(viewSizeSet.sharedSize).toBe(sharedViewSizeSet.size);
  });
  it('should prepend shared ViewSizeSet to current instance and mark this internally in both instances', function () {
    var viewSizeSet = new ViewSizeSet();
    var sharedViewSizeSet = new ViewSizeSet();
    viewSizeSet.prepend(sharedViewSizeSet);
    expect(viewSizeSet.workingSpace).toBe(2); // bottom space

    expect(sharedViewSizeSet.workingSpace).toBe(1); // top space

    expect(viewSizeSet.sharedSize).toBe(sharedViewSizeSet.size);
  });
});