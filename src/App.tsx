import Greet from './components/greet';
import Person from './components/person';
import './App.css';
import PersonList from './components/personList';
import Status from './components/status';
import Heading from './components/heading';
import Oscar from './components/oscar';
import Button from './components/button';
import Input from './components/input';
import LoggedIn from './components/state/loggedIn';
import List from './components/generic/list';
import Position from './components/positions';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Princess',
      last: 'Diana'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
  ]

  return (
    <div className="App">
      <Greet name="Long" messages={10} isLoggedIn={true}/>
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='error'/>
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to me</Heading>
      </Oscar>
      <Button handleClick={(event, id) => console.log('Button clicked', event, id)} />
      <Input value='' handleChange={(event) => console.log(event)}/>
      <LoggedIn />
      <List 
        items={[
          1,2,3
        ]} 
        onClick={(item) => console.log(item)} 
      />
      <Position position='left-center' />
    </div>
  );
}

export default App;
