import { useParams } from 'react-router-dom';

export const TabsDetails = ({ tabs }) => {
  const { tabsId } = useParams();
  const tab = tabs.find(t => t.id === tabsId);

  return (
    <div className="block" data-cy="TabContent">
      {tab ? tab.content : 'Please select a tab'}
    </div>
  );
};
