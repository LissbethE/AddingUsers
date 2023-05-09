import Card from './../UI/Card';

const UsersList = function ({ users, onRemove }) {
  return (
    <ul className="list">
      {users.map((e, i) => (
        <Card key={Math.random().toString()} classes="list__item">
          <span className="list__name">{e.username}</span>
          <span className="list__age">{e.age} years old</span>
          <span className="list__country">{e.country}</span>

          <button className="list__btn" onClick={() => onRemove(i)}>
            <p>X</p>
          </button>
        </Card>
      ))}
    </ul>
  );
};

export default UsersList;
