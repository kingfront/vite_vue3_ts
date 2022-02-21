import request from '@/utils/request'
// api服务
export const fetchRandMusic = () => {
  return request.get('https://api.uomg.com/api/rand.music?sort=热歌榜&format=json')
}
