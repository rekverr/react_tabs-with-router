import { NavLink, useParams } from 'react-router-dom';
import { TabsDetails } from '../components/TabsDetails';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabsId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          <li data-cy="Tab" className={tabsId === 'tab-1' ? 'is-active' : ''}>
            <NavLink to="/tabs/tab-1">Tab 1</NavLink>
          </li>
          <li data-cy="Tab" className={tabsId === 'tab-2' ? 'is-active' : ''}>
            <NavLink to="/tabs/tab-2">Tab 2</NavLink>
          </li>
          <li data-cy="Tab" className={tabsId === 'tab-3' ? 'is-active' : ''}>
            <NavLink to="/tabs/tab-3">Tab 3</NavLink>
          </li>
        </ul>
      </div>

      {!tabsId ? (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      ) : (
        <TabsDetails tabs={tabs} />
      )}
    </>
  );
};
