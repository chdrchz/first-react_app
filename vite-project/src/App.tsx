import Message from './Message';

function App() {
  // It's really important to close the react components, otherwise we get a compilation error
  return <div><Message /></div> // This can also be <Message></Message>
}


// Have to export so that we can use this component somewhere else
export default App;