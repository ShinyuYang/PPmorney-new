import recordStore from '@/store/recordStore';
import tagStore from '@/store/tagStore';


const store={
  ...recordStore,
//tag store
  ...tagStore
  //浅拷贝
};

//record store.
export default store;