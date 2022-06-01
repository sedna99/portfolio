1. yarn add -D next-router-mock

2. import 
import singletonRouter from 'next/router';
import mockRouter from 'next-router-mock';


3. add below code 
```//mock for router object
jest.mock('next/router', () => require('next-router-mock'));
//mock for next/link obj
jest.mock('next/dist/client/router', () => require('next-router-mock'));

//set intial route to mock router
beforeEach(() => {
  mockRouter.setCurrentUrl("/initial");
});```

4. make test code 
  ```//testing link components
  it('test link components are correctly mapped', async () => {
    const header = render(<Header />);

    fireEvent.click(header.getByText('Home'));
    expect(singletonRouter).toMatchObject({ asPath: '/' });

    fireEvent.click(header.getByText('Games'));
    expect(singletonRouter).toMatchObject({ asPath: '/games' });

    fireEvent.click(header.getByText('History'));
    expect(singletonRouter).toMatchObject({ asPath: '/history' });

    fireEvent.click(header.getByText('Career'));
    expect(singletonRouter).toMatchObject({ asPath: '/career' });

    fireEvent.click(header.getByText('Contacts'));
    expect(singletonRouter).toMatchObject({ asPath: '/contacts' });
  })```