import AuthorContext from "./authorContext";
import { NovelProvider } from "./novelContext";
import PropType from "prop-types";
const ContextProvider = ({ children }) => {
  return (
    <AuthorContext>
      <NovelProvider>{children}</NovelProvider>
    </AuthorContext>
  );
};

ContextProvider.propTypes = {
  children: PropType.node.isRequired,
};
export default ContextProvider;
