// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetail, changeTab, isActiveTav} = props

  onchange = () => {
    changeTab(tabDetail.tabId)
  }
  const bordcol = isActiveTav ? 'blue' : ''
  return (
    <li className="tab-item-cont">
      <button
        type="button"
        onClick={onchange}
        className={`bord-botm ${bordcol}`}
      >
        {tabDetail.displayText}
      </button>
    </li>
  )
}

export default TabItem
