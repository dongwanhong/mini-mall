import { pure } from '../lib/util';

export default function request(options = {}) {
  const oOptions = {
    ...options,
  };
  const { success = pure, fail = pure, complete = pure } = oOptions;

  Reflect.deleteProperty(oOptions, 'success');
  Reflect.deleteProperty(oOptions, 'fail');
  Reflect.deleteProperty(oOptions, 'complete');

  const p = new Promise((resolve, reject) => {
    wx.request({
      ...oOptions,
      success: resolve,
      fail: reject,
    });
  });

  return p.then(success, fail).finally(complete);
}
