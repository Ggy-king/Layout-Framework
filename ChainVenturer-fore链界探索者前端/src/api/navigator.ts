import request from '@/utils/request'

export const getNavigatorData = () => {
    return request.get('/navigator')
}