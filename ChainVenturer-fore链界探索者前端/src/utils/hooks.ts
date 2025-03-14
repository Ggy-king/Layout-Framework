// 用于封装一些全局的hook，可以单独导入某些方法使用，也可以统一导入 hook 对象，从 hook 对象中 . 具体的方法
 
import { ElMessage, ElMessageBox } from 'element-plus'

// ElNotification

/**
 * 封装一个全局的 message 方法，用于显示消息提示
 * @param message 消息内容
 * @param type 消息类型，默认为 success
 * @param [options] 消息选项
 */
export const message = (
  message: string,
  type: 'success' | 'warning' | 'info' | 'error' = 'success',
  options: any = {}
) => {
  ElMessage({
    message,
    type,
    duration: 4000,
    offset: 100,
    showClose: true,
    plain: true,
    ...options
  })
}



/**
 * 封装一个全局的 confirm 方法，用于显示确认对话框
 * @param message 对话框内容
 * @param title 对话框标题，默认为 '提示'
 * @param [options] 对话框选项
 * @return Promise<boolean>
 */
export const confirm = (message: string, title: string = '提示', options: any = {}) => {
  if (Object.keys(options).length === 0) {
    options = {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
      lockScroll: false,
      roundButton: true,
      confirmButtonClass:'confirm-button'
    }
  }
  return new Promise((resolve, reject) => {
    ElMessageBox.confirm(message, title, options)
      .then(() => {
        resolve(true)
      })
      .catch(() => {
        reject(false)
      })
  })
}

 
/**
 * 统一导出一个 hooks 方法对象，包含所有 hook 方法
 */
export default {
  message,
  confirm,
}