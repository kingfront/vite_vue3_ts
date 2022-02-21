import { reactive, toRefs } from 'vue'
import { fetchRandMusic } from '@/api/service'
import { Music } from '@/model/ComModel'

export const HomeHooks = () => {
  interface HomeType {
    loading: boolean
    musicData: Music
  }
  const indexRec = reactive<HomeType>({
    loading: true,
    musicData: {
      name: '',
      picurl: '',
      artistsname: '',
      url: ''
    }
  })

  // 查询音乐信息
  const fetchMusicInfo = async () => {
    const { data } = await fetchRandMusic()
    indexRec.loading = false
    indexRec.musicData = data
  }

  return { ...toRefs(indexRec), fetchMusicInfo }
}
