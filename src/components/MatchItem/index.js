import './index.css'

const MatchItem = props => {
  const {MatchItemDetails, imageClick} = props
  const {thumbnailUrl} = MatchItemDetails

  const onClickButton = () => {
    imageClick(thumbnailUrl)
  }

  return (
    <li>
      <button className="button-image" type="button">
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="image-item"
          onClick={onClickButton}
        />
      </button>
    </li>
  )
}

export default MatchItem
