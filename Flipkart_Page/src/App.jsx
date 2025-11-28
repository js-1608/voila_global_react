import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import WhatYouGet from "./components/WhatYouGet";
// … other imports

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <WhatYouGet />

      <div className="container mx-auto my-5 rounded-xl p-5 bg-white "></div>
    </>
  );
}

export default App;
