export default function TabButton({children, buttonClicked}){
    
    function handleClick() {
        console.log('Hello world')
    }

    return (
        <li><button onClick={buttonClicked}>{children}</button></li>
    );
}