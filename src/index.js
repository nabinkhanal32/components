import React from 'react';
import ReactDOM from 'react-dom';
import ApproveCard from './ApproveCard'
import CommentDetail from './commentDetail';
import faker from 'faker';
const App = () => {

  return (
    <div className="ui container comments">
      <ApproveCard>
        <CommentDetail author="sachin" date="Today at 2:30PM" comment="hello " image={faker.image.avatar()} />
      </ApproveCard>
      <ApproveCard>
        <CommentDetail author="poonam" date="Today at 1:30PM" comment="hello guys" image={faker.image.avatar()} />
      </ApproveCard>
      <ApproveCard>
        <CommentDetail author="Nabin" date="Today at 5:30PM" comment="k xa khabar " image={faker.image.avatar()} />

      </ApproveCard>
      <ApproveCard>
        <CommentDetail author="Rajiv" date="Today at 9:30PM" comment="kam xaena laptop bigreyo " image={faker.image.avatar()} />
        {/* <SearchBar /> */}
      </ApproveCard>
    </div >
  );

};
ReactDOM.render(<App />, document.querySelector("#root"));