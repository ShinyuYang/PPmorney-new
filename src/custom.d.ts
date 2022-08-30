type RecordItem ={
  tags: string[];
  notes: string;
  type: string;
  amount: number;//数据类型
  createdAt?: Date;//类(构造函数) 数据类型object可以细分成不同的类
}
//自定义类型,整个src都可以使用,不需要引用
type Tag={
  id: string;
  name: string;
}

type TagListModel ={
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => 'success' | 'duplicated';//success 表示成功,duplicated表示name重复
  update: (id: string,name: string) => 'success'|'not found'|'duplicated';
  remove: (id: string) => boolean;
  save: () => void;
}
interface Window{
  tagList: Tag[];
}