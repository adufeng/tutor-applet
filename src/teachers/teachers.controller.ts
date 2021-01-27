import { TeacherModel } from '@libs/db/models/teacher.model';
import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Crud({
  // Teacher 增删改查
  model: TeacherModel,
  routes: {
    find: {
      decorators: [ApiOperation({ summary: '获取全部教师列表' })],
    },
    findOne: {
      decorators: [ApiOperation({ summary: '查询教师详情' })],
    },
    create: {
      decorators: [ApiOperation({ summary: '创建教师信息' })],
    },
    update: {
      decorators: [ApiOperation({ summary: '更新教师信息' })],
    },
    delete: {
      decorators: [ApiOperation({ summary: '删除教师' })],
    },
  },
})
@Controller('teachers')
@ApiTags('Teacher')
export class TeachersController {
  constructor(@InjectModel(TeacherModel) private readonly model) {}
}
