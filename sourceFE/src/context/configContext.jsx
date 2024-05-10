
import { AuthorProvider } from "./authorContext";
import { NovelProvider } from "./novelContext";
import PropType from "prop-types";
const ContextProvider = ({ children }) => {
  return (
    <AuthorProvider>
      <NovelProvider>
          {children}
      </NovelProvider>
    </AuthorProvider>
      
  
  );
};

ContextProvider.propTypes = {
  children: PropType.node.isRequired,
};
export default ContextProvider;
