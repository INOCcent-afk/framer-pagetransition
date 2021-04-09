import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { History } from "history";

interface HistoryProps {
  history: History;
}

const ScrollToTop: React.FC<HistoryProps> = ({ history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return null;
};

export default withRouter(ScrollToTop);
