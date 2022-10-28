import { Box, Divider } from "@mui/material";
import LanguageSwitch from "./components/LanguageSwitch";
import ProjectDescription from "./components/ProjectDescription";
import PageContent from "./components/PageContent";
import Footer from "./components/Footer";

function App() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <LanguageSwitch />
      <ProjectDescription />
      <Box
        backgroundColor="#f2f2f2"
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <PageContent />
        <Footer />
      </Box>
    </Box>
  );
}
export default App;
