import Layout from '@components/Layout';
import AppLayout from '@components/AppLayout';
import AppRouter from 'routes/AppRouter';

const Main = () => {
  return(
    <Layout>
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </Layout>
  );
}

export default Main;