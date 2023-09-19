import { BottomDrawer } from '../../components/BottomDrawer';
import { Greeting } from '../../components/Greeting';
import { HomeQuickAccess } from '../../components/HomeQuickAccess';
import { Navbar } from '../../components/Navbar';
import { Sidebar } from '../../components/Sidebar';
import { useAuth } from '../../hooks/UseAuth';

export const HomePage = () => {
  const { user } = useAuth();

  return (
    <>
      <Navbar />
      <Sidebar />
      <Greeting name={user!.name} />
      <HomeQuickAccess />
      <BottomDrawer />
    </>
  );
}
