//import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

/*function App() {
  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  );
}*/

export default App;

/*//import Message from './Message';
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New", "Not", "Nay", "Non", "Nah"];
  //return <div><Message /></div>

  //onSelectItem={handleSelectionItem}
  const handleSelectionItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="HowSayNo"
        onSelectItem={handleSelectionItem}
      />
    </div>
  );
}

export default App;*/
