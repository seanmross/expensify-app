import React from 'react';

const EditExpensePage = (props) => {
    console.log(props)
    return (
      <div>
        <div>edit expense component works!</div>
        <p>Editing expense id: {props.match.params.id}</p>
      </div>
    );
};

export default EditExpensePage;
