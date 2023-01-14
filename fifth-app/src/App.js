import { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
	let [initialUserList, updatedUserList] = useState([]);

	let saveUserInfo = (userData) => {
		initialUserList = [...initialUserList, userData];
		updatedUserList(initialUserList);
	}

	return (
		<div className="App">
			<AddUser saveUserInfo={saveUserInfo} />
			<UserList userList={initialUserList} />
		</div>
	);
}

export default App;
