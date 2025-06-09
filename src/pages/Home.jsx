import TechStack from '../features/TechStack';
import {StrassenButton, DjikstraButton} from './home-contents/RedirectButton';
import GroupMembers from './home-contents/GroupMembers';
import Introduction from './home-contents/Introduction';

function Home() {
  return (
    <>
        <Introduction/>
        <div className="flex flex-row items-center justify-around h-auto w-screen border-neutral-700 border-2 p-20">
          <DjikstraButton />
          <StrassenButton />
        </div>
        <TechStack />
        <GroupMembers/>
    </>
  );
}

export default Home;