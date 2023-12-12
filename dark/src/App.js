import "./App.css";
import { createContext, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

const style = {
  border: "1px solid green",
  margin: 12,
  padding: 8,
};

function App() {
  const [theme, setTheme] = useState("dark");
  const [dataSource, setDataSource] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);
  const fetchMoreData = () => {
    if (dataSource.length < 200) {
      setTimeout(() => {
        setDataSource(dataSource.concat(Array.from({ length: 20 })));
      }, 500);
    } else {
      setHasMore(false);
    }
  };

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    // <ThemeContext.Provider value={{ theme, toggleTheme }}>
    //   <div className="App" id={theme}>
    //     <div className="switch">
    //       <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
    //       <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
    //     </div>
    <div>
      <p>
        <b>Infinite Scroll Tutorial</b>
      </p>
      <InfiniteScroll
        dataLength={dataSource.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<p>Loading...</p>}
        endMessage={<p>You are all set!</p>}
      >
        {dataSource.map((item, index) => {
          return (
            <div style={style}>
              This is a div #{index + 1} inside InfiniteScroll
            </div>
          );
        })}
      </InfiniteScroll>
    </div>
    //   </div>
    // </ThemeContext.Provider>
  );
}

export default App;
