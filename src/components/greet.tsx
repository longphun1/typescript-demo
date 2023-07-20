type GreetProps = {
    name: string;
    messages: number;
    isLoggedIn: boolean;
}

const Greet = (props: GreetProps) => {
    return (
        <div>
            { props.isLoggedIn ? 
            <h2>Welcome {props.name}, you have {props.messages} messages</h2>
                :
            <h2>Log In</h2>
        }
        </div>
    )
}

export default Greet;