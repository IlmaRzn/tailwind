import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./Components/About/About";
import Appbar from "./Components/Appbar/Appbar";
import Contact from "./Components/Contact/Contact";
import Feedback from "./Components/Feedback/Feedback";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Pertners from "./Components/Pertners/Pertners";
import Programs from "./Components/Programs/Programs";
import Resources from "./Components/Resources/Resources";
import Stories from "./Components/Stories/Stories";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/appbar" Component={() => Appbar()} />
        <Route path="/about" Component={() => About()} />
        <Route path="/programs" Component={() => Programs()} />
        <Route path="/resourses" Component={() => Resources()} />
        <Route path="/stories" Component={() => Stories()} />
        <Route path="/pertners" Component={() => Pertners()} />
        <Route path="/feedback" Component={() => Feedback()} />
        <Route path="/footer" Component={() => Footer()} />
        <Route path="/contact" Component={() => Contact()} />
        <Route path="/" Component={() => Home()} />
      </Routes>
    </Router>
  );
}

export default App;
