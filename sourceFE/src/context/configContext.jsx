
import { AccountProvider } from "./accountContext";
import { AuthProvider } from "./authContext";
import { AuthorProvider } from "./authorContext";
import { CategoryProvider } from "./categoryContext";
import { CommentProvider } from "./commentContext";
import { NovelProvider } from "./novelContext";
import PropType from "prop-types";
const ContextProvider = ({ children }) => {
  return (
    <AuthProvider>
    <AccountProvider>
      <CategoryProvider>
      <CommentProvider>
        <AuthorProvider>
          <NovelProvider>
                {children}
          </NovelProvider>
        </AuthorProvider>
      </CommentProvider>
    </CategoryProvider>
    </AccountProvider>
    </AuthProvider>
   
  );
};

ContextProvider.propTypes = {
  children: PropType.node.isRequired,
};
export default ContextProvider;
