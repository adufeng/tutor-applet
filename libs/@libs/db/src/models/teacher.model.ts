import { ApiProperty } from '@nestjs/swagger';
import { modelOptions, prop } from '@typegoose/typegoose';

// 给添加的数据加入时间戳
@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class TeacherModel {
  @prop({ required: true })
  @ApiProperty({ description: '姓名', example: '张三' })
  name: string;

  @prop({ required: true })
  @ApiProperty({ description: '年龄', example: 20 })
  age: number;

  @prop({ required: true })
  @ApiProperty({ description: '性别', example: '男' })
  sex: string;

  @prop({ required: true })
  @ApiProperty({ description: '微信', example: 'abc123' })
  wechat: string;

  @prop({ required: true })
  @ApiProperty({ description: 'QQ', example: '8888888' })
  qq: string;

  @prop({ required: true })
  @ApiProperty({ description: '高考分数', example: 600 })
  fraction: number;

  @prop({ required: true })
  @ApiProperty({ description: '学校', example: '河南理工大学' })
  school: string;

  @prop({ required: true })
  @ApiProperty({ description: '授课类型', example: '专职/兼职' })
  type: string;
}
