import getBase64 from './CryptoJS'
let waterHandle = {}
/**
 * 水印处理
 * @param {String} imageUrl 图片Url
 * @param {String} watertext 添加水印文字
 * @param {String} datatext 添加水印日期
 */
waterHandle.setImageUrl = function (imageUrl, watertext, datatext) {
    // --要加水印的文本--地址信息
    let detailMsg = watertext || ''
    let arr = []
    if (detailMsg) {
        if (detailMsg.length > 20) {
            detailMsg = detailMsg.replace(/(.{20})/g, '$1,')
            arr = detailMsg.split(',')
            arr.reverse()
        } else {
            arr = [detailMsg]
        }
    }
    // --要加水印的文本--需要在最上面加一个时间的水印文本
    if (datatext) {
        arr.push(datatext)
    }
    let allMsg = '?x-oss-process=image/resize,w_800,h_800'
    let megFirst = '/watermark,type_d3F5LXplbmhlaQ,size_26,text_'
    let megLast = ',color_cccccc,shadow_80,rotate_45,fill_1,t_80,g_se,x_10,y_'
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index]
        let tempBase64 = getBase64(element)
        tempBase64 = tempBase64.replace(/[+]/g, '-')
        tempBase64 = tempBase64.replace(/\//g, '_')
        allMsg = allMsg + megFirst + tempBase64 + megLast + (10 + 20 * index)
    }
    imageUrl = imageUrl + allMsg
    return imageUrl
}

export {
    waterHandle
}
