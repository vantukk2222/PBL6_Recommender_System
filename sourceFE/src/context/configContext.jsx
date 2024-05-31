import { AccountProvider } from "./accountContext";
import { AuthProvider } from "./authContext";
import { AuthorProvider } from "./authorContext";
import { CategoryProvider } from "./categoryContext";
import { CommentProvider } from "./commentContext";
import { NovelProvider } from "./novelContext";
import { LibraryProvider } from "./libraryContext";
import PropTypes from "prop-types";
import { HistoryProvider } from "./historiesContext";

const ContextProvider = ({ children }) => {
  return (
    <AuthProvider>
      <AccountProvider>
        <CategoryProvider>
          <CommentProvider>
            <AuthorProvider>
              <NovelProvider>
                <LibraryProvider>
                  <HistoryProvider>{children}</HistoryProvider>
                </LibraryProvider>
              </NovelProvider>
            </AuthorProvider>
          </CommentProvider>
        </CategoryProvider>
      </AccountProvider>
    </AuthProvider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
