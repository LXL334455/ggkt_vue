import request from '@/utils/request'

const api_name = '/admin/vod/teacher'

export default {
  pageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/findQueryPage/${page}/${limit}`,
      method: 'post',
      data: searchObj
    })
  },
  // 根据指定ID删除讲师
  removeById(id) {
    return request({
      url: `${api_name}/remove/${id}`,
      method: 'delete'
    })
  },
  // 新增讲师
  saveTeacher(teacher) {
    return request({
      url: `${api_name}/saveTeacher`,
      method: 'post',
      data: teacher
    })
  },
  // 根据id查询讲师
  getById(id) {
    return request({
      url: `${api_name}/get/${id}`,
      method: 'get'
    })
  },
  // 更新讲师信息
  updateById(teacher) {
    return request({
      url: `${api_name}/updateTeacher`,
      method: 'put',
      data: teacher
    })
  },
  // 根据ID批量删除讲师
  benchRemoveTeacher(idList) {
    return request({
      url: `${api_name}/benchRemoveTeacher`,
      method: 'delete',
      data: idList
    })
  }
}
