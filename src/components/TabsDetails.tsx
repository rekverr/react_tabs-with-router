import { useOutletContext, useParams } from 'react-router-dom';

interface Tab {
  id: string;
  title: string;
  content: string;
}

export const TabsDetails = () => {
  const { tabsId } = useParams();
  const { tabs } = useOutletContext<{ tabs: Tab[] }>();
  const tab = tabs && Array.isArray(tabs) ? tabs.find(t => t.id === tabsId) : undefined;

  return (
    <div className="block" data-cy="TabContent">
      {tab ? tab.content : 'Please select a tab'}
    </div>
  );
};
