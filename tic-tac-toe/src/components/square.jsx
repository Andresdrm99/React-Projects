import { TURNS } from "../constants";
export const Square = ({children, isSelected, updateBoard, index}) => {
  const handleClick = () => {
    updateBoard(index);
  }

  const selected = ` ${
  index === undefined 
    ? isSelected 
      ? 'is-selected' 
      : '' 
    : children === TURNS.X 
    ? 'equis' 
    : children === TURNS.O
    ? 'circle' 
    : ''
}`
  return (
    <div className= {'square' + selected} onClick={handleClick}>
      {children}
    </div>
  )
}