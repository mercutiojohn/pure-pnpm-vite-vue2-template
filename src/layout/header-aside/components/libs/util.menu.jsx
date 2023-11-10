/**
 * @description 创建菜单
 * @param {Function} h createElement
 * @param {Object} menu 菜单项
 */
export function elMenuItem (h, menu, type = 'side') {
  let icon = null
  // if (menu.icon) icon = <i class={ `fa fa-${menu.icon}` }/>
  // if (menu.icon) icon = <d2-icon-fa name={ menu.icon }/>
  if (menu.icon) icon = <d2-icon-iconify name={ menu.icon }/>
  else if (menu.iconSvg) icon = <d2-icon-svg name={ menu.iconSvg }/>
  else icon = <i class="fa fa-file-o"/>
  return <el-menu-item
    key={ menu.path }
    index={ menu.path }>
    { icon }
    <span class="title-collapsed">{ menu.title || '未命名菜单' }</span>
    <span slot="title">{ menu.title || '未命名菜单' }</span>
  </el-menu-item>
}

/**
 * @description 创建子菜单
 * @param {Function} h createElement
 * @param {Object} menu 菜单项
 */
export function elSubmenu (h, menu, type = 'side') {
  let icon = null
  // if (menu.icon) icon = <i slot="title" class={ `fa fa-${menu.icon}` }/>
  // if (menu.icon) icon = <d2-icon-fa slot="title" name={ menu.icon }/>
  if (menu.icon) icon = <d2-icon-iconify slot="title" name={ menu.icon }/>
  else if (menu.iconSvg) icon = <d2-icon-svg slot="title" name={ menu.iconSvg }/>
  else icon = <i slot="title" class="fa fa-folder-o"/>
  return <el-submenu
    key={ menu.path }
    index={ menu.path }>
    { icon }
    <span slot="title">{ menu.title || '未命名菜单' }</span>
    { menu.children.map(child => createMenu.call(this, h, child, type)) }
  </el-submenu>
}

/**
 * @description 在组件中调用此方法渲染菜单项目
 * @param {Function} h createElement
 * @param {Object} menu 菜单项
 */
export function createMenu (h, menu, type = 'side') {
  if (menu.children === undefined) return elMenuItem.call(this, h, menu, type)
  return elSubmenu.call(this, h, menu, type)
}
