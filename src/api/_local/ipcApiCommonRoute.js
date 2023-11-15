
export const ipcApiCommonRoute = {
    /* 窗口控制 */
    //最小化
    windowMin: 'controller.frameaction.windowMin',
    //最大化
    windowMax: 'controller.frameaction.windowMax',
    //最小化到托盘 
    windowClose: 'controller.frameaction.windowClose',
    //直接退出
    windowExit: 'controller.frameaction.windowExit',
    //刷新
    windowRefresh: 'controller.frameaction.windowRefresh',
    //判断窗口是否是最大化
    isWindowMax: 'controller.frameaction.isWindowMax',
    //窗口监听
    addWindowListeners: 'controller.frameaction.addWindowListeners',

    //快捷键功能api
    initKeyboardShortcuts: 'controller.keyboardShortcuts.acceleratorKey',
}