export default function TabButton({children, onSelect, isSelected}){
    return (
    <li>
        <button className={isSelected ? 'active': undefined} onClick={onSelect}>{children}
        </button>
    </li>
    );
}

/**
 * If we write onClicl={handleClick()} i.e with the parenthesis, it will be executed when the page is loaded and not when 
 * the button is clicked and hence the function is being passed as a value.
 * 
 * onSelect is a prop that is being passed as a function in the form of a value to the TabButton component. This will trigger 
 * the onSelect prop in the App.js and there we have executed a handler function for the button.
 */