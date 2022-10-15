import { Box } from "@mui/material";
import LanguageSwitch from "./components/LanguageSwitch";
import ProjectDescription from "./components/ProjectDescription";
import PageContent from "./components/PageContent";

function App() {
  return (
    <Box>
      <LanguageSwitch />
      <ProjectDescription />
      <PageContent />
    </Box>
  );
}
export default App;
