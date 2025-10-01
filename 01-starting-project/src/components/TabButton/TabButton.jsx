export default function TabButton({children, buttonClicked, isTabSelected}){
    
    function handleClick() {
        console.log('Hello world')
    }

    return (
        <li><button className={isTabSelected? 'active':undefined} onClick={buttonClicked}>{children}</button></li>
    );
}