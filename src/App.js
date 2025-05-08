import { Container, Typography } from "@mui/material";
import "./App.css";
import Button from "./component/common/CommonButton";
import Layout from "./component/layout/Layout";
import CommonTitle from "./component/common/CommonTitle";
import Router from "./routes/router";

function App() {
  return (
    <div className="App" style={{}}>
      <Layout>
        <Router />
        {/* <CommonTitle color="third">제목입니다</CommonTitle>
        <Container sx={{ width: "1000px", display: "flex" }}>
          <Button> 되나요?되나요?</Button>
        </Container> */}
      </Layout>
    </div>
  );
}

export default App;
