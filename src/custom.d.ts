type RecordItem ={
  tags: string[];
  notes: string;
  type: string;
  amount: number;//数据类型
  createdAt?: Date;//类(构造函数) 数据类型object可以细分成不同的类
}
//自定义类型,整个src都可以使用,不需要引用