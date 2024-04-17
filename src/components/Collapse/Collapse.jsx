import { useState } from 'react'
import '../Collapse/collapse.css'
import CollapseArrow from "../../assets/images/arrow_back_ios-24px 2.png"


export function Collapse ({title,content}){

  const [isCollapsed, setIsCollapsed] = useState(true);

  function toggleCollapse() {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className='collapse'>
      <div className='collapse-header' onClick={toggleCollapse}>
        <div className='collapse-title'>{title}</div>
        <div className={`collapse-arrow ${isCollapsed ? 'closed' : 'open'}`}>
          <img src={CollapseArrow} alt='CollapseArrow'/>
        </div>
      </div>
      {!isCollapsed && <div className='collapse-content'>{content}</div>}

    </div>
  )
}

export default Collapse