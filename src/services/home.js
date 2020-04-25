import request from './network';

export function getMultiData() {
  return request({
    url: 'http://123.207.32.32:8000/home/multidata',
  });
}
