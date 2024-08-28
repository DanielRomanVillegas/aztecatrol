import MainLayout from "./layouts/MainLayout";
import { HomeView } from "./views/HomeView";

function App() {
  return (
    <>
      <MainLayout>
        <HomeView />
      </MainLayout>
    </>
  );
}

export default App;
