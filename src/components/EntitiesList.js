import withLoading from './withLoading'

function EntitiesList({ data, onEntityDetailsClick, propsToDisplay }) {
  return (
    <ul>
      {data.map(entity =>
        <li key={entity.id}>
          <button onClick={() => onEntityDetailsClick(entity.id)}>👀</button>
          {Object.entries(propsToDisplay).map(entry =>
            <span key={entry[0]}> {entry[1]}: <strong>{entity[entry[0]]}</strong></span>
          )}
        </li>
      )}
    </ul>
  )
}

export default withLoading(EntitiesList)
