import { useState } from 'react'
import './css/siderbar.css'


import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { GoArchive } from "react-icons/go";


export function Sidebar() {
  const [sidebar, setSidebar] = useState<boolean>(false)

  const classSidebar = sidebar ? 'sidebar on' : 'sidebar'

  return (
    <aside className={classSidebar}>
      <h2>Nav</h2>
      <button className='btnSidebar' onClick={() => setSidebar(!sidebar)}>{sidebar ? <IoIosArrowBack /> : <IoIosArrowForward />}</button>
    </aside>
  )
}
