import { Box } from "@mui/material";
import LanguageSwitch from "./components/LanguageSwitch";
import ProjectDescription from "./components/ProjectDescription";
import PageContent from "./components/PageContent";

function App() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <LanguageSwitch />
      <ProjectDescription />
      <Box
        backgroundColor="#f2f2f2"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <PageContent />
      </Box>
    </Box>
  );
}
export default App;
