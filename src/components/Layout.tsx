import { ReactElement } from 'react';
import Footer from './Footer';

type Props = {
  children?: ReactElement;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
